import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import Image from 'next/image';
/* Static import so Next can inline a blur placeholder for the banner */
import hero from '@/public/images/case-studies/mw5-img-lg-case-study3.webp';

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      index="02"
      title="MW5 Mercenaries"
      seoTitle="MechWarrior 5: Mercenaries brand and launch site"
      description="Logo, brand system and launch site for Piranha's first stand-alone game in years. It had to hold up on every platform going."
      heroImage={hero}
      year="2021"
      client="Piranha Games"
      roles={['Marketing', 'Visual Design', 'Web Design', 'Frontend Dev']}
      launchUrl="https://mw5mercs.com"
      nextStudy={{
        href: '/case-studies/ui-mwo-product-pages',
        title: 'UI for MWO Product Pages',
      }}
    >
      <div>
        <h2>
          After years of running a live-service game, Piranha was shipping a
          stand-alone product again. The brand had to work everywhere at once.
        </h2>
        <p>
          Mercenaries was the studio&apos;s move from live operations to a
          stand-alone game on the major platforms. I designed a logo that
          scales, with alternate marks for the awkward spaces, wrote the brand
          guide, and built the website. The site had one job: get each player to
          the store they prefer. At launch, and again for every DLC after.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">The Mercenaries logo.</span>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/case-study-3-mercs-logo-img3.webp"
          height={1080}
          width={1920}
          alt="MechWarrior 5 Mercenaries logo"
        />
      </div>

      <div>
        <p>
          The logo grew into a system: a short mark, a colour scheme,
          typography. Key art and the wider campaign came from Petrol, an agency
          in California. The partnership gave Piranha&apos;s marketing team new
          ways to reach players.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          Pieces of the Mercs design system.
        </span>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/case-study-3-mercs-brand-guide-img4.webp"
          height={1080}
          width={1920}
          alt="Components of the Mercenaries brand guide and design system"
        />
      </div>

      <div>
        <p>
          The homepage belongs to the Atlas, the game&apos;s signature Mech. A
          little animation keeps it alive, and the latest news sits right below.
          Robot first, updates second. That is the whole hierarchy.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          Homepage and the first DLC page.
        </span>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/case-study-3-mercs-content-img1.webp"
          height={1080}
          width={1920}
          alt="MW5 Mercenaries homepage and DLC one page designs"
        />
      </div>

      <div>
        <p>
          The rule was to keep it simple. Most traffic came from social posts,
          landed on a DLC page and had one question: what is in this pack? So
          each page gets a video, in-game screenshots and a short story setup,
          and none of it falls apart on a phone.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          Calls to action on mobile.
        </span>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/case-study-3-mercs-mobile-img2.webp"
          height={1080}
          width={1920}
          alt="Mercenaries mobile page designs with prominent calls to action"
        />
      </div>
    </CaseStudyTemplate>
  );
}
