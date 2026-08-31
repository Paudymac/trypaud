/**
 * Semantic nav icons — stroke-based, Lucide-style.
 * Inherit currentColor so they adapt to theme + active states.
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const UIWebIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </svg>
);

export const LogosIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 2l9 5v10l-9 5-9-5V7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

/* Print registration mark — identity work in the system's own technical-
   drawing language (circle + crosshair), not a paint palette. */
export const BrandingIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="7" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const AnimationIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6 3l13 9-13 9V3z" />
    <path d="M3 6h1" />
    <path d="M3 12h1" />
    <path d="M3 18h1" />
  </svg>
);

/* Drafting compass — the drawing instrument, in the drafting idiom */
export const IllustrationIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="5" r="2" />
    <path d="m12.99 6.74 1.93 3.44" />
    <path d="M19.136 12a10 10 0 0 1-14.271 0" />
    <path d="m21 21-2.16-3.84" />
    <path d="m3 21 8.02-14.26" />
  </svg>
);

/* Glyph sampler — square, circle, triangle, plus. Reads as "a set of
   icons" rather than the plain layout grid All Work uses. */
export const IconsGridIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <circle cx="17.5" cy="6.5" r="3.5" />
    <path d="M6.5 13.5 10 21H3z" />
    <path d="M17.5 14v7" />
    <path d="M14 17.5h7" />
  </svg>
);

/* Angle brackets — the code that ships the design */
export const CodeIcon = (props) => (
  <svg {...base} {...props}>
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </svg>
);

export const ArrowRightIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

export const ArrowLeftIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

export const ArrowUpRightIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const ArrowUpIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 19V5" />
    <path d="M5 12l7-7 7 7" />
  </svg>
);

export const ChevronDownIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/* Plain 2×2 layout grid — All Work */
export const GridIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

/* Canonical filled glyph — the stroke outline goes mushy at 14px */
export const LinkedInIcon = (props) => (
  <svg {...base} {...props} stroke="none" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z" />
  </svg>
);

export const MailIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

/* Theme-toggle porthole pair: Hull is the solid plate, Void the empty ring.
   Both ride currentColor, so they invert with the pressed cell. The ring's
   stroke is heavier than the icon base — at 10px render, 1.75 vanishes. */
export const HullIcon = (props) => (
  <svg {...base} {...props} stroke="none" fill="currentColor">
    <circle cx="12" cy="12" r="9" />
  </svg>
);

export const VoidIcon = (props) => (
  <svg {...base} {...props} strokeWidth={3}>
    <circle cx="12" cy="12" r="8" />
  </svg>
);

export const SendIcon = (props) => (
  <svg {...base} {...props}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

export const FileTextIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);
