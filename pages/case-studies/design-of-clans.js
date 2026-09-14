import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import Image from 'next/image';

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      index="01"
      title="Design of Clans"
      seoTitle="MechWarrior 5: Clans brand and launch site"
      description="Brand, logo and launch site for MechWarrior 5: Clans, a new game that needed an identity of its own."
      heroImage="/images/case-studies/clans-img-lg-case-study4.webp"
      year="2024"
      client="Piranha Games"
      roles={[
        'Discovery',
        'Competition Analysis',
        'Branding',
        'Logo Design',
        'Wireframes',
        'Mockups',
        'Frontend Dev',
      ]}
      launchUrl="https://mw5clans.com"
      nextStudy={{
        href: '/case-studies/mw5-mercenaries',
        title: 'MW5 Mercenaries Marketing',
      }}
    >
      <div>
        <h2>
          The same universe, but a different kind of game. The brand had to say
          both.
        </h2>
        <p>
          Clans is a story-driven campaign for up to five players, quite
          different from the open sandbox of MW5 Mercenaries despite the shared
          name. I was responsible for the brand and the marketing experience at
          launch. The first requirement was clear: nobody should mistake this
          for the previous game.
        </p>
        <p>
          The story and characters were the real point of difference, so the
          branding drew on them wherever it could. The logo, site and campaign
          all pointed back to the narrative.
        </p>
        <p>
          My starting point was the history of the series. Early explorations
          drew on the MechWarrior 2 box art: a vertical split through the logo,
          fire on one side and black negative space on the other.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          The original MechWarrior box art that informed the direction.
        </span>
        <Image
          priority
          src="/images/case-studies/case-study-4-original-clans-branding.webp"
          height={1080}
          width={1920}
          alt="Early Clans branding exploration referencing classic MechWarrior box art"
        />
      </div>

      <div>
        <p>
          That artwork shaped the logo. The MechWarrior 5 half keeps the stencil
          lettering as a reference to MechWarrior 2. The Clans half, the
          invading force in the game, uses modern curves and wider spacing. Two
          typographic voices stand for two opposing factions, so the mark
          carries the premise of the story on its own.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          The Clans logo: custom typography, two factions in one mark.
        </span>
        <Image
          priority
          src="/images/case-studies/case-study-4-clans-logo-img3.webp"
          height={1080}
          width={1920}
          alt="Final MechWarrior 5 Clans logo with custom typography"
        />
      </div>

      <div>
        <span className="text-secondary text-sm">
          Website mockups and site flow.
        </span>
        <Image
          priority
          src="/images/case-studies/case-study-4-clans-website-design-img.webp"
          height={1080}
          width={1920}
          alt="Clans website mockup phase and site flow diagrams"
        />
      </div>

      <div>
        <p>
          The website had three jobs: present the character videos and trailers,
          direct players to their preferred store, and feel like the game. I
          rebuilt elements of the in-game UI as CSS components and used them to
          frame the site&apos;s content, with a colour scheme taken from the key
          art and the in-game HUD. The marketing and the game read as one
          consistent thing.
        </p>
        <Image
          priority
          src="/images/case-studies/case-study4-game-front-end.webp"
          height={1080}
          width={1920}
          alt="Clans in-game front end that informed the website components"
        />
      </div>

      <div>
        <span className="text-secondary text-sm">
          The site leads with the new characters.
        </span>
        <Image
          priority
          src="/images/case-studies/case-study-4-clans-content-img1.webp"
          height={1080}
          width={1920}
          alt="Clans website content sections showcasing the new characters"
        />
      </div>

      <div>
        <p>
          The mobile build received the same attention. WebP images and a
          utility-first CSS setup kept the responsive work efficient and the
          pages fast.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">The site on mobile.</span>
        <Image
          priority
          src="/images/case-studies/case-study-4-clans-mobile-img2.webp"
          height={1080}
          width={1920}
          alt="Responsive mobile views of the Clans website"
        />
      </div>
    </CaseStudyTemplate>
  );
}
