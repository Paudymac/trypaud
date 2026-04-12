/**
 * TrefoilLogo — SVG trefoil knot icon
 * A knotted three-loop design representing "Tri" (TryPaud).
 * Uses currentColor so it adapts to dark/light themes.
 */
export default function TrefoilLogo({ size = 48, className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      role="img"
      {...props}
    >
      <title>TryPaud Trefoil</title>
      {/*
        Trefoil knot: three interlocking loops with over/under weave.
        The knot is centered at (100,100) with lobes pointing
        top-center, bottom-left, and bottom-right.
      */}

      {/* Bottom layer segments (drawn first, appear behind) */}
      {/* Left lobe - under crossing */}
      <path
        d="M 85 108
           C 55 130, 30 145, 28 120
           C 26 95, 50 75, 70 82"
        opacity="0.3"
      />
      {/* Right lobe - under crossing */}
      <path
        d="M 115 108
           C 145 130, 170 145, 172 120
           C 174 95, 150 75, 130 82"
        opacity="0.3"
      />
      {/* Top lobe - under crossing */}
      <path
        d="M 92 88
           C 85 60, 85 30, 100 28
           C 115 26, 118 58, 108 88"
        opacity="0.3"
      />

      {/* Top layer segments (full opacity, creates weave illusion) */}
      {/* Top lobe */}
      <path
        d="M 92 88
           C 80 55, 82 25, 100 22
           C 118 19, 122 52, 108 88"
      />

      {/* Left lobe */}
      <path
        d="M 85 108
           C 50 135, 20 148, 22 118
           C 24 88, 55 72, 70 82"
      />
      {/* Crossing bridge: left over top */}
      <path
        d="M 70 82
           C 75 84, 80 86, 85 88"
        strokeWidth="10"
      />

      {/* Right lobe */}
      <path
        d="M 115 108
           C 150 135, 180 148, 178 118
           C 176 88, 145 72, 130 82"
      />
      {/* Crossing bridge: right over top */}
      <path
        d="M 130 82
           C 125 84, 120 86, 115 88"
        strokeWidth="10"
      />

      {/* Center crossings — the over/under weave at the middle */}
      {/* Left strand passes over right at center */}
      <path
        d="M 85 88
           C 88 94, 90 100, 85 108"
        strokeWidth="10"
      />
      {/* Right strand passes over left at center */}
      <path
        d="M 115 88
           C 112 94, 110 100, 115 108"
        strokeWidth="10"
      />
      {/* Bottom bridge connecting the two lower curves */}
      <path
        d="M 85 108
           C 92 115, 108 115, 115 108"
        strokeWidth="10"
      />

      {/* Final clean outlines for the three lobes */}
      {/* Top lobe (full path) */}
      <path
        d="M 92 88
           C 78 50, 82 18, 100 16
           C 118 14, 124 48, 108 88"
      />
      {/* Left lobe (full path) */}
      <path
        d="M 70 82
           C 50 68, 18 80, 18 115
           C 18 150, 52 140, 85 108"
      />
      {/* Right lobe (full path) */}
      <path
        d="M 130 82
           C 150 68, 182 80, 182 115
           C 182 150, 148 140, 115 108"
      />

      {/* Inner connecting paths through center (the knot itself) */}
      <path
        d="M 108 88
           C 112 94, 114 102, 115 108"
      />
      <path
        d="M 92 88
           C 88 94, 86 102, 85 108"
      />
      <path
        d="M 70 82
           C 78 84, 85 86, 92 88"
      />
      <path
        d="M 130 82
           C 122 84, 115 86, 108 88"
      />
      <path
        d="M 85 108
           C 93 116, 107 116, 115 108"
      />
    </svg>
  );
}

/**
 * Simplified trefoil mark for small sizes (favicon, 24px nav)
 */
export function TrefoilMark({ size = 24, className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
      role="img"
      {...props}
    >
      <title>TryPaud</title>
      {/* Simplified solid trefoil — three overlapping circles with cutouts */}
      <circle cx="50" cy="30" r="22" />
      <circle cx="30" cy="65" r="22" />
      <circle cx="70" cy="65" r="22" />
      {/* Center fill to unify */}
      <polygon points="50,38 35,60 65,60" />
      {/* Cutouts for knot effect (background color) */}
      <circle cx="50" cy="30" r="12" fill="var(--color-surface-0, #0C0E14)" />
      <circle cx="30" cy="65" r="12" fill="var(--color-surface-0, #0C0E14)" />
      <circle cx="70" cy="65" r="12" fill="var(--color-surface-0, #0C0E14)" />
    </svg>
  );
}
