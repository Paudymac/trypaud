import { useIntersectionObserver } from './useIntersectionObserver';
import Link from 'next/link';

const caseStudies = [
  {
    href: '/case-studies/design-of-clans',
    title: 'Design of Clans',
    desc: 'Game branding & UI',
    image: '/images/case-studies/clans-img-sm-case-study4.webp',
  },
  {
    href: '/case-studies/mw5-mercenaries',
    title: 'MW5 Mercenaries Marketing',
    desc: 'Marketing & visual design',
    image: '/images/case-studies/mw5-img-sm-case-study3.webp',
  },
  {
    href: '/case-studies/ui-mwo-product-pages',
    title: 'UI for MWO Product Pages',
    desc: 'E-commerce UI design',
    image: '/images/case-studies/mwo-product-img-sm-case-study1.webp',
  },
  {
    href: '/case-studies/mechcon-design-system',
    title: 'Mech_Con Design System',
    desc: 'Event design system',
    image: '/images/case-studies/mechcon-img-sm-case-study2.webp',
  },
];

const CaseStudyCard = ({ study, index }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <Link
      ref={ref}
      href={study.href}
      className={`case-study-card animate-hidden ${isVisible ? `animate-visible delay-${index + 1}` : ''}`}
      style={{ backgroundImage: `url(${study.image})` }}
    >
      <div className="case-study-card-overlay">
        <h3>{study.title}</h3>
        <span className="case-study-card-desc">{study.desc}</span>
      </div>
    </Link>
  );
};

const CaseStudies = () => {
  return (
    <section className="case-studies-section" aria-label="Case studies">
      <h2>Case Studies</h2>
      <div className="case-studies-grid">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.href} study={study} index={i} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
