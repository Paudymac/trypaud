'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useIntersectionObserver } from './useIntersectionObserver';
import { ArrowRightIcon } from './NavIcons';
import MarginLabel from './MarginLabel';
import galleryItems from '@/data/gallery-items.json';

/**
 * The Work band — cols 1–5: triangle-clipped plate · cols 5–9: circular plate
 * · cols 9–13: index rows + the galleries note. Shared by the home sheet and
 * the /case-studies index.
 */

const featured = [
  {
    href: '/case-studies/design-of-clans',
    title: 'Design of Clans',
    desc: 'Seventeen faction marks, a UI kit and the launch campaign.',
    image: '/images/case-studies/clans-img-sm-case-study4.webp',
    alt: 'Design of Clans — game branding and UI',
    shape: 'triangle',
  },
  {
    href: '/case-studies/mw5-mercenaries',
    title: 'MW5 Mercenaries',
    desc: 'The look of a global launch, from key art to storefront.',
    image: '/images/case-studies/mw5-img-sm-case-study3.webp',
    alt: 'MW5 Mercenaries — marketing and visual design',
    shape: 'circle',
  },
];

const indexRows = [
  {
    href: '/case-studies/ui-mwo-product-pages',
    title: 'UI for MWO',
    meta: '03 / 2023',
  },
  {
    href: '/case-studies/mechcon-design-system',
    title: 'Mech_Con',
    meta: '04 / 2022',
  },
  // '/design-process' stays unlisted until the page is ready
];

function WorkPlate({ study, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <Link
      ref={ref}
      href={study.href}
      className={`work-plate animate-hidden ${isVisible ? `animate-visible delay-${index + 1}` : ''}`}
    >
      {study.shape === 'triangle' ? (
        <div className="work-plate-media work-plate-media-triangle">
          <Image
            src={study.image}
            alt={study.alt}
            fill
            sizes="(max-width: 767px) 100vw, 33vw"
            className="plate-image plate-image-triangle"
          />
        </div>
      ) : (
        <div className="work-plate-media work-plate-media-circle">
          <div className="plate-circle work-plate-circle">
            <Image
              src={study.image}
              alt={study.alt}
              fill
              sizes="180px"
              className="plate-image"
            />
          </div>
        </div>
      )}
      <div className="work-plate-title">{study.title}</div>
      <p className="work-plate-desc">{study.desc}</p>
    </Link>
  );
}

const CaseStudies = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="work-band" aria-label="Selected work">
      <div className="work-heading-row">
        <div className="band-label">
          <MarginLabel code="01" text="Work" />
        </div>
      </div>

      <div
        ref={ref}
        className={`work-plates animate-hidden ${isVisible ? 'animate-visible' : ''}`}
      >
        {/* The heading is the first row of the same ruled box as the
            studies it introduces — same cell padding, same rules. */}
        <header className="work-head">
          <h2 className="work-title">Four studies. Start with these two.</h2>
        </header>
        <div className="work-head-action">
          <Link href="/gallery" className="btn btn-sm btn-secondary btn-ring">
            All {galleryItems.length}
            <ArrowRightIcon className="icon-fwd" width={12} height={12} />
          </Link>
        </div>

        <WorkPlate study={featured[0]} index={0} />
        <WorkPlate study={featured[1]} index={1} />

        <div className="work-index">
          <div>
            {indexRows.map((row) => (
              <Link key={row.href} href={row.href} className="index-row">
                <span className="index-row-title">{row.title}</span>
                <span className="index-row-meta">{row.meta}</span>
              </Link>
            ))}
          </div>
          <Link href="/gallery" className="work-galleries-note">
            <svg
              className="nav-cue"
              width="14"
              height="14"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <polygon points="50,20 75.98,65 24.02,65" fill="currentColor" />
            </svg>
            <span>Six more galleries behind these</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
