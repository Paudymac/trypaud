import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import Image from 'next/image';

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      index="02"
      title="MW5 Mercenaries"
      description="Piranha's first stand-alone release in years — a logo, a brand system and a launch site to carry it across every platform."
      heroImage="/images/case-studies/mw5-img-lg-case-study3.webp"
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
          boxed product again. It needed a brand built to travel.
        </h2>
        <p>
          Mercenaries was the studio&apos;s shift from live-ops to a stand-alone
          game on the major platforms. I designed a scalable logo with alternate
          marks, wrote the brand guide, and built the site whose one job was
          getting each player to their chosen store — for launch and for every
          DLC after it.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">The Mercenaries logo.</span>
        <Image
          priority
          src="/images/case-studies/case-study-3-mercs-logo-img3.webp"
          height={1080}
          width={1920}
          alt="MechWarrior 5 Mercenaries logo"
        />
      </div>

      <div>
        <p>
          The logo grew into a full system — a short mark, colour schema and
          typography. Key art and the wider campaign came from Petrol, the
          California agency, and the partnership let Piranha&apos;s marketing
          team reach players in ways the studio hadn&apos;t tried before.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          Pieces of the Mercs design system.
        </span>
        <Image
          priority
          src="/images/case-studies/case-study-3-mercs-brand-guide-img4.webp"
          height={1080}
          width={1920}
          alt="Components of the Mercenaries brand guide and design system"
        />
      </div>

      <div>
        <p>
          The homepage belongs to the Atlas — the game&apos;s totem Mech. I gave
          it subtle animation to bring it to life, with the latest news sitting
          just below. Simple hierarchy: the icon first, the updates second.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          Homepage and the first DLC page.
        </span>
        <Image
          priority
          src="/images/case-studies/case-study-3-mercs-content-img1.webp"
          height={1080}
          width={1920}
          alt="MW5 Mercenaries homepage and DLC one page designs"
        />
      </div>

      <div>
        <p>
          The rule throughout was keep it simple. Most traffic arrived from
          social posts, landed on a DLC page, and needed a fast answer to
          &ldquo;what&apos;s in this pack?&rdquo; — so each page got video,
          in-game screenshots and a short story setup, working just as well on a
          phone as on desktop.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          Calls to action, pocket-sized.
        </span>
        <Image
          priority
          src="/images/case-studies/case-study-3-mercs-mobile-img2.webp"
          height={1080}
          width={1920}
          alt="Mercenaries mobile page designs with prominent calls to action"
        />
      </div>
    </CaseStudyTemplate>
  );
}
