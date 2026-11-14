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
      description="Eleven years of product pages for MechWarrior Online. Mostly a story about taking things off the page that pays for the game."
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
          A free-to-play game lives off its store. This one was selling giant
          robots at thumbnail size.
        </h2>
        <p>
          I joined Piranha in 2013, just after MechWarrior Online launched.
          Products sold through <a href="https://mwomercs.com/">mwomercs.com</a>
          . The structure of that site has not changed since. The product pages
          never sat still. Mech pack sales paid for the game&apos;s development,
          so the purchase flow mattered more than nearly anything else I
          touched.
        </p>
        <p>
          A review of the early{' '}
          <a href="https://mwomercs.com/clans">product pages</a> turned up
          plenty: heavy, unoptimised images, no real mobile view, missing hover
          states, rollovers nobody expected, and a sign-in wall that only
          appeared after you pressed Buy. And the Mechs, the entire reason for
          the page, were too small to impress anyone.
        </p>
        <p>
          One call went against the advice of the day: we designed
          desktop-first. Mobile-first was gospel, but under 20% of our traffic
          was mobile. This was a PC game, installed from this very site. The art
          asked for it too. Mechs are drawn to be seen big, with every detail on
          show. Desktop got the best version, and media queries scaled it down
          with care.
        </p>
        <p>
          The redesign was built around a{' '}
          <a href="https://mwomercs.com/origins">full-height carousel</a>:
          uncropped Mech art, a thumbnail rail for flicking between variants,
          and smaller image sets for smaller screens. Desaturated backgrounds
          let the pack&apos;s original skins do the shouting.
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
          A sticky bar under the carousel held the actions that mattered:
          sign-in, and later a gifting button. Players asked for that one and
          then actually used it, which does not always follow. Each pack also
          got its own strapline to suit its theme. The live-ops team still
          writes them.
        </p>
        <p>
          Below the fold: pack contents and Mech specs (hardpoints, tonnage,
          weapon groups) in click-to-reveal menus, plus a countdown on the
          carousel for the early-buyer bonuses, which expired once a pack
          reached the in-game store. It was a long page, so the sticky bar
          carried a back-to-top link as well.
        </p>
        <p>
          Then we spent a decade taking things out. The data said nobody touched
          the social icons or the newsletter sign-up, so they went. Specs
          collapsed into a single reveal. Old packs came off the page entirely.
          Every cut made the current offer easier to see. The best product page
          turned out to be the one with the least on it.
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
          The 2023 rebrand brought a battlepass: buy a Mech, play it, and it
          keeps earning rewards. That needed a new page pattern, built on ten
          years of finding out what people ignore.
        </p>
      </div>
    </CaseStudyTemplate>
  );
}
