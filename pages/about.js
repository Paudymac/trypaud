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
    desc: 'Product screens, marketing sites and interface systems. Wireframe to production, including the error states nobody wants to draw.',
  },
  {
    Icon: BrandingIcon,
    label: 'Branding & Logos',
    desc: 'Identity systems, marks and logotypes. Also game manuals and event collateral, because somebody has to.',
  },
  {
    Icon: IllustrationIcon,
    label: 'Illustration',
    desc: 'Pencil, paint, vectors and concept pieces. Where all of this started.',
  },
  {
    Icon: IconsGridIcon,
    label: 'Icons',
    desc: 'Glyph systems, player icons and pictogram sets. Very small pictures, very long arguments.',
  },
  {
    Icon: AnimationIcon,
    label: 'Animation',
    desc: 'Motion graphics, title sequences and trailers. Things that move for a reason.',
  },
  {
    Icon: CodeIcon,
    label: 'Front-end',
    desc: 'HTML, CSS, JavaScript, TypeScript and design systems. Where most of my time goes now. I build what I design, so I have learned to design things that can be built.',
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
            {/* The bezel: one detached ring round the porthole, the same
                device the buttons wear. It draws on once at load, clockwise
                from 12 o'clock. Where a button's ring seats on press, this
                one seats on hover: it closes onto the glass and turns blue,
                then rides back out when the pointer leaves (see
                .about-dial-ring). The -90 rotation sits on the group so the
                circle's own transform stays free for the hover scale. No
                pathLength and no non-scaling-stroke: Chrome dashes a
                non-scaling stroke in screen space and breaks the draw-on,
                so the dash is the true circumference in user units. */}
            <svg
              className="about-dial"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <g transform="rotate(-90 50 50)" fill="none">
                <circle className="about-dial-ring" cx="50" cy="50" r="41.3" />
              </g>
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
              Most people call me Paudy. I am a designer at heart who codes. I
              design the thing, then I write the front-end for the thing, which
              saves a lot of meetings. Based in Ireland. The internet reaches
              here now, so I work with teams anywhere.
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
              I have been curious about why things are the way they are for as
              long as I can remember. It is a tiring way to live and a decent
              way to become a designer.
            </p>
            <p>
              That curiosity is the whole career. Good design gets me going, and
              so does finding out how a thing works, and I have never managed to
              keep them apart. Eighteen years of it so far: layout, identity,
              motion, illustration, and then code. I took up code to get my own
              designs built properly, and found out that code is design as well.
              So is the backend. A data model is a layout. An API is an
              interface with worse typography.
            </p>
            <p>
              I spent most of a decade at{' '}
              <a
                href="https://piranhagames.com"
                target="_blank"
                rel="noopener noreferrer"
                className="about-page-inline-link"
              >
                Piranha Games
              </a>{' '}
              on the MechWarrior franchise. That is giant robots shooting each
              other, taken very seriously by everyone involved, me included. I
              designed the UI for{' '}
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
              . Away from the robots I have done identity, web and print for
              Smartt, Connect the Doc, Columbia College and Kirkwood Carpentry.
              These days I am at Screendragon.
            </p>
            <p>
              Now most of my time goes on the front-end: HTML, CSS, JavaScript
              and TypeScript. I have worked around PHP and .NET for long enough
              to read them without flinching. Python and Rust are next on the
              list. So is database design, MySQL and PostgreSQL to start with,
              because I cannot leave a machine alone until I know how it works.
              The design years sit under all of it. This is why I will argue
              about type you can read, pages that load, and components that do
              one job. The person using the thing does not care who designed it
              and who coded it. They only notice when it is bad, and I take bad
              design personally.
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
              Choose a grid. Choose a typeface. Then stop choosing and build it.
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
          <h2 className="about-page-finalcta-title">Got a project?</h2>
          <p className="about-page-finalcta-desc">
            A product, a brand, or one small thing that has been annoying you
            for a year. Send it over.
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
