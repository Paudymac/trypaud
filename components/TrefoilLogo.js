'use client';

import { useId } from 'react';

/**
 * TrefoilLogo — Celtic triquetra (Trinity knot).
 *
 * Three overlapping circles at 120° rotational symmetry. On hover the
 * three circles separate outward, shrink, orbit 360° around the centre
 * then scale back and settle. A 360° orbit means both start and end
 * states are identical — no colour snap at the finish.
 *
 * Animation classes on nested <g> elements so we can independently
 * drive orbit (parent rotation), outward translate (per-circle group)
 * and scale (circle itself).
 */

const VIEW = 100;
const CX = 50;
const CY = 50;

// Circle radius and centre-to-centre distance.
const R = 22;
const D = 17;

const COS_120 = Math.cos((2 * Math.PI) / 3); // -0.5
const SIN_120 = Math.sin((2 * Math.PI) / 3); // ~0.866

const CIRCLES = [
  { cx: CX, cy: CY - D }, // top
  { cx: CX + D * SIN_120, cy: CY - D * COS_120 }, // bottom-right
  { cx: CX - D * SIN_120, cy: CY - D * COS_120 }, // bottom-left
];

function TrefoilPaths({ strokeWidth, gradientId }) {
  return (
    <g
      className="trefoil-orbit"
      fill="none"
      stroke={`url(#${gradientId})`}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {CIRCLES.map((c, i) => (
        <g key={i} className={`trefoil-move trefoil-move-${i + 1}`}>
          <circle className="trefoil-scale" cx={c.cx} cy={c.cy} r={R} />
        </g>
      ))}
    </g>
  );
}

function Gradient({ id }) {
  return (
    <linearGradient
      id={id}
      gradientUnits="userSpaceOnUse"
      x1={15}
      y1={15}
      x2={85}
      y2={85}
    >
      <stop offset="0%" stopColor="var(--color-primary)" />
      <stop offset="100%" stopColor="var(--color-accent)" />
    </linearGradient>
  );
}

export default function TrefoilLogo({ size = 48, className = '', ...props }) {
  const gradientId = `trefoil-${useId()}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${VIEW} ${VIEW}`}
      width={size}
      height={size}
      className={`trefoil-svg ${className}`.trim()}
      aria-hidden="true"
      role="img"
      {...props}
    >
      <title>TryPaud Triquetra</title>
      <defs>
        <Gradient id={gradientId} />
      </defs>
      <TrefoilPaths strokeWidth={3.5} gradientId={gradientId} />
    </svg>
  );
}

export function TrefoilMark({ size = 24, className = '', ...props }) {
  const gradientId = `trefoil-mark-${useId()}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${VIEW} ${VIEW}`}
      width={size}
      height={size}
      className={`trefoil-svg ${className}`.trim()}
      aria-hidden="true"
      role="img"
      {...props}
    >
      <title>TryPaud</title>
      <defs>
        <Gradient id={gradientId} />
      </defs>
      <TrefoilPaths strokeWidth={6} gradientId={gradientId} />
    </svg>
  );
}
