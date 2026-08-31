import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '@/components/Layout';
import {
  ArrowRightIcon,
  UIWebIcon,
  BrandingIcon,
  AnimationIcon,
  IllustrationIcon,
  IconsGridIcon,
  CodeIcon,
} from '@/components/NavIcons';

const capabilities = [
  {
    Icon: UIWebIcon,
    label: 'UI / Web',
    desc: 'Product screens, marketing sites, and interface systems — from wireframes to ship.',
  },
  {
    Icon: BrandingIcon,
    label: 'Branding & Logos',
    desc: 'Identity systems, marks and logotypes — visual languages, game manuals and event collateral.',
  },
  {
    Icon: IllustrationIcon,
    label: 'Illustration',
    desc: 'Hand-drawn work, painting, vector art and concept pieces.',
  },
  {
    Icon: IconsGridIcon,
    label: 'Icons',
    desc: 'Glyph systems, player icons and pictogram sets.',
  },
  {
    Icon: AnimationIcon,
    label: 'Animation',
    desc: 'Motion graphics, title sequences and promotional trailers.',
  },
  {
    Icon: CodeIcon,
    label: 'Front-end',
    desc: 'React, Next.js and design systems — the code that ships all of the above.',
  },
];

const clients = [
  'Screendragon',
  'Piranha Games',
  'MechWarrior 5: Mercenaries',
  'MechWarrior 5: Clans',
  'MechWarrior Online',
  'Smartt',
  'Connect the Doc',
  'Columbia College',
  'Kirkwood Carpentry',
];

/* Career gauge scale: one tick per year, 2008 → now. The 270° sweep starts
   at 225° (clockwise from 12), leaving the instrument gap at the bottom. */
