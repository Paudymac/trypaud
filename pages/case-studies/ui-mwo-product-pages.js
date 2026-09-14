import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import Image from 'next/image';
/* Static import so Next can inline a blur placeholder for the banner */
import hero from '@/public/images/case-studies/mwo-product-img-lg-art-case-study1.webp';

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      index="03"
      title="UI for MWO Product Pages"
      seoTitle="MechWarrior Online product page UI"
      description="Eleven years of product pages for MechWarrior Online: designing, measuring and simplifying the store that funds the game."
      heroImage={hero}
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
          A free-to-play game depends on its store. This one had to do justice
          to the Mechs it was selling.
        </h2>
        <p>
          I joined Piranha in 2013, shortly after MechWarrior Online launched.
          Products were sold through{' '}
          <a href="https://mwomercs.com/">mwomercs.com</a>, a site whose
          structure has not changed since, although the product pages never
          stopped evolving. Mech pack sales funded the game&apos;s development,
          so the purchase flow mattered more than almost anything else I worked
          on.
        </p>
        <p>
          A review of the early{' '}
          <a href="https://mwomercs.com/clans">product pages</a> found plenty to
          fix: heavy, unoptimised images, no real mobile view, missing hover
          states, unexpected rollovers, and a sign-in requirement that only
          appeared after pressing Buy. The Mechs themselves, the whole point of
          the page, were shown too small to make an impression.
        </p>
        <p>
          One decision went against the prevailing advice: we designed
          desktop-first. Mobile-first was the standard recommendation, but under
          20% of our traffic was mobile. This was a PC game, installed from this
          very site, and the art called for it: Mechs are drawn to be seen
          large, with every detail on display. Desktop received the best
          version, and media queries scaled it down with care.
        </p>
        <p>
          The redesign centred on a{' '}
          <a href="https://mwomercs.com/origins">full-height carousel</a>:
          uncropped Mech art, a thumbnail rail for moving between variants, and
          smaller image sets served to smaller screens. Desaturated backgrounds
          let the pack&apos;s original skins stand out.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          The product page across a decade.
        </span>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/case-study1-mwo-product-page-comparison-img.webp"
          height={1080}
          width={1920}
          alt="Comparison of MWO product page designs across the years"
        />
      </div>

      <div>
        <p>
          A sticky navigation bar beneath the carousel held the important
          actions: sign-in, and later a gifting button that players had asked
          for and which proved popular. Each pack was also given its own
          strapline to match its theme, a practice the live-ops team still keeps
          up.
        </p>
        <p>
          Below the fold sat the pack contents and Mech specifications
          (hardpoints, tonnage and weapon groups) in click-to-reveal menus,
          along with a countdown on the carousel for the early-buyer bonuses
          that expired once a pack reached the in-game store. It was a long
          page, so the sticky navigation also carried a back-to-top link.
        </p>
        <p>
          We then spent a decade removing things. The data showed that nobody
          used the social icons or the newsletter sign-up, so they went.
          Specifications collapsed into a single reveal. Old packs came off the
          page altogether. Every removal made the current offer easier to see.
          The best product page turned out to be the one with the least on it.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          The Legends battlepass page.
        </span>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/case-study1-mwo-product-legends-img.webp"
          height={1080}
          width={1920}
          alt="MWO Legends battlepass product page"
        />
      </div>

      <div>
        <p>
          The 2023 rebrand was followed by a battlepass: buy a Mech, play it,
          and it continues to earn rewards. It needed a new page pattern, built
          on what the previous ten years had taught us.
        </p>
      </div>
    </CaseStudyTemplate>
  );
}
