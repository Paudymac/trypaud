// TrefoilKnot — the TryPaud mark, two-tone.
// Geometry is fixed: three lens paths (the overlaps of r22 circles at 120°)
// between three solid corner pieces. Each corner: straight sides from the
// equilateral's vertex, and a base of two concave arcs (r29.5 offsets of the
// facing petals' generating circles, centres 17 from the mark centre) meeting
// at a point that nests into the knot's valley — a constant ~4-unit gap all
// along, so no cut/halo pass is needed.
//
// Colour: the knot is signal red, the triangle is structural blue — red PAUD
// pairs with the red knot, blue TRY with the blue triangle (see .nav-wordmark
// in nav.css). Pass `knotInk` / `triangleInk` to override (e.g.
// 'currentColor' for a monochrome mark).

const LOBES = [0, 120, 240];
const D = 'M43.2,53.93 A22,22 0 0,0 71.52,37.57 A22,22 0 0,0 43.2,53.93 Z';
// Top corner piece; the other two are 120° rotations of it.
const CORNER =
  'M50,20 L55.96,30.33 A29.5,29.5 0 0 0 50,32.94 A29.5,29.5 0 0 0 44.04,30.33 Z';

export default function TrefoilKnot({
  size = 30,
  knotInk = 'var(--color-accent)',
  triangleInk = 'var(--color-primary)',
  weight = 7, // stroke width in the 100x100 viewBox
  triangle = true, // drop below 24px
  // The drawn mark occupies roughly units 16–72 of the 100-unit canvas.
  // Pass a tight box (e.g. '15 11 70 70') when the artwork itself must
  // fill the layout box — decorative/watermark uses.
  viewBox = '0 0 100 100',
  ...rest
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      aria-hidden="true"
      {...rest}
    >
      {triangle && (
        /* One group carries the hover-turn class — CSS transform on the
           group leaves the paths' placement rotations intact. */
        <g className="knot-triangle" fill={triangleInk}>
          {LOBES.map((r) => (
            <path key={r} d={CORNER} transform={`rotate(${r} 50 50)`} />
          ))}
        </g>
      )}
      <g
        stroke={triangle ? knotInk : 'none'}
        fill={triangle ? 'none' : knotInk}
        strokeWidth={weight}
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      >
        {LOBES.map((r) => (
          <path key={r} d={D} transform={`rotate(${r} 50 50)`} />
        ))}
      </g>
    </svg>
  );
}

// Below 24px call with triangle={false} — the knot fills solid (red) and
// still reads.
