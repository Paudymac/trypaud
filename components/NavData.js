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

export const caseStudyLinks = [
  {
    href: '/case-studies/design-of-clans',
    label: 'Design of Clans',
    desc: 'Game branding & UI',
    image: '/images/case-studies/clans-img-sm-case-study4.webp',
  },
  {
    href: '/case-studies/mw5-mercenaries',
    label: 'MW5 Mercenaries',
    desc: 'Marketing & visual design',
    image: '/images/case-studies/mw5-img-sm-case-study3.webp',
  },
  {
    href: '/case-studies/ui-mwo-product-pages',
    label: 'UI for MWO',
    desc: 'E-commerce product pages',
    image: '/images/case-studies/mwo-product-img-sm-case-study1.webp',
  },
  {
    href: '/case-studies/mechcon-design-system',
    label: 'Mech_Con',
    desc: 'Event design system',
    image: '/images/case-studies/mechcon-img-sm-case-study2.webp',
  },
];

export const isGalleryRoute = (pathname) =>
  pathname === '/gallery' || galleryLinks.some((l) => pathname === l.href);
