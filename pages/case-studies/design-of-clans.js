import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import Image from 'next/image';

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      index="01"
      title="Design of Clans"
      description="A new MechWarrior game needed its own face — brand, logo and launch site for MECHWARRIOR 5: CLANS."
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
          Same universe, completely different game. The brand had to say both at
          once.
        </h2>
        <p>
          CLANS is a story-driven campaign you can play with five friends —
          nothing like the sandbox of MW5 Mercenaries, even though they share a
          name. My job was the brand and marketing experience for launch, and
          the first rule was clear: don&apos;t let anyone mistake this for the
          last game.
        </p>
        <p>
          The story and characters were the real differentiators, so the
          branding leaned into them everywhere it could. Everything — logo,
          site, campaign — pointed back at the narrative.
        </p>
        <p>
          My starting point was the classics. Early explorations pulled from
          MechWarrior 2&apos;s iconic box art: a vertical slice splitting the
          logo, fire on one side, black negative space on the other.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          The original MechWarrior box art that started it all.
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
          That box art drove the logo. The MECHWARRIOR 5 half keeps the stencil
          lettering as a nod to MechWarrior 2; the CLANS half — the invading
          force in the game — gets modern curves and wider spacing. Two
          typographic voices, two warring factions. The logo tells the plot
          before you&apos;ve read a word.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          The Clans logo — custom typography, two factions in one mark.
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
          The website had three jobs: show the character videos and trailers,
          get players to their preferred store, and feel like the game. I
          rebuilt themed widgets from the actual game UI as CSS components and
          used them to frame the site&apos;s content, with a colour scheme drawn
          from the key art and in-game HUD. Marketing and game visuals, one
          coherent thing.
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
          Mobile got equal care — WebP images and a utility-first CSS setup kept
          the responsive build quick and the pages fast.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          The same site, pocket-sized.
        </span>
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
