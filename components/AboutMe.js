'use client';

import Link from 'next/link';
import { useIntersectionObserver } from './useIntersectionObserver';
import MarginLabel from './MarginLabel';

/**
 * The About band — cols 2–9: pull-quote + paragraph · cols 10–13: the stat
 * column (18 YEARS, rule, coordinates, open-for-work signal). A second circle
 * set counter-rotates behind, bottom-left.
 */
const AboutMe = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="about-band" aria-label="About me">
      <div className="band-label">
        <MarginLabel code="02" text="About" />
      </div>

      <div
        ref={ref}
        className={`about-main animate-hidden ${isVisible ? 'animate-visible' : ''}`}
      >
        <p className="pull-quote">
          &ldquo;Good design holds the door open. Great design brings people
          back.&rdquo;
        </p>
        <p className="about-para">
          Everything here started the same way — an idea, and a sketch to catch
          it. The code is just how it ships.
        </p>
        <Link href="/about" className="about-more">
          The longer story
        </Link>
      </div>

      <div className="about-stats">
        <div className="about-stat">
          <span className="about-stat-number">18</span>
          <span className="about-stat-unit">Years</span>
        </div>
        <div className="about-stat-rule" aria-hidden="true" />
        <div className="about-stat-meta">
          IRELAND / 53.34°N 6.26°W
          <br />
          EST. 2008
          <br />
          <span className="about-stat-open">● OPEN FOR WORK</span>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
