import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';
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
    desc: 'Product screens, marketing sites and interface systems, from wireframe to production.',
  },
  {
    Icon: BrandingIcon,
    label: 'Branding & Logos',
    desc: 'Identity systems, marks and logotypes, along with game manuals and event collateral.',
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
    desc: 'React, Next.js and design systems. The code that delivers the work above.',
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

/* Porthole bezel scale: one tick per year, 2008 → now, spaced evenly round
   the full ring like the bolts on a cabin window. The ring draws clockwise
   from 12 o'clock and the ticks light in order, ending back at the top.
   All ticks read alike — a red "now" tick on its own looked like a needle
   (it was a 270° gauge before that, which read as a speedometer). */
const CAREER_START = 2008;
const CAREER_NOW = 2026;
const careerYears = Array.from(
  { length: CAREER_NOW - CAREER_START + 1 },
  (_, i) => CAREER_START + i
);
const DIAL_STEP = 360 / careerYears.length;

export default function AboutPage() {
  return (
    <Layout
      seo={{
        title: 'About Padraic McAteer',
        description:
          'Padraic McAteer is a senior designer and front-end developer in Ireland. Eighteen years across UI, branding, illustration and motion, much of it on the MechWarrior franchise.',
      }}
    >
      {/* HERO */}
      <section className="about-page-hero" aria-labelledby="about-title">
        <div className="about-page-hero-grid">
          <div className="about-orbit">
            {/* The bezel: a full hairline ring round the porthole with one
                tick per year of practice, evenly spaced like bolts. Draws
                once on load — clockwise from the top, each tick lighting as
                the line reaches it — then holds. No labels and no marked
                tick: the meta strip below already says "Est. 2008" and
                "18 years". */}
            <svg
              className="about-dial"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              {/* A real circle, not an arc — an arc can't close on itself
                  without leaving a seam at the join. Rotated -90 so the
                  draw-on starts at 12 o'clock, where NOW sits. No
                  pathLength and no non-scaling-stroke here: Chrome dashes a
                  non-scaling stroke in screen space, which mis-scales a
                  normalised dash and leaves the ring in pieces. The dash is
                  the true circumference (2π·44) in user units instead, so
                  the stroke width is in user units too — see .about-dial-arc. */}
              <circle
                className="about-dial-arc"
                cx="50"
                cy="50"
                r="44"
                fill="none"
                transform="rotate(-90 50 50)"
              />
              {careerYears.map((year, i) => (
                <line
                  key={year}
                  className="about-dial-tick"
                  x1="50"
                  y1="6"
                  x2="50"
                  /* The plate edge sits at r = 50/1.28 ≈ 39.06, i.e. y ≈ 10.94
                     (the svg box is 128% of the plate); 11.2 runs the tick a
                     hair under the plate's border so it reads as touching */
                  y2="11.2"
                  transform={`rotate(${(i + 1) * DIAL_STEP} 50 50)`}
                  style={{
                    '--tick-i': i,
                    vectorEffect: 'non-scaling-stroke',
                  }}
                />
              ))}
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
              Most people call me Paudy. I take ideas from first sketch to
              finished interface, and I build the front-end that delivers them.
              Based in Ireland, working with teams wherever they are.
            </p>
            <div className="about-page-cta-row">
              <Link href="/#collaborate" className="btn btn-accent">
                Get in touch
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
            <dd>● Open to enquiries</dd>
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
              Every piece of work starts with an idea. Drawing has always been
              the quickest way to test one, and I have drawn for as long as I
              can remember.
            </p>
            <p>
              Eighteen years of practice have grown around that habit: layout,
              identity, motion, illustration, and the code that delivers them.
              The principle underneath is simple. Good design is easy to use,
              and well-made design is easy to come back to.
            </p>
            <p>
              I spent most of the last decade with{' '}
              <a
                href="https://piranhagames.com"
                target="_blank"
                rel="noopener noreferrer"
                className="about-page-inline-link"
              >
                Piranha Games
              </a>{' '}
              on the MechWarrior franchise, designing UI for{' '}
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
              , and the event design system for{' '}
              <Link
                href="/case-studies/mechcon-design-system"
                className="about-page-inline-link"
              >
                Mech_Con
              </Link>
              . Outside games, I have produced identity, web and print work for
              Smartt, Connect the Doc, Columbia College and Kirkwood Carpentry.
              I am currently at Screendragon.
            </p>
            <p>
              I care about craft, legibility, and interfaces that stay out of
              the user&apos;s way. I work across the whole process, from sketch
              to design system to production React and Next.js, and I take
              responsibility for how the pieces fit together.
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
              Craft, legibility, and interfaces that stay out of the user&apos;s
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
          <h2 className="about-page-finalcta-title">Have a project in mind?</h2>
          <p className="about-page-finalcta-desc">
            A product, a brand or a single piece. I would be glad to hear about
            it.
          </p>
          <div className="about-page-cta-row">
            <Link href="/#collaborate" className="btn btn-accent btn-lg">
              Get in touch
              <ArrowRightIcon className="icon-fwd" width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
