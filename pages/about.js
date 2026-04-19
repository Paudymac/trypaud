import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '@/components/Layout';
import { ArrowUpRightIcon } from '@/components/NavIcons';
import {
  UIWebIcon,
  LogosIcon,
  BrandingIcon,
  AnimationIcon,
  IllustrationIcon,
  IconsGridIcon,
} from '@/components/NavIcons';

const capabilities = [
  {
    Icon: UIWebIcon,
    label: 'UI / Web',
    desc: 'Product screens, marketing sites, and interface systems — from wireframes to ship.',
  },
  {
    Icon: BrandingIcon,
    label: 'Branding',
    desc: 'Identity systems, visual languages, game manuals and event collateral.',
  },
  {
    Icon: LogosIcon,
    label: 'Logos',
    desc: 'Marks, monograms and logotypes for games, DLC, clients and personal work.',
  },
  {
    Icon: IllustrationIcon,
    label: 'Illustration',
    desc: 'Hand-drawn work, painting, vector art and concept pieces.',
  },
  {
    Icon: AnimationIcon,
    label: 'Animation',
    desc: 'Motion graphics, title sequences and promotional trailers.',
  },
  {
    Icon: IconsGridIcon,
    label: 'Icons',
    desc: 'Glyph systems, player icons and pictogram sets.',
  },
];

const clients = [
  'Piranha Games',
  'MechWarrior 5: Mercenaries',
  'MechWarrior 5: Clans',
  'MechWarrior Online',
  'Smartt',
  'Connect the Doc',
  'Columbia College',
  'Kirkwood Carpentry',
];

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About - {siteTitle}</title>
        <meta
          name="description"
          content="Padraic McAteer — senior designer and front-end developer with 17 years across UI, branding, illustration and visual storytelling."
        />
      </Head>

      {/* HERO */}
      <section className="about-page-hero" aria-labelledby="about-title">
        <div className="about-page-hero-grid">
          <div className="about-page-hero-image">
            <Image
              src="/images/profile-padraic.webp"
              alt="Padraic McAteer"
              fill
              priority
              sizes="(min-width: 900px) 42vw, 100vw"
            />
          </div>
          <div className="about-page-hero-content">
            <span className="about-page-eyebrow">About</span>
            <h1 id="about-title" className="about-page-title">
              Padraic&nbsp;McAteer
            </h1>
            <p className="about-page-role">
              Senior designer &amp; front-end developer · 17 years
            </p>
            <p className="about-page-intro">
              I design and build digital experiences — from brand systems and
              product interfaces to marketing sites, motion pieces and
              illustration. Based in Ireland, working with teams and clients
              around the world.
            </p>
            <div className="about-page-cta-row">
              <Link href="/#collaborate" className="btn btn-accent">
                Start a project
                <ArrowUpRightIcon width={14} height={14} />
              </Link>
              <a href="mailto:paudy@trypaud.com" className="btn btn-secondary">
                paudy@trypaud.com
              </a>
            </div>
          </div>

          <aside className="about-page-hero-side" aria-hidden="true">
            <div className="about-page-hero-stat">
              <strong>17</strong>
              <span>Years</span>
            </div>
            <div className="about-page-hero-sideline" />
            <ul className="about-page-hero-tags">
              <li>UI</li>
              <li>Branding</li>
              <li>Illustration</li>
              <li>Front-end</li>
            </ul>
            <div className="about-page-hero-location">
              <span>Ireland</span>
              <span>·</span>
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
            <dd>17 years</dd>
          </div>
          <div className="about-page-meta-row">
            <dt>Focus</dt>
            <dd>UI · Branding · Illustration · Front-end</dd>
          </div>
          <div className="about-page-meta-row">
            <dt>Availability</dt>
            <dd>Open to selected projects</dd>
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
              I&apos;ve always sketched and coloured from when I was small.
              Being creative is something I find innate.
            </p>
            <p>
              My 17 year design journey has let me wear many hats concurrently —
              layout, identity, motion, illustration, and technical acumen — all
              through the lens of a user-centered philosophy. I believe good
              design helps people. Like holding a door open and letting someone
              in. Great design keeps them coming back.
            </p>
            <p>
              Most of the last decade has been spent embedded with{' '}
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
              . Outside of games I&apos;ve worked on identity, web and print for
              Smartt, Connect the Doc, Columbia College and Kirkwood Carpentry
              among others.
            </p>
            <p>
              I care about craft, legibility, and getting out of a user&apos;s
              way. I like working across the stack — moving from a sketch to a
              design system to shipping React &amp; Next.js without losing the
              thread.
            </p>
          </div>

          <aside className="about-page-bio-side" aria-hidden="true">
            <span className="about-page-bio-mark">&ldquo;</span>
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
            <ArrowUpRightIcon width={14} height={14} />
          </Link>
        </header>
        <ul className="about-page-caps-grid" role="list">
          {capabilities.map((c) => (
            <li key={c.label} className="about-page-cap">
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
            <span className="home-section-eyebrow">Selected clients</span>
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
            Let&apos;s work together
          </h2>
          <p className="about-page-finalcta-desc">
            Got a project in mind? I&apos;d love to hear about it — whether
            it&apos;s a full product, a brand refresh or a one-off piece.
          </p>
          <div className="about-page-cta-row">
            <Link href="/#collaborate" className="btn btn-accent btn-lg">
              Start a project
              <ArrowUpRightIcon width={16} height={16} />
            </Link>
            <Link href="/case-studies" className="btn btn-secondary btn-lg">
              See case studies
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
