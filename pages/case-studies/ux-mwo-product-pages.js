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
          <h1>The User Experience of purchasing content for MWO Legends</h1>
          <p>
          MechWarrior Online is a live services tactical shooter with a persistent player base spanning the globe based on the popular BattleTech Universe. 
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
          <h2>MechWarrior Online is a live services tactical shooter with a persistent player base spanning the globe based on the popular BattleTech Universe. 
          The game is free to play with purchasable content adding value to the player experience. </h2>
        <p>
        I joined Piranha Games as their Interactive Designer in 2013, MechWarrior Online had just launched and products were being sold through an already established game site <a href='https://mwomercs.com/'>www.mwomercs.com</a> whose fundamental design hasn’t changed, although the product pages have. 
          </p>
          <p>
          New products or game content were highlighted on the homepage with a separate product page detailing the offer.  The highlight of the content were Mechs’. They provided the vehicular chassis players experienced the free to play tactical shooter. Content sold sustained game development allowing expansion with new levels, gameplay updates and Mechs’. The Free to Play business model relied on an easy and reliable process for players to purchase Mechs'. 
          </p>
          <p>A discovery review revealed the Product Page design was png image heavy with many images not optimized for the web, increasing page load times, they failded to accommodate mobile views and the click through experience of the page was difficult. Buttons were missing hover states, while rollover states were surprising. The Mechs’ lacked visibility in how they looked at scale reducing the players ability to visualize how they would play in game. It wasn’t clear players had to sign in with their game account to purchase content. This only became apparent when you clicked on a ‘buy’ button. 
            In summation the design and purchasing experience could be improved. </p>
          </div>
      
        
        <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study1-mwo-product-page-comparison-img.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />

<div className={styles.caseStudyContainer}>
  <p>Less than 20% of users accessed the site through a mobile device. This made sense as the game was created for a PC game environment with the installer downloaded directly from the site. Even so, it was still important to tackle this from a web dev perspective. New product pages would thus sbe created with media queries using a desktop first approach. 
    At the time significant publications lke Smashing Magazine were endorsing a mobile first appraoch with content scaling up, but since the majority of our traffic was PC based it made sense to start with a desktop view and scale down. This allowed us to create the best possible experience for players who wanted a new Mech. Another significant reason was the art. Mechs' were designed to be seen in a larger format with all their bells and whistles on full display, enticing players to buy a game pack.</p>
   <p className={styles.caseStudiesBtnContainer}>
          <a href="/case-studies" className={`${stylesLayout.primaryBtn} ${utilStyles.backToBtn}`}>&larr; Case Studies</a>
          </p>
                         </div>
          </article>
        </section>
      </Layout>
    );
}

