import CaseStudyTemplate from '@/components/CaseStudyTemplate';
import styles from '@/components/caseStudy.module.css';
import Image from 'next/image';

export default function CaseStudy() {
  return (
    <CaseStudyTemplate
      title="MW5 Mercenaries"
      description="MechWarrior 5 Mercenaries represented a shift for Piranha games in game development from running a live services game to developing a stand-a-lone game accessible on major platforms."
      heroImage="/images/case-studies/mw5-img-lg-case-study3.webp"
    >
      <div className={styles.caseStudyContainer}>
        <h2>
          MechWarrior 5 Mercenaries represented a shift for Piranha games in
          game development from running a live services game to developing a
          stand-a-lone game accessible on major platforms.{' '}
        </h2>
        <p>
          The task was to create a scalable logo with different marks, a brand
          guide and a site to drive traffic to every players’ chosen platform
          when the game and DLC were released.{' '}
        </p>
      </div>

      <div className={styles.caseStudyWideImgContainer}>
        <span className={styles.caseStudyWideImgMeta}>
          Modern Mercenaries logo.
        </span>
        <Image
          className={styles.caseStudyImg}
          priority
          src="/images/case-studies/case-study-3-mercs-logo-img3.webp"
          height={1080}
          width={1920}
          alt="Logo"
        />
      </div>

      <div className={styles.caseStudyContainer}>
        <p>
          From the logo a design system was developed including a shorter
          version of the logo, colour schema and typography. Key Art and an
          integrated marketing campaign was created by Californian advertising
          power house Petrol. Their partnership allowed the marketing team at
          Piranha to reach our audience in new and innovative ways.
        </p>
      </div>

      <div className={styles.caseStudyWideImgContainer}>
        <span className={styles.caseStudyWideImgMeta}>
          Components of Mercs design system.
        </span>
        <Image
          className={styles.caseStudyImg}
          priority
          src="/images/case-studies/case-study-3-mercs-brand-guide-img4.webp"
          height={1080}
          width={1920}
          alt="Logo"
        />
      </div>

      <div className={styles.caseStudyContainer}>
        <p>
          The homepage design wanted to utilise the behemoth Atlas Mech acting
          as the totem Mech for the game. I added subtle animation to bring it
          to life with the latest communications about the game below.
        </p>
      </div>

      <div className={styles.caseStudyWideImgContainer}>
        <span className={styles.caseStudyWideImgMeta}>
          MW5 Mercs Homepage and DLC 1.
        </span>
        <Image
          className={styles.caseStudyImg}
          priority
          src="/images/case-studies/case-study-3-mercs-content-img1.webp"
          height={1080}
          width={1920}
          alt="Logo"
        />
      </div>

      <div className={styles.caseStudyContainer}>
        <p>
          The goal was to keep things simple. The site had look good on mobile
          just as much as desktop. Traffic was being driven from visuals on
          social media which were added to DLC page designs. Interactive game
          content including video, in game screenshots and basic story
          narratives were added so players had a good understanding of content
          in each DLC Pack.
        </p>
      </div>

      <div className={styles.caseStudyWideImgContainer}>
        <span className={styles.caseStudyWideImgMeta}>
          Mercs call to actions on mobile devices.
        </span>
        <Image
          className={styles.caseStudyImg}
          priority
          src="/images/case-studies/case-study-3-mercs-mobile-img2.webp"
          height={1080}
          width={1920}
          alt="Logo"
        />
      </div>
    </CaseStudyTemplate>
  );
}
