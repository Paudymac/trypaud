import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import Image from 'next/image';
/* Static import so Next can inline a blur placeholder for the banner */
import hero from '@/public/images/case-studies/clans-img-lg-case-study4.webp';

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      index="01"
      title="Design of Clans"
      seoTitle="MechWarrior 5: Clans brand and launch site"
      description="Brand, logo and launch site for MechWarrior 5: Clans. Same universe as the last game, and nobody was allowed to confuse the two."
      heroImage={hero}
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
          Same universe, different game. The brand had to say both without a
          footnote.
        </h2>
        <p>
          Clans is a story-driven campaign for up to five players. Mercenaries
          was an open sandbox. They share a name and not much else. I had the
          brand and the launch marketing, and the first rule was simple: nobody
          should mistake this for the last game.
        </p>
        <p>
          The story and the characters were what made it different, so the
          branding leaned on them at every turn. Logo, site, campaign: all of it
          points back at the narrative.
        </p>
        <p>
          I started with the back catalogue. The early explorations borrowed
          from the MechWarrior 2 box art: a vertical split through the logo,
          fire on one side, black nothing on the other.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          The original MechWarrior box art that informed the direction.
        </span>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/case-study-4-original-clans-branding.webp"
          height={1080}
          width={1920}
          alt="Early Clans branding exploration referencing classic MechWarrior box art"
        />
      </div>

      <div>
        <p>
          That artwork shaped the logo. The MechWarrior 5 half keeps the stencil
          lettering, a nod to MechWarrior 2. The Clans half belongs to the
          invaders, so it gets modern curves and wider spacing. Two kinds of
          lettering that do not get along, for two factions that do not either.
          The mark gives you the plot before you have read a word.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">
          The Clans logo: custom typography, two factions in one mark.
        </span>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
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
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/case-study-4-clans-website-design-img.webp"
          height={1080}
          width={1920}
          alt="Clans website mockup phase and site flow diagrams"
        />
      </div>

      <div>
        <p>
          The website had three jobs: show the character videos and trailers,
          send players to the store they already use, and feel like the game. I
          rebuilt pieces of the in-game UI as CSS components and used them to
          frame the content. The colours came from the key art and the HUD. You
          should not be able to tell where the marketing stops and the game
          starts.
        </p>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
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
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/case-study-4-clans-content-img1.webp"
          height={1080}
          width={1920}
          alt="Clans website content sections showcasing the new characters"
        />
      </div>

      <div>
        <p>
          Mobile got the same care, not the leftovers. WebP images and
          utility-first CSS kept the responsive work quick and the pages
          quicker.
        </p>
      </div>

      <div>
        <span className="text-secondary text-sm">The site on mobile.</span>
        <Image
          sizes="(max-width: 900px) 100vw, 84vw"
          src="/images/case-studies/case-study-4-clans-mobile-img2.webp"
          height={1080}
          width={1920}
          alt="Responsive mobile views of the Clans website"
        />
      </div>
    </CaseStudyTemplate>
  );
}
