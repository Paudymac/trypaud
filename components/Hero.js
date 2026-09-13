'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from './NavIcons';
import MarginLabel from './MarginLabel';

/**
 * Hero — the top band of the home sheet.
 * cols 1: vertical margin label · cols 2–9: display copy · cols 10–13: the
 * circular plate, carrying margin-bottom:-96px so it crosses the section rule.
 */
export default function Hero() {
  return (
    <section className="hero-band" aria-label="Introduction">
      <div className="band-label">
        <MarginLabel code="00" text="Index" />
      </div>

      <div className="hero-main">
        <span className="eyebrow">
          Padraic McAteer / designer &amp; front-end developer / Ireland
        </span>
        <h1 className="hero-display">Design. Build. Ship.</h1>
        <p className="hero-body">
          Interfaces, identities, illustration and motion — eighteen years of
          it, and a fair stretch spent on giant fighting robots.
        </p>
        <div className="hero-actions">
          <Link href="/gallery" className="btn btn-accent">
            See the work
            <ArrowRightIcon className="icon-fwd" width={14} height={14} />
          </Link>
        </div>
      </div>

      <div className="hero-plate-col">
        {/* The porthole is the person: the same portrait the about page
            wears, so the headline has a face next to it and the plate is
            the shortest route to the longer story. Internal, so the cue
            points right, not out. (The Artemis II plates it replaced are
            still in public/images/hero.) */}
        <Link
          href="/about"
          className="hero-plate-link"
          aria-label="About Padraic McAteer"
        >
          <div className="hero-orbit">
            <div className="plate-circle hero-plate">
              <Image
                src="/images/profile-padraic.webp"
                alt="Padraic McAteer"
                fill
                priority
                sizes="(max-width: 767px) 200px, 240px"
                className="plate-image"
              />
              {/* Signal acquisition, as on /about: hover sweeps a red
                  scanline down and the colour feed resolves behind it.
                  Same asset, so no second fetch. Styles: about-page.css. */}
              <div className="about-scan-color" aria-hidden="true">
                <Image
                  src="/images/profile-padraic.webp"
                  alt=""
                  fill
                  sizes="(max-width: 767px) 200px, 240px"
                />
              </div>
              <div className="about-scan-line" aria-hidden="true" />
            </div>
          </div>
          <span className="plate-credit">
            PADRAIC MCATEER / IRELAND
            <br />
            ABOUT ME
            <ArrowRightIcon className="icon-fwd" width={10} height={10} />
          </span>
        </Link>
      </div>
    </section>
  );
}
