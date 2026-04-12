import { useIntersectionObserver } from './useIntersectionObserver';
import Image from 'next/image';

const partners = [
  { src: '/images/logos/partners/pgi.svg', alt: 'Piranha Games' },
  { src: '/images/logos/partners/mw5.svg', alt: 'MechWarrior 5' },
  { src: '/images/logos/partners/clans.svg', alt: 'MechWarrior 5: Clans' },
  { src: '/images/logos/partners/mwo.svg', alt: 'MechWarrior Online' },
  { src: '/images/logos/partners/smartt.svg', alt: 'Smartt' },
  { src: '/images/logos/partners/ctd.svg', alt: 'Connect the Doc' },
  { src: '/images/logos/partners/columbia.svg', alt: 'Columbia College' },
  { src: '/images/logos/partners/kwc.svg', alt: 'Kirkwood Carpentry' },
];

const PartnerLogoItem = ({ partner, index }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
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
      />
    </li>
  );
};

const PartnerLogos = () => {
  return (
    <section className="partners-section" aria-label="Clients">
      <h2>Clients</h2>
      <ul className="partners-grid" role="list">
        {partners.map((partner, i) => (
          <PartnerLogoItem key={partner.alt} partner={partner} index={i} />
        ))}
      </ul>
    </section>
  );
};

export default PartnerLogos;
