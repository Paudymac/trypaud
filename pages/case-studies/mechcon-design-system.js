import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import Image from 'next/image';
/* Static import so Next can inline a blur placeholder for the banner */
import hero from '@/public/images/case-studies/mechcon-img-lg-case-study2.webp';

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      index="04"
      title="Mech_Con Design System"
      seoTitle="Mech_Con 2018 design system"
      description="One hexagon, stretched across an entire convention: website, signage, shirts, streams and a world tournament."
      heroImage={hero}
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
          A convention is a brand you can walk into. Every surface is a chance
          to get it wrong.
        </h2>
        <p>
          Mech_Con was Piranha&apos;s two-day BattleTech convention. It ran from
          2016 to 2018, and fans travelled from all over the world for it. This
          is the 2018 system: one identity across a website, merchandise, game
          streams, video, advertising, venue signage and a MechWarrior Online
          world tournament. Digital and physical, all due at the same time.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          Brand elements from Mech_Con 2018.
        </span>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/case-study2-mechcon-branding-elements.webp"
          height={1080}
          width={1920}
          alt="Mech_Con 2018 brand elements"
        />
      </div>

      <div>
        <span className="text-secondary text-sm">The Mech_Con website.</span>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/case-study2-mechcon-website-elements.webp"
          height={1080}
          width={1920}
          alt="Mech_Con event website design"
        />
      </div>

      <div>
        <p>
          First job: update the 2017 logo and write a style guide. The sketching
          kept landing on a hexagon. It bends to almost any use, and it was
          already all over the room: in the stage rigs holding the lights and
          cameras, and in BattleTech itself, a board game played on a hex map.
        </p>
        <p>
          The website went up first so people could register. Print followed
          over the months before the event. The style guide did the heavy
          lifting. Printers, the staging firm and the marketing team all worked
          from one document, so everything turned up looking related.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">Style guide components.</span>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/mechcon-styleguide-case-study2.webp"
          height={1080}
          width={1920}
          alt="Mech_Con 2018 style guide components"
        />
      </div>

      <div>
        <span className="text-secondary text-sm">Event components.</span>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/case-study2-mechcon-event-elements.webp"
          height={1080}
          width={1920}
          alt="Mech_Con physical event design elements"
        />
      </div>

      <div>
        <span className="text-secondary text-sm">Tournament competitors.</span>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/case-study-2-team-tees.webp"
          height={1080}
          width={1920}
          alt="Custom tournament team shirts"
        />
      </div>

      <div>
        <p>
          Each tournament team got custom shirts built around its own logo. That
          is a separate design problem, wedged between the event brand and the
          tournament brand. Every shirt still carries a hex pattern, drawn to
          look like worn chainmail, so it stays in the family.
        </p>
        <p>
          The tournament identity traded the event&apos;s electric blue for
          orange and wrapped the hexagons into a globe, for MWO&apos;s worldwide
          player base. Piranha&apos;s senior concept artist designed a one-off
          Mech for the event shirts.
        </p>
        <p>
          Everything landed in the final week, as it always does. That is when
          the hexagon paid for itself. One strong shape meant fewer decisions
          and more output, right when there was no time left for deciding.
        </p>
      </div>
    </CaseStudyTemplate>
  );
}
