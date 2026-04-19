'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useIntersectionObserver } from './useIntersectionObserver';
import { ArrowUpRightIcon } from './NavIcons';

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
    >
      <Image
        src={study.image}
        alt={`${study.title} — ${study.desc}`}
        fill
        sizes="(min-width: 1200px) 50vw, (min-width: 768px) 50vw, 100vw"
        className="case-study-card-image"
      />
      <div className="case-study-card-overlay">
        <div className="case-study-card-content">
          <span className="case-study-card-index" aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="case-study-card-title">{study.title}</h3>
          <span className="case-study-card-desc">{study.desc}</span>
        </div>
      </div>
    </Link>
  );
};

const CaseStudies = () => {
  return (
    <section
      className="case-studies-section bleed-wide"
      aria-label="Case studies"
    >
      <header className="home-section-header">
        <div className="home-section-header-text">
          <span className="home-section-eyebrow">Selected work</span>
          <h2 className="home-section-title">Case Studies</h2>
        </div>
        <Link href="/case-studies" className="home-section-action">
          View all
          <ArrowUpRightIcon width={14} height={14} />
        </Link>
      </header>
      <div className="case-studies-grid">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.href} study={study} index={i} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
