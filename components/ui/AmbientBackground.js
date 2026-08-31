'use client';

import { useEffect, useRef } from 'react';

/**
 * AmbientBackground — the page's deep-space backdrop.
 * A single canvas starfield of knot-particles (the trefoil mark stamped at
 * every depth) under the mark's construction geometry. Each particle keeps
 * its own depth, twinkle phase and drift, so the field moves on its own;
 * the pointer adds two live layers on top:
 *   1. depth parallax — every star eases toward the cursor by its z factor
 *   2. proximity glow — stars near the cursor brighten and swell slightly
 *   3. click ripples — a pointerdown sends an expanding ring that lifts
 *      and nudges the stars it passes through
 * The construction geometry keeps its CSS-variable parallax (--px/--py).
 * Particle ink is read from the container's computed color, so both themes
 * work from one code path; a MutationObserver rebuilds the sprite when
 * [data-theme] flips. prefers-reduced-motion gets one static frame and no
 * listeners; coarse pointers skip parallax/glow but keep drift and taps.
 */

const LENS = 'M43.2,53.93 A22,22 0 0,0 71.52,37.57 A22,22 0 0,0 43.2,53.93 Z';

const DRIFT = 4; // px/s at full depth, down-left like the old tile drift
const PROX_RADIUS = 170;
const RIPPLE_SPEED = 380; // px/s ring expansion
const RIPPLE_BAND = 110; // ring thickness
const RIPPLE_LIFE = 1.3; // seconds
const RIPPLE_PUSH = 14; // max radial nudge in px

// vector-effect keeps these true screen-pixel hairlines no matter how large
// the geometry is scaled — it must sit on each shape, not the group.
const HAIRLINE = { vectorEffect: 'non-scaling-stroke' };

function MarkGeometry({ className, shell = true }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <g className="ambient-spin">
        <g fill="none" stroke="currentColor" strokeWidth=".75">
          <circle cx="50" cy="33" r="22" style={HAIRLINE} />
          <circle cx="64.72" cy="58.5" r="22" style={HAIRLINE} />
          <circle cx="35.28" cy="58.5" r="22" style={HAIRLINE} />
          {shell && <circle cx="50" cy="50" r="46" style={HAIRLINE} />}
        </g>
        <polygon
          points="50,20 75.98,65 24.02,65"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          style={HAIRLINE}
        />
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d={LENS} style={HAIRLINE} />
          <path d={LENS} transform="rotate(120 50 50)" style={HAIRLINE} />
          <path d={LENS} transform="rotate(240 50 50)" style={HAIRLINE} />
        </g>
      </g>
    </svg>
  );
}

// Pre-render one knot to an offscreen canvas so the frame loop is pure
// drawImage. The mark is 3-fold symmetric, so a handful of rotations is
// all the variety the field needs.
function makeKnotSprite(color, rotation) {
  const S = 128;
  const c = document.createElement('canvas');
  c.width = S;
  c.height = S;
  const g = c.getContext('2d');
  const lens = new Path2D(LENS);
  g.fillStyle = color;
  g.translate(S / 2, S / 2);
  g.rotate(rotation);
  g.scale(S / 100, S / 100);
  g.translate(-50, -50);
  for (let i = 0; i < 3; i += 1) {
    g.fill(lens);
    g.translate(50, 50);
    g.rotate((Math.PI * 2) / 3);
    g.translate(-50, -50);
  }
  return c;
}

