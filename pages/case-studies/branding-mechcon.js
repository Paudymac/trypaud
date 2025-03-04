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
          Mech_Con was a 2-day Gaming event celebrating the BattleTech game universe and Piranha MechWarrior games taking place in 2018. 
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
          <h2>Mech_Con was a 2-day Gaming event celebrating the BattleTech game universe and Piranha MechWarrior games taking place in 2018. 
          This case study is an exploration of the design system used for the creation of digital and print media branding Mech_Con.
          </h2>
        <p>
        The event was an overwhelming success with gaming enthusiasts from around the world gathering to celebrate the BattleTech franchise and Mechs’. 
        The task was to create a scalable brand for the event with touchpoints existing on screen in the form of a website, game streams, video, advertising, signs and a MechWarrior Online world series tournament.
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
  <p>The first step was to create a logo and style-guide.</p>
                         <p className={styles.caseStudiesBtnContainer}>
          <a href="/case-studies" className={`${stylesLayout.primaryBtn} ${utilStyles.backToBtn}`}>&larr; Case Studies</a>
          </p>
                         </div>
          </article>
        </section>
      </Layout>
    );
}


