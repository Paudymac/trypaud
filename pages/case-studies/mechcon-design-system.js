import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import Image from 'next/image';

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      index="04"
      title="Mech_Con Design System"
      description="One hexagon, stretched across a whole convention — the design system behind Mech_Con 2018."
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
          A convention is a brand you walk around inside. Every surface is a
          touchpoint.
        </h2>
        <p>
          Mech_Con was Piranha&apos;s two-day celebration of all things
          BattleTech, running 2016–2018 with fans flying in from around the
          world. This study looks at the 2018 system: one identity stretched
          across a website, merch, game streams, video, advertising, venue
          signage and a MechWarrior Online world tournament — digital and
          physical, all at once.
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
          Step one: update the 2017 logo and write a style guide. Out came the
          sketch pad, and the answer turned out to be a hexagon. It could flex
          into almost any use case — and it rhymed with everything around it:
          the stage rigs holding the lights and cameras, and the BattleTech
          board game itself, famously played on a hex map.
        </p>
        <p>
          The website shipped first so attendees could sign up, with print
          collateral following over the months before the event. The style guide
          did the heavy lifting: printers, the staging firm and the marketing
          team all worked from the same document, so everything arrived looking
          like one thing.
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
          The tournament teams each got custom shirts built around their own
          logos — a separate little design challenge sitting between the event
          brand and the tournament brand. Even so, every bespoke tee carried a
          hex pattern, drawn like battle-worn chainmail, to keep it in the
          family.
        </p>
        <p>
          The tournament identity swapped the event&apos;s electric blue for
          fire orange, with the hexagons spherised into a globe — a nod to
          MWO&apos;s worldwide player network. There was even a one-off Mech,
          designed by Piranha&apos;s senior concept artist, that landed on the
          event tees.
        </p>
        <p>
          Honest verdict: Mech_Con was chaos, with everything converging in the
          final week — and the hexagon earned its keep. One strong geometric
          anchor meant less deciding and more making, right when it mattered.
        </p>
      </div>
    </CaseStudyTemplate>
  );
}
