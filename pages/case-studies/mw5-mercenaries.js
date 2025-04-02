import Head from 'next/head';
import stylesLayout from '../../components/layout.module.css';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import styles from '../../components/caseStudy.module.css';
import Image from 'next/image';
import scrollTo from '../../components/scrollTo';



export default function CaseStudy({  }) {

  const { scrollToTarget } = scrollTo({ targetId: 'case-study' });

  return (
    <Layout>
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={styles.caseStudyImgContainer}>
          <div className={styles.caseStudyIntro}>
          <h1>MW5 Mercenaries</h1>
          <p>
          MechWarrior 5 Mercenaries represented a shift for Piranha games in game development from running a live services game to developing a stand-a-lone game accessible on major platforms. 
          </p>
          <button onClick={scrollToTarget} className={`${stylesLayout.primaryBtn} ${styles.readBtn}`}>read</button>
          </div>
           <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/mw5-img-lg-case-study3.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
        </div>
    
       
       
        <article id="case-study">
        <div className={styles.caseStudyContainer}>
          <h2>MechWarrior 5 Mercenaries represented a shift for Piranha games in game development from running a live services game to developing a stand-a-lone game accessible on major platforms. </h2>
          </div>

          <div className={styles.caseStudyWideImgContainer}>
      <span className={styles.caseStudyWideImgMeta}>Modern Mercenaries logo.</span>
        <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study-3-mercs-logo-img3.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
      </div>

      <div className={styles.caseStudyWideImgContainer}>
      <span className={styles.caseStudyWideImgMeta}>Components of Mercs design system.</span>
        <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study-3-mercs-brand-guide-img4.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
      </div>

      <div className={styles.caseStudyWideImgContainer}>
      <span className={styles.caseStudyWideImgMeta}>MW5 Mercs Homepage and DLC 1.</span>
        <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study-3-mercs-content-img1.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
      </div>
         
      <div className={styles.caseStudyWideImgContainer}>
      <span className={styles.caseStudyWideImgMeta}>Mercs call to actions on mobile devices.</span>
        <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study-3-mercs-mobile-img2.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
      </div>

<div className={styles.caseStudyContainer}>
                         
    <p className={stylesLayout.backToBtnContainer}>
        <a href="/case-studies" className={`${stylesLayout.primaryBtn} ${utilStyles.backToBtn}`}>&larr; Case Studies</a>
    </p>
          </div>
          </article>
        </section>
      </Layout>
    );
}