const CAREER_START = 2008;
const CAREER_NOW = 2026;
const careerYears = Array.from(
  { length: CAREER_NOW - CAREER_START + 1 },
  (_, i) => CAREER_START + i
);
const DIAL_START = 225;
const DIAL_STEP = 270 / (careerYears.length - 1);

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>{`About - ${siteTitle}`}</title>
        <meta
          name="description"
          content="Padraic McAteer designs, draws and builds — eighteen years across UI, identity, illustration and motion, a fair stretch of it on giant fighting robots."
        />
      </Head>

      {/* HERO */}
      <section className="about-page-hero" aria-labelledby="about-title">
        <div className="about-page-hero-grid">
          <div className="about-orbit">
            {/* The career gauge: a 270° graduated bezel around the porthole,
                gap seated at the bottom like an instrument dial. One tick per
                year of practice — 2008 through now, 18 intervals — with the
                current year resting signal-red. Sweeps once on load, then
                holds: gauges measure, they don't spin. */}
            <svg
              className="about-dial"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <path
                className="about-dial-arc"
                d="M 18.89 81.11 A 44 44 0 1 1 81.11 81.11"
                fill="none"
                pathLength="1"
                style={{ vectorEffect: 'non-scaling-stroke' }}
              />
              {careerYears.map((year, i) => {
                const isNow = i === careerYears.length - 1;
                return (
                  <line
                    key={year}
                    className={
                      isNow
                        ? 'about-dial-tick about-dial-tick-now'
                        : 'about-dial-tick'
                    }
                    x1="50"
                    y1="6"
                    x2="50"
                    y2={isNow ? 11.5 : 9.5}
                    transform={`rotate(${DIAL_START + i * DIAL_STEP} 50 50)`}
                    style={{
                      '--tick-i': i,
                      vectorEffect: 'non-scaling-stroke',
                    }}
                  />
                );
              })}
              <text
                className="about-dial-label"
                x="15.4"
                y="87"
                textAnchor="middle"
              >
                {CAREER_START}
              </text>
              <text
                className="about-dial-label about-dial-label-now"
                x="84.6"
                y="87"
                textAnchor="middle"
              >
                NOW
              </text>
            </svg>
            <div className="about-page-hero-image">
              <Image
                src="/images/profile-padraic.webp"
                alt="Padraic McAteer"
                fill
                priority
                sizes="(min-width: 900px) 42vw, 100vw"
              />
              {/* Signal acquisition: hovering the instrument digitises the
                  porthole — a signal-red scanline sweeps down and this colour
                  feed resolves behind it. Same asset, so no second fetch. */}
              <div className="about-scan-color" aria-hidden="true">
                <Image
                  src="/images/profile-padraic.webp"
                  alt=""
                  fill
                  sizes="(min-width: 900px) 42vw, 100vw"
                />
              </div>
              <div className="about-scan-line" aria-hidden="true" />
            </div>
          </div>
          <div className="about-page-hero-content">
            <span className="about-page-eyebrow">About</span>
            <h1 id="about-title" className="about-page-title">
              Padraic&nbsp;McAteer
            </h1>
            <p className="about-page-role">
              Senior designer &amp; front-end developer / 18 years
            </p>
            <p className="about-page-intro">
              Paudy is what everyone calls me. Ideas are my craft: I sketch
              them, shape them into interfaces, and build the front-end. From
              Ireland, for teams anywhere the work is interesting.
            </p>
            <div className="about-page-cta-row">
              <Link href="/#collaborate" className="btn btn-accent">
                Start something
                <ArrowRightIcon className="icon-fwd" width={14} height={14} />
              </Link>
            </div>
          </div>

          <aside className="about-page-hero-side">
            <div className="about-page-hero-stat" aria-hidden="true">
              <strong>18</strong>
              <span>Years</span>
            </div>
            <div className="about-page-hero-sideline" aria-hidden="true" />
            <ul className="about-page-hero-tags" aria-label="Disciplines">
              <li>
                <Link href="/ui-web">UI</Link>
              </li>
              <li>
                <Link href="/branding">Branding</Link>
              </li>
              <li>
                <Link href="/illustration">Illustration</Link>
              </li>
              <li>
                <Link href="/gallery">Front-end</Link>
              </li>
            </ul>
            <div className="about-page-hero-location">
              <span>Ireland</span>
              <span>/</span>
              <span>Est. 2008</span>
            </div>
          </aside>
        </div>
      </section>

      {/* META STRIP */}
      <aside className="about-page-meta" aria-label="Quick facts">
        <dl className="about-page-meta-list">
          <div className="about-page-meta-row">
            <dt>Based in</dt>
            <dd>Ireland</dd>
          </div>
          <div className="about-page-meta-row">
            <dt>Experience</dt>
            <dd>18 years</dd>
          </div>
          <div className="about-page-meta-row">
            <dt>Currently</dt>
            <dd>Screendragon</dd>
          </div>
          <div className="about-page-meta-row">
            <dt>Focus</dt>
            <dd>UI / Branding / Illustration / Front-end</dd>
          </div>
          <div className="about-page-meta-row">
            <dt>Availability</dt>
            <dd>● Open for work</dd>
          </div>
        </dl>
      </aside>

      {/* BIO */}
      <article className="about-page-bio">
        <header className="home-section-header">
          <div className="home-section-header-text">
            <span className="home-section-eyebrow">Story</span>
            <h2 className="home-section-title">How I got here</h2>
          </div>
        </header>
        <div className="about-page-bio-layout">
          <div className="about-page-bio-body">
            <p className="about-page-lead">
              It always starts with an idea. Drawing was just the fastest way to
              get one out of my head, and I&apos;ve been doing it since I was
              small.
            </p>
            <p>
              Eighteen years on, the craft has grown around that: layout,
              identity, motion, illustration, and the code that ships it all.
              The belief underneath is simple — good design holds the door open.
              Great design brings people back.
            </p>
            <p>
              I&apos;ve spent most of the last decade embedded with{' '}
              <a
                href="https://piranhagames.com"
                target="_blank"
                rel="noopener noreferrer"
                className="about-page-inline-link"
              >
                Piranha Games
              </a>{' '}
              on the MechWarrior franchise — shipping UI for{' '}
              <Link
                href="/case-studies/ui-mwo-product-pages"
                className="about-page-inline-link"
              >
                MechWarrior Online
              </Link>
              , brand and marketing for{' '}
              <Link
                href="/case-studies/mw5-mercenaries"
                className="about-page-inline-link"
              >
                MW5: Mercenaries
              </Link>{' '}
              and{' '}
              <Link
                href="/case-studies/design-of-clans"
                className="about-page-inline-link"
              >
                MW5: Clans
              </Link>
              , and the event design system behind{' '}
              <Link
                href="/case-studies/mechcon-design-system"
                className="about-page-inline-link"
              >
                Mech_Con
              </Link>
              . Outside of games I&apos;ve done identity, web and print for
              Smartt, Connect the Doc, Columbia College and Kirkwood Carpentry.
              These days I&apos;m at Screendragon.
            </p>
            <p>
              I care about craft, legibility, and getting out of a user&apos;s
              way. I like working across the stack — from a sketch to a design
              system to shipping React &amp; Next.js — and tying it all
              together.
            </p>
          </div>

          <aside className="about-page-bio-side" aria-hidden="true">
            {/* Boxy outlined quote marks — same hairline construction
                treatment as the ambient backdrop linework */}
            <svg
              className="about-page-bio-mark"
              viewBox="0 0 48 40"
              aria-hidden="true"
            >
              <path
                d="M1 1 h18 v18 h-9 l-9 20 z"
                fill="none"
                stroke="currentColor"
                style={{ vectorEffect: 'non-scaling-stroke' }}
              />
              <path
                d="M25 1 h18 v18 h-9 l-9 20 z"
                fill="none"
                stroke="currentColor"
                style={{ vectorEffect: 'non-scaling-stroke' }}
              />
            </svg>
            <blockquote className="about-page-bio-quote">
              I care about craft, legibility, and getting out of a user&apos;s
              way.
            </blockquote>
            <div className="about-page-bio-rule" />
            <span className="about-page-bio-attribution">My approach</span>
          </aside>
        </div>
      </article>

      {/* CAPABILITIES */}
      <section className="about-page-caps" aria-label="Capabilities">
        <header className="home-section-header">
          <div className="home-section-header-text">
            <span className="home-section-eyebrow">Capabilities</span>
            <h2 className="home-section-title">What I do</h2>
          </div>
          <Link href="/gallery" className="home-section-action">
            See the work
            <ArrowRightIcon width={14} height={14} />
          </Link>
        </header>
        <ul className="about-page-caps-grid" role="list">
          {capabilities.map((c) => (
            <li key={c.label} className="about-page-cap notch">
              <span className="about-page-cap-icon" aria-hidden="true">
                <c.Icon width={24} height={24} />
              </span>
              <div className="about-page-cap-text">
                <strong>{c.label}</strong>
                <span>{c.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CLIENTS */}
      <section className="about-page-clients" aria-label="Selected clients">
        <header className="home-section-header">
          <div className="home-section-header-text">
            <span className="home-section-eyebrow">Clients &amp; projects</span>
            <h2 className="home-section-title">Who I&apos;ve worked with</h2>
          </div>
        </header>
        <ul className="about-page-clients-list" role="list">
          {clients.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="about-page-finalcta" aria-label="Contact">
        <div className="about-page-finalcta-inner">
          <h2 className="about-page-finalcta-title">
            Got something that needs making?
          </h2>
          <p className="about-page-finalcta-desc">
            A product, a brand, a one-off piece. Tell me about it.
          </p>
          <div className="about-page-cta-row">
            <Link href="/#collaborate" className="btn btn-accent btn-lg">
              Try Paud
              <ArrowRightIcon className="icon-fwd" width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
