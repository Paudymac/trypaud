import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import Image from 'next/image';

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      title="Mech_Con Design System"
      description="Mech_Con was a 2-day gaming event celebrating the BattleTech universe and Piranha Games MechWarrior titles taking place between 2016 - 2018."
      heroImage="/images/case-studies/mechcon-img-lg-case-study2.webp"
    >
      <div>
        <h2>
          Mech_Con was a 2-day Gaming event celebrating the BattleTech universe
          and Piranha Games MechWarrior titles taking place between 2016 - 2018.
          This case study, focusing on 2018, is a partial exploration of the
          design system used for the creation of digital and print media for the
          event.
        </h2>
        <p>
          The event was an overwhelming success with gaming enthusiasts from
          around the world gathering to celebrate the BattleTech franchise and
          Mechs’. The task was to create a scalable brand with event touchpoints
          existing digitally and physically in the form of a website, merch,
          game streams, video, advertising, signs and a MechWarrior Online world
          tournament.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          Image showing Mech_Con 2018 brand elements.
        </span>
        <Image
          priority
          src="/images/case-studies/case-study2-mechcon-branding-elements.webp"
          height={1080}
          width={1920}
          alt="Logo"
        />
      </div>
      <div>
        <span className="text-secondary text-sm">Mech_Con website.</span>
        <Image
          priority
          src="/images/case-studies/case-study2-mechcon-website-elements.webp"
          height={1080}
          width={1920}
          alt="Logo"
        />
      </div>
      <div>
        <p>
          Step one involved updating the logo from Mech_Con 2017 and creating a
          style-guide. I broke open the sketch pad and ideated on a design, a
          hexagon, which could be expanded upon in various use case scenarios.
          The hexagon dovetailed nicely with the event setup using rigs
          extensively for lights, cameras and the BattleTech board game which
          famously employs a hexagonal map with Mechs’ strategically placed for
          combat.
        </p>
        <p>
          The website was created first for attendee’s to sign-up with print
          collateral developed in months preceding the event. The style-guide
          was shared between printers, the event staging firm and marketers
          allowing for a confluence of supplemental material to be organised
          with a consistent look and feel.{' '}
        </p>
      </div>
      <div>
        <span className="text-secondary text-sm">
          Image showing Mech_Con 2018 styleguide components.
        </span>
        <Image
          priority
          src="/images/case-studies/mechcon-styleguide-case-study2.webp"
          height={1080}
          width={1920}
          alt="Logo"
        />
      </div>
      <div>
        <span className="text-secondary text-sm">Event components.</span>
        <Image
          priority
          src="/images/case-studies/case-study2-mechcon-event-elements.webp"
          height={1080}
          width={1920}
          alt="Logo"
        />
      </div>
      <div>
        <span className="text-secondary text-sm">Tournament competitors.</span>
        <Image
          priority
          src="/images/case-studies/case-study-2-team-tees.webp"
          height={1080}
          width={1920}
          alt="Logo"
        />
      </div>
      <div>
        <p>
          Custom made player shirts were created for MechWarrior Online
          tournament teams outside of the Mech_Con brand. The shirts
          corresponded with the teams’ own logos and represented another design
          challenge in between the event and tournament branding. Even though
          each player tee was bespoke, I was still able to add a hex pattern
          invoking battle hardened chain mail for the design.
        </p>

        <p>
          A specially designed Mech for the event was created by the Piranha
          Senior Concept Artist which was factored into the brand at a later
          point. The central use case for this unique Mech were the event custom
          tees. The tournament branding while different vis-a-vis the event
          identity's electric blue, instead using a fire orange as the primary
          colour, incorporated the hex in the form of a spherized pattern
          representing the global player network of MechWarrior Online.
        </p>
        <p>
          In conclusion Mech_Con provided a complex design challenge with
          numerous variables coalesing on the week prior to commencement. The
          hexagon proved a useful cornerstone for asset creation reducing design
          thinking time and speeding up development.{' '}
        </p>
      </div>
    </CaseStudyTemplate>
  );
}
