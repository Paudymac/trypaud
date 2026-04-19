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

export const BrandingIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="13.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="17.5" cy="10.5" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="8.5" cy="7.5" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="6.5" cy="12.5" r="0.6" fill="currentColor" stroke="none" />
    <path d="M12 22c5.523 0 10-4.477 10-10 0-4.262-3.403-7-8-7-5.523 0-10 4.477-10 10 0 4.418 3.582 7 8 7a1.5 1.5 0 0 0 1.5-1.5c0-.9-.6-1.5-.6-2.25 0-.828.672-1.5 1.5-1.5H14" />
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

export const IllustrationIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

export const IconsGridIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
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

export const GridIcon = IconsGridIcon;