export default function AmbientBackground() {
  const ref = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const canvas = canvasRef.current;
    if (!el || !canvas) return undefined;

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const ctx = canvas.getContext('2d');

    let w = 0;
    let h = 0;
    let raf = 0;
    let last = 0;
    let time = 0;
    let stars = [];
    let sprites = [];
    const ripples = [];
    // fx/fy: target pointer fraction (-0.5..0.5); sx/sy: eased value the
    // stars actually follow; x/y: pixel position for the proximity glow.
    const pointer = { fx: 0, fy: 0, sx: 0, sy: 0, x: -1e4, y: -1e4, on: false };

    const buildSprites = () => {
      const color = getComputedStyle(el).color;
      sprites = [0, 1, 2, 3].map((i) =>
        makeKnotSprite(color, (i * Math.PI) / 6)
      );
    };

    const seed = () => {
      const count = Math.round(Math.min(190, Math.max(70, (w * h) / 12000)));
      stars = Array.from({ length: count }, () => {
        const z = Math.random() ** 1.6; // bias toward the far plane
        return {
          nx: Math.random(),
          ny: Math.random(),
          z,
          size: (6 + z * 20) * (0.75 + Math.random() * 0.5),
          base: 0.1 + z * 0.14,
          phase: Math.random() * Math.PI * 2,
          tw: 0.4 + Math.random() * 1.1,
          sprite: Math.floor(Math.random() * 4),
        };
      });
    };

    const draw = (dt) => {
      time += dt;
      // Framerate-independent easing toward the pointer target
      const k = 1 - Math.exp(-dt * 5);
      pointer.sx += (pointer.fx - pointer.sx) * k;
      pointer.sy += (pointer.fy - pointer.sy) * k;

      for (let i = ripples.length - 1; i >= 0; i -= 1) {
        if (time - ripples[i].t > RIPPLE_LIFE) ripples.splice(i, 1);
      }

      ctx.clearRect(0, 0, w, h);

      // Wrap in a padded box so knots slide off one edge before re-entering
      const pad = 60;
      const ww = w + pad * 2;
      const hh = h + pad * 2;

      for (const s of stars) {
        const zf = 0.35 + s.z * 0.65;
        const v = DRIFT * zf;
        let x = ((((s.nx * ww - time * v) % ww) + ww) % ww) - pad;
        let y = ((((s.ny * hh + time * v) % hh) + hh) % hh) - pad;

        // Depth parallax — near stars follow the cursor hardest
        x += pointer.sx * (8 + s.z * 26);
        y += pointer.sy * (8 + s.z * 26);

        let alpha = s.base * (0.78 + 0.22 * Math.sin(s.phase + time * s.tw));
        let size = s.size;

        if (pointer.on) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < PROX_RADIUS * PROX_RADIUS) {
            const f = 1 - Math.sqrt(d2) / PROX_RADIUS;
            alpha += 0.26 * f * f;
            size *= 1 + 0.22 * f * f;
          }
        }

        for (const r of ripples) {
          const age = time - r.t;
          const radius = age * RIPPLE_SPEED;
          const dx = x - r.x;
          const dy = y - r.y;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          const band = 1 - Math.abs(d - radius) / RIPPLE_BAND;
          if (band > 0) {
            const g = band * band * (1 - age / RIPPLE_LIFE);
            alpha += 0.4 * g;
            const push = RIPPLE_PUSH * g * zf;
            x += (dx / d) * push;
            y += (dy / d) * push;
          }
        }

        if (alpha <= 0.01) continue;
        ctx.globalAlpha = Math.min(alpha, 0.85);
        ctx.drawImage(
          sprites[s.sprite],
          x - size / 2,
          y - size / 2,
          size,
          size
        );
      }
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      // Positions are stored as fractions, so a resize never re-seeds —
      // the field just re-projects onto the new box (no popping).
      w = el.clientWidth;
      h = el.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingQuality = 'high';
      if (!stars.length) seed();
      if (reduced || coarse) draw(0);
    };

    const loop = (now) => {
      // Clamped dt: a hidden tab resumes without the field jumping ahead
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      draw(dt);
      // Coarse pointers only animate while a tap ripple is live — the idle
      // field is a static frame, not a standing rAF cost on phone batteries.
      if (coarse && ripples.length === 0) {
        raf = 0;
        return;
      }
      raf = window.requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (raf) return;
      last = performance.now();
      raf = window.requestAnimationFrame(loop);
    };

    const stopLoop = () => {
      if (raf) {
        window.cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    buildSprites();
    resize();
    window.addEventListener('resize', resize);

    // Rebuild the particle ink when the theme flips
    const observer = new MutationObserver(() => {
      buildSprites();
      if (reduced || (coarse && !raf)) draw(0);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    const onMove = (e) => {
      pointer.fx = e.clientX / window.innerWidth - 0.5;
      pointer.fy = e.clientY / window.innerHeight - 0.5;
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.on = true;
      // The construction geometry still parallaxes via CSS vars
      el.style.setProperty('--px', pointer.fx.toFixed(4));
      el.style.setProperty('--py', pointer.fy.toFixed(4));
    };

    const onOut = (e) => {
      if (!e.relatedTarget) pointer.on = false;
    };

    const onDown = (e) => {
      if (e.button !== 0) return;
      ripples.push({ x: e.clientX, y: e.clientY, t: time });
      if (ripples.length > 5) ripples.shift();
      // On coarse pointers the loop sleeps between taps — wake it so the
      // ripple animates, and it parks itself again when the ripple dies.
      startLoop();
    };

    // A hidden tab draws nothing — resume where the field left off
    const onVisibility = () => {
      if (document.hidden) {
        stopLoop();
      } else if (!reduced && (!coarse || ripples.length > 0)) {
        startLoop();
      }
    };

    if (!reduced) {
      if (!coarse) {
        window.addEventListener('pointermove', onMove, { passive: true });
        document.addEventListener('pointerout', onOut, { passive: true });
      }
      window.addEventListener('pointerdown', onDown, { passive: true });
      document.addEventListener('visibilitychange', onVisibility);
      if (!coarse) startLoop();
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerout', onOut);
      window.removeEventListener('pointerdown', onDown);
      document.removeEventListener('visibilitychange', onVisibility);
      observer.disconnect();
      stopLoop();
    };
  }, []);

  return (
    <div ref={ref} className="ambient-bg" aria-hidden="true">
      <canvas ref={canvasRef} className="ambient-canvas" />
      <MarkGeometry className="ambient-mark ambient-mark-primary" />
      <MarkGeometry
        className="ambient-mark ambient-mark-secondary"
        shell={false}
      />
    </div>
  );
}
