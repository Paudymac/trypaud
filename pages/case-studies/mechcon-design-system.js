import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import Image from 'next/image';

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      index="04"
      title="Mech_Con Design System"
      description="The design system behind Mech_Con 2018, built on a single hexagon and applied across the whole convention."
      heroImage="/images/case-studies/mechcon-img-lg-case-study2.webp"
      year="2016 – 2018"
      client="Piranha Games"
      roles={['Event Branding', 'Design System', 'Web Design', 'Frontend Dev']}
      nextStudy={{
        href: '/case-studies/design-of-clans',
        title: 'Design of Clans',
      }}
    >
      <div>
        <h2>
          A convention is a brand experienced in person. Every surface is a
          touchpoint.
        </h2>
        <p>
          Mech_Con was Piranha&apos;s two-day BattleTech convention, held from
          2016 to 2018 and attended by fans from around the world. This study
          covers the 2018 system: one identity applied across a website,
          merchandise, game streams, video, advertising, venue signage and a
          MechWarrior Online world tournament, in digital and physical form at
          the same time.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          Brand elements from Mech_Con 2018.
        </span>
        <Image
          priority
          src="/images/case-studies/case-study2-mechcon-branding-elements.webp"
          height={1080}
          width={1920}
          alt="Mech_Con 2018 brand elements"
        />
      </div>

      <div>
        <span className="text-secondary text-sm">The Mech_Con website.</span>
        <Image
          priority
          src="/images/case-studies/case-study2-mechcon-website-elements.webp"
          height={1080}
          width={1920}
          alt="Mech_Con event website design"
        />
      </div>

      <div>
        <p>
          The first step was to update the 2017 logo and write a style guide.
          Sketching led to a hexagon. It could adapt to almost any use, and it
          echoed its surroundings: the stage rigs holding the lights and
          cameras, and the BattleTech board game itself, which is played on a
          hex map.
        </p>
        <p>
          The website launched first so that attendees could register, with
          print collateral following over the months before the event. The style
          guide carried much of the load. Printers, the staging firm and the
          marketing team all worked from the same document, so everything
          arrived looking like part of one system.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">Style guide components.</span>
        <Image
          priority
          src="/images/case-studies/mechcon-styleguide-case-study2.webp"
          height={1080}
          width={1920}
          alt="Mech_Con 2018 style guide components"
        />
      </div>

      <div>
        <span className="text-secondary text-sm">Event components.</span>
        <Image
          priority
          src="/images/case-studies/case-study2-mechcon-event-elements.webp"
          height={1080}
          width={1920}
          alt="Mech_Con physical event design elements"
        />
      </div>

      <div>
        <span className="text-secondary text-sm">Tournament competitors.</span>
        <Image
          priority
          src="/images/case-studies/case-study-2-team-tees.webp"
          height={1080}
          width={1920}
          alt="Custom tournament team shirts"
        />
      </div>

      <div>
        <p>
          Each tournament team received custom shirts built around its own logo,
          a separate design problem sitting between the event brand and the
          tournament brand. Every shirt still carried a hex pattern, drawn to
          resemble worn chainmail, to keep it within the family.
        </p>
        <p>
          The tournament identity swapped the event&apos;s electric blue for
          orange and wrapped the hexagons into a globe, a reference to
          MWO&apos;s worldwide player base. A one-off Mech, designed by
          Piranha&apos;s senior concept artist, appeared on the event shirts.
        </p>
        <p>
          Mech_Con was demanding, with everything converging in the final week,
          and the hexagon proved its worth. One strong geometric anchor meant
          fewer decisions and more production at the point where it mattered.
        </p>
      </div>
    </CaseStudyTemplate>
  );
}
