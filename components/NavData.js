import {
  UIWebIcon,
  LogosIcon,
  BrandingIcon,
  AnimationIcon,
  IllustrationIcon,
  IconsGridIcon,
  GridIcon,
} from './NavIcons';

export const galleryLinks = [
  {
    href: '/ui-web',
    label: 'UI / Web',
    desc: 'Product screens, websites, and interface systems',
    Icon: UIWebIcon,
  },
  {
    href: '/logos',
    label: 'Logos',
    desc: 'Marks, monograms, and logotypes',
    Icon: LogosIcon,
  },
  {
    href: '/branding',
    label: 'Branding',
    desc: 'Identity systems and visual languages',
    Icon: BrandingIcon,
  },
  {
    href: '/animation',
    label: 'Animation',
    desc: 'Motion design and interactive transitions',
    Icon: AnimationIcon,
  },
  {
    href: '/illustration',
    label: 'Illustration',
    desc: 'Hand-drawn work, painting, and concept art',
    Icon: IllustrationIcon,
  },
  {
    href: '/icons',
    label: 'Icons',
    desc: 'Glyph systems and pictograms',
    Icon: IconsGridIcon,
  },
];

export const allWorkItem = {
  href: '/gallery',
  label: 'All Work',
  desc: 'Everything at a glance',
  Icon: GridIcon,
};

/* The studies are numbered files: `num` is the canonical file number used
   by the /case-studies ledger, the study eyebrows, the next-study bands and
   the nav panel. Order here IS the numbering — don't reorder casually. */
export const caseStudyLinks = [
  {
    num: '01',
    href: '/case-studies/design-of-clans',
    label: 'Design of Clans',
    desc: 'Game branding & UI',
    summary:
      'Brand, logo and launch site for MechWarrior 5: Clans, a new game that needed an identity of its own.',
    year: '2024',
    client: 'Piranha Games',
    discipline: 'Branding / UI / Web',
    image: '/images/case-studies/clans-img-sm-case-study4.webp',
  },
  {
    num: '02',
    href: '/case-studies/mw5-mercenaries',
    label: 'MW5 Mercenaries',
    desc: 'Marketing & visual design',
    summary:
      'A logo, brand system and launch site for Piranha’s first stand-alone release in years, built to work on every platform.',
    year: '2021',
    client: 'Piranha Games',
    discipline: 'Brand / Marketing',
    image: '/images/case-studies/mw5-img-sm-case-study3.webp',
  },
  {
    num: '03',
    href: '/case-studies/ui-mwo-product-pages',
    label: 'UI for MWO',
    desc: 'E-commerce product pages',
    summary:
      'Eleven years of product pages for MechWarrior Online: designing, measuring and simplifying the store that funds the game.',
    year: '2013 – 2024',
    client: 'Piranha Games',
    discipline: 'E-commerce UI',
    image: '/images/case-studies/mwo-product-img-sm-case-study1.webp',
  },
  {
    num: '04',
    href: '/case-studies/mechcon-design-system',
    label: 'Mech_Con',
    desc: 'Event design system',
    summary:
      'The design system behind Mech_Con 2018, built on a single hexagon and applied across the whole convention.',
    year: '2016 – 2018',
    client: 'Piranha Games',
    discipline: 'Design System / Event',
    image: '/images/case-studies/mechcon-img-sm-case-study2.webp',
  },
];

export const isGalleryRoute = (pathname) =>
  pathname === '/gallery' || galleryLinks.some((l) => pathname === l.href);
