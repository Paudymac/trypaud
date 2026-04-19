'use client';

import { useIntersectionObserver } from './useIntersectionObserver';
import Image from 'next/image';

const partners = [
  {
    alt: 'Piranha Games',
    src: '/images/logos/partners/pgi.svg',
    darkSrc: '/images/logos/partners/pgi-dark-mode.svg',
  },
  {
    alt: 'MechWarrior 5',
    src: '/images/logos/partners/mw5.svg',
    darkSrc: '/images/logos/partners/mw5-dark-mode.svg',
  },
  {
    alt: 'MechWarrior 5: Clans',
    src: '/images/logos/partners/clans.svg',
    darkSrc: '/images/logos/partners/clans-dark-mode.svg',
  },
  {
    alt: 'MechWarrior Online',
    src: '/images/logos/partners/mwo.svg',
    darkSrc: '/images/logos/partners/mwo-dark-mode.svg',
  },
  {
    alt: 'Smartt',
    src: '/images/logos/partners/smartt.svg',
    darkSrc: '/images/logos/partners/smartt-dark-mode.svg',
  },
  {
    alt: 'Connect the Doc',
    src: '/images/logos/partners/ctd.svg',
    darkSrc: '/images/logos/partners/ctd-dark-mode.svg',
  },
  {
    alt: 'Columbia College',
    src: '/images/logos/partners/columbia.svg',
    darkSrc: '/images/logos/partners/columbia-dark-mode.svg',
  },
  {
    alt: 'Kirkwood Carpentry',
    src: '/images/logos/partners/kwc.svg',
    darkSrc: '/images/logos/partners/kwc-dark-mode.svg',
  },
];

const PartnerLogoItem = ({ partner, index }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const darkSrc = partner.darkSrc || partner.src;
  return (
    <li
      ref={ref}
      className={`animate-hidden ${isVisible ? `animate-visible delay-${index + 1}` : ''}`}
    >
      <Image
        src={partner.src}
        height={150}
        width={200}
        alt={partner.alt}
        loading="lazy"
        className="partner-logo partner-logo-light"
      />
      <Image
        src={darkSrc}
        height={150}
        width={200}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="partner-logo partner-logo-dark"
      />
    </li>
  );
};

const PartnerLogos = () => {
  return (
    <section className="partners-section bleed-wide" aria-label="Clients">
      <header className="home-section-header">
        <div className="home-section-header-text">
          <span className="home-section-eyebrow">Trusted by</span>
          <h2 className="home-section-title">Clients</h2>
        </div>
      </header>
      <ul className="partners-grid" role="list">
        {partners.map((partner, i) => (
          <PartnerLogoItem key={partner.alt} partner={partner} index={i} />
        ))}
      </ul>
    </section>
  );
};

export default PartnerLogos;
