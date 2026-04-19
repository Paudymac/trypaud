'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useIntersectionObserver } from './useIntersectionObserver';
import { ArrowUpRightIcon } from './NavIcons';

const AboutMe = () => {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="about-section bleed-wide" aria-label="About me">
      <header className="home-section-header">
        <div className="home-section-header-text">
          <span className="home-section-eyebrow">About</span>
          <h2 className="home-section-title">Design, made with craft</h2>
        </div>
        <Link href="/about" className="home-section-action">
          Read full bio
          <ArrowUpRightIcon width={14} height={14} />
        </Link>
      </header>

      <div className="about-card">
        <div
          ref={ref1}
          className={`about-image-wrap animate-hidden ${isVisible1 ? 'animate-visible delay-1' : ''}`}
        >
          <Image
            src="/images/profile-padraic.webp"
            alt="Padraic McAteer"
            fill
            sizes="(min-width: 900px) 36vw, 100vw"
            className="about-image"
          />
        </div>

        <div
          ref={ref2}
          className={`about-content animate-hidden ${isVisible2 ? 'animate-visible delay-2' : ''}`}
        >
          <p className="about-lead">
            I&apos;m Padraic — a senior designer and front-end developer based
            in Ireland, with 17 years of UI, branding, illustration and visual
            storytelling behind me.
          </p>
          <p className="about-summary">
            I&apos;ve always sketched and coloured from when I was small. Being
            creative is something innate. That journey has let me wear many hats
            concurrently — layout, identity, motion, technical acumen — all
            through the lens of a user-centered philosophy.
          </p>
          <Link href="/about" className="about-more">
            More about me
            <ArrowUpRightIcon width={14} height={14} />
          </Link>
        </div>

        <aside className="about-callout" aria-hidden="true">
          <div className="about-callout-stat">
            <strong className="about-callout-number">17</strong>
            <span className="about-callout-unit">Years</span>
          </div>
          <div className="about-callout-rule" />
          <blockquote className="about-callout-quote">
            <span className="about-callout-mark">&ldquo;</span>
            Good design helps&nbsp;people. Like holding a door open and letting
            someone in. Great design keeps them coming&nbsp;back.
          </blockquote>
          <div className="about-callout-meta">
            <span>Ireland</span>
            <span>·</span>
            <span>Est.&nbsp;2008</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AboutMe;
