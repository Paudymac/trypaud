import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import Image from 'next/image';

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      index="03"
      title="UI for MWO Product Pages"
      description="Eleven years of product pages for MechWarrior Online — designing, measuring, and relentlessly simplifying the store that funds the game."
      heroImage="/images/case-studies/mwo-product-img-lg-art-case-study1.webp"
      year="2013 – 2024"
      client="Piranha Games"
      roles={['UI Design', 'UX', 'E-commerce', 'Frontend Dev']}
      nextStudy={{
        href: '/case-studies/mechcon-design-system',
        title: 'Mech_Con Design System',
      }}
    >
      <div>
        <h2>
          A free-to-play game lives or dies on its store. This one had to be
          worthy of the Mechs it was selling.
        </h2>
        <p>
          I joined Piranha in 2013, just after MechWarrior Online launched.
          Products were sold through{' '}
          <a href="https://mwomercs.com/">mwomercs.com</a> — a site whose bones
          haven&apos;t changed since, though the product pages never stopped
          evolving. Mech pack sales funded the game&apos;s development, so the
          purchase flow mattered more than almost anything else I touched.
        </p>
        <p>
          A discovery review of the early{' '}
          <a href="https://mwomercs.com/clans">product pages</a> was honest and
          a little painful: heavy unoptimised images, no real mobile view,
          missing hover states, surprising rollovers — and you only found out
          you needed to sign in after hitting Buy. The Mechs themselves, the
          whole point of the page, were shown too small to fall in love with.
        </p>
        <p>
          One deliberately unfashionable call: we designed desktop-first. The
          magazines were all preaching mobile-first, but under 20% of our
          traffic was mobile — this was a PC game, installed from this very
          site. And the art demanded it: Mechs are drawn to be seen big, bells
          and whistles on full display. So desktop got the best version, and
          media queries scaled it down carefully.
        </p>
        <p>
          The redesign centred on a{' '}
          <a href="https://mwomercs.com/origins">full-height carousel</a> —
          uncropped Mech art, a thumbnail rail to flick between variants, and
          smaller image sets served to smaller screens. Desaturated backgrounds
          made the pack&apos;s original skins pop.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          The product page, evolving across a decade.
        </span>
        <Image
          priority
          src="/images/case-studies/case-study1-mwo-product-page-comparison-img.webp"
          height={1080}
          width={1920}
          alt="Comparison of MWO product page designs across the years"
        />
      </div>

      <div>
        <p>
          A sticky nav under the carousel held the important actions — sign-in,
          and later a gifting button players had asked for, which became
          genuinely popular. Each pack also got its own strapline to match its
          theme; writing them is still a small point of joy for the live-ops
          team today.
        </p>
        <p>
          Below the fold: pack contents and Mech specs — hardpoints, tonnage,
          weapon groups — in click-to-reveal menus, plus a countdown clock on
          the carousel for the early-buyer bonuses that expired once packs hit
          the in-game store. Long page, so a back-to-top arrow lived in the
          sticky nav.
        </p>
        <p>
          Then we spent a decade removing things. The data said nobody used the
          social icons or the newsletter signup, so they went. Specs collapsed
          into a single reveal. Old packs came off the page entirely. Every
          removal made the current offer easier to see — the best product page
          turned out to be the one with the least on it.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          The Legends battlepass page.
        </span>
        <Image
          priority
          src="/images/case-studies/case-study1-mwo-product-legends-img.webp"
          height={1080}
          width={1920}
          alt="MWO Legends battlepass product page"
        />
      </div>

      <div>
        <p>
          After the 2023 rebrand came a battlepass — buy a Mech, play it, and it
          keeps earning you more. A new page pattern, built on everything the
          previous ten years had taught us.
        </p>
      </div>
    </CaseStudyTemplate>
  );
}
