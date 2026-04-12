import { useIntersectionObserver } from './useIntersectionObserver';
import Image from 'next/image';
import Link from 'next/link';

const galleries = [
  {
    href: '/gallery',
    label: 'All Work',
    icon: '/images/icons/gallery/ui-gallery-icon.svg',
    alt: 'Browse all gallery items',
    featured: true,
  },
  {
    href: '/ui-web',
    label: 'UI / Web',
    icon: '/images/icons/gallery/ui-gallery-icon.svg',
    alt: 'UI/Web gallery',
  },
  {
    href: '/logos',
    label: 'Logos',
    icon: '/images/icons/gallery/logos-gallery-icon.svg',
    alt: 'Logos gallery',
  },
  {
    href: '/branding',
    label: 'Branding',
    icon: '/images/icons/gallery/branding-gallery-icon.svg',
    alt: 'Branding gallery',
  },
  {
    href: '/icons',
    label: 'Icons',
    icon: '/images/icons/gallery/icons-gallery-icon.svg',
    alt: 'Icons gallery',
  },
  {
    href: '/animation',
    label: 'Animation',
    icon: '/images/icons/gallery/animation-gallery-icon.svg',
    alt: 'Animation gallery',
  },
  {
    href: '/illustration',
    label: 'Illustration',
    icon: '/images/icons/gallery/illustration-gallery-icon.svg',
    alt: 'Illustration gallery',
  },
];

const GalleryCard = ({ gallery, index }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <Link
      ref={ref}
      href={gallery.href}
      className={`card card-interactive animate-hidden ${isVisible ? `animate-visible delay-${index + 1}` : ''}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        padding: 'var(--space-5)',
        textDecoration: 'none',
        borderColor: gallery.featured ? 'var(--color-primary)' : undefined,
      }}
    >
      <Image
        src={gallery.icon}
        height={48}
        width={48}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <span
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--font-bold)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-wider)',
          color: gallery.featured
            ? 'var(--color-primary)'
            : 'var(--color-text-primary)',
        }}
      >
        {gallery.label}
      </span>
    </Link>
  );
};

const Galleries = () => {
  return (
    <section
      className="container"
      style={{ paddingBlock: 'var(--space-8)' }}
      aria-label="Gallery categories"
    >
      <h2>Galleries</h2>
      <nav
        className="grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: 'var(--space-4)',
          marginTop: 'var(--space-4)',
        }}
      >
        {galleries.map((gallery, i) => (
          <GalleryCard key={gallery.href} gallery={gallery} index={i} />
        ))}
      </nav>
    </section>
  );
};

export default Galleries;
