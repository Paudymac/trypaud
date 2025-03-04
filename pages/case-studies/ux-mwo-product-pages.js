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
    <Layout>
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={styles.caseStudyImgContainer}>
          <div className={styles.caseStudyIntro}>
          <h1>The User Experience of MWO Legends Products</h1>
          <p>
          MechWarrior Online is a live services tactical shooter with a consistent user base spanning the globe based on the popular BattleTech Universe. 
          The game is free to play with purchasable in game content adding value to the user experience. 
          </p>
          <button onClick={scrollToTarget} className={`${stylesLayout.primaryBtn} ${styles.readBtn}`}>read</button>
          </div>
           <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/mwo-product-img-lg-art-case-study1.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
        </div>
    
       
       
        <article id="case-study">
        <div className={styles.caseStudyContainer}>
          <h2>MechWarrior Online is a live services tactical shooter with a consistent user base spanning the globe based on the popular BattleTech Universe. 
            The game is free to play with purchasable in game content adding value to the user experience. </h2>
        <p>
        When I joined the marketing team as their Interactive Designer MWO had just launched and products were being sold through an already established game site www.mwomercs.com whose fundamental design hasn’t changed since launch, although the product pages have consistently been updated. 
          </p>
          <p>
          New product offerings were highlighted on the homepage with a separate product page detailing the new content.  The highlight of the content were Mechs’. They provided the vehicular chassis players experienced the free to play tactical shooter.Game content sustained game development allowing expansion with new levels, gameplay updates and Mechs’. The Free to Play business model relied on an easy and reliable process for players to purchase content. 
          </p>
          <p>I discovered the Product Page design was image heavy with many images not optimized for the web, increasing page load times, they were non-responsive designs meaning the mobile experience was lacking and the click through experience of the page was non-intuitive. Buttons were missing hover states, while rollover states were surprising. The Mechs’ lacked visibility in how they looked at scale reducing the players ability to visualize how they would play in game. It wasn’t clear players had to sign to purchase content. This only became apparent when you clicked on a ‘buy’ button. Overall, I felt the design and purchasing experience could be improved to say the least. </p>
          <p>
          </p>
          </div>
      
        
        <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study1-mwo-product-page-comparison-img copy.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />

<div className={styles.caseStudyContainer}>
                         <p className={styles.caseStudiesBtnContainer}>
          <a href="/case-studies" className={`${stylesLayout.primaryBtn} ${utilStyles.backToBtn}`}>&larr; Case Studies</a>
          </p>
                         </div>
          </article>
        </section>
      </Layout>
    );
}

