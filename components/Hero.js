'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, ArrowUpRightIcon } from './NavIcons';
import MarginLabel from './MarginLabel';

const NASA_ARTEMIS_II_ALBUM =
  'https://www.flickr.com/photos/nasa2explore/albums/72177720307234654';

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
        {/* The porthole is a live instrument: it resolves to the NASA
            Flickr archive the photograph belongs to. */}
        <a
          className="hero-plate-link"
          href={NASA_ARTEMIS_II_ALBUM}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Artemis II photo archive on NASA's Flickr (opens in a new tab)"
        >
          <div className="hero-orbit">
            <div className="plate-circle hero-plate">
              <Image
                src="/images/hero/artemis-earthset.jpg"
                alt="Artemis II: a crescent Earth photographed from the Orion spacecraft"
                fill
                priority
                sizes="(max-width: 767px) 200px, 240px"
                className="plate-image"
              />
            </div>
          </div>
          <span className="plate-credit">
            NASA / ORION / ARTEMIS II
            <br />
            EARTHSET / 2026
            <ArrowUpRightIcon className="icon-ext" width={10} height={10} />
          </span>
        </a>
      </div>
    </section>
  );
}
