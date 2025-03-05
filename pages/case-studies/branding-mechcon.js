import Head from 'next/head';
import styles from '../../components/caseStudy.module.css';
import stylesLayout from '../../components/layout.module.css';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';
import scrollTo from '../../components/scrollTo';



export default function CaseStudy({  }) {

  const { scrollToTarget } = scrollTo({ targetId: 'case-study' });

  return (
    <Layout >
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={styles.caseStudyImgContainer}>
          <div className={styles.caseStudyIntro}>
          <h1>Branding Mech_Con</h1>
          <p>
          Mech_Con was a 2-day Gaming event celebrating the BattleTech game universe and Piranha Games MechWarrior titles taking place in 2018. 
          </p>
          <button onClick={scrollToTarget} className={`${stylesLayout.primaryBtn} ${styles.readBtn}`}>read</button>
          </div>
           <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/mechcon-poster-img-lg-case-study2.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
        </div>
    
        <article id="case-study">
        <div className={styles.caseStudyContainer}>
          <h2>Mech_Con was a 2-day Gaming event celebrating the BattleTech game universe and Piranha Games MechWarrior titles taking place in 2018. 
          This case study is an exploration of the design system used for the creation of digital and print media for Mech_Con.
          </h2>
        <p>
        The event was an overwhelming success with gaming enthusiasts from around the world gathering to celebrate the BattleTech franchise and Mechs’. 
        The task was to create a scalable brand for the event with touchpoints existing on screen and physically in the form of a website, merch, game streams, video, advertising, signs and a MechWarrior Online world series tournament.
          </p>
          </div>
      
        
        <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study2-mechcon-branding-elements.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />

<div className={styles.caseStudyContainer}>
  <p>Step one involved updating the logo from Mech_Con 2017 and creating a style-guide. 
    I hit the sketch pad and ideated on a design which could be expanded, landing upon the shape of a hexagon, 
    this dovetailed with the event setup using rigging for lights and cameras and the BattleTech game which famously uses a hexagonal map with Mechs’ strategically placed for combat.</p>
    <p>The website was created first for attendee’s to sign-up with print collateral developed in months preceding the event. The style-guide was shared between printers, the event staging firm and marketers allowing for a confluence of supplemental material to be organised with a consistent look and feel. </p>
    </div>
    <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/mechcon-styleguide-case-study2.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
    <div className={styles.caseStudyContainer}>
      <p>Bespoke player shirts were created for MechWarrior Online tournament teams outside of the Mech_Con brand. The shirts corresponded with the teams’ own logos and represented another design challenge in between the event and tournament branding. </p>
      <p>A specially designed Mech was created by the Piranha Senior Concept Artist which was factored into the brand at a later point. The central use case for this unique Mech were the event custom tees.</p>
      <p>The tournament branding while different vis-a-vis the event identity, using a fire orange as the primary colour, incorporated the hex in the form of a pattern representing the global player network of MechWarrior Online.</p>
      <p> <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/tournament-logo.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         /></p>
    <p>Mech_Con provided a complex design challenge with so many variables coming together at once on the week prior to commencement. 
      The hexagon proved a useful cornerstone for asset creation reducing design thinking time and speeding up development. </p>
    <p className={styles.caseStudiesBtnContainer}>
        <a href="/case-studies" className={`${stylesLayout.primaryBtn} ${utilStyles.backToBtn}`}>&larr; Case Studies</a>
    </p>
    </div>        
          </article>
        </section>
      </Layout>
    );
}


