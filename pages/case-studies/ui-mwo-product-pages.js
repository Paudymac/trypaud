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
          <h1>The User Interface for purchasing MWO Legends content</h1>
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
        I joined Piranha Games as their Interactive Designer in 2013, MechWarrior Online had just launched and products were being sold through an already established game site <a href='https://mwomercs.com/'>www.mwomercs.com</a> whose fundamental design hasn’t changed, although the product pages continued to evolve. 
          </p>
          <p>
          New products or game content were highlighted on the homepage with a separate product page detailing the offer.  The highlight of the content were Mechs’. They provided the vehicular chassis players experienced the free to play tactical shooter. Content sold sustained game development allowing expansion with new levels, gameplay updates and Mechs’. The Free to Play business model relied on an easy and reliable process for players to purchase Mechs'. 
          </p>
          <p>A discovery review revealed the <a href='https://mwomercs.com/clans'>Product Page</a> design was image heavy with many not optimized for the web, increasing page load times, they failed to accommodate mobile views and the click through experience of the page was challenging. Buttons were missing hover states, while rollover states were surprising. The Mechs’ lacked visibility in how they looked at scale reducing the players ability to visualize how they would play in game. It wasn’t clear players had to sign-in with their game account to purchase content. This only became apparent when you clicked on a ‘buy’ button. 
            In summation the design and purchasing experience could be improved. </p>
            <p>Less than 20% of users accessed pages through a mobile device. This made sense as the game was created for a PC environment with the installer downloaded directly from the site. Even so, it was still important to tackle this from a web dev perspective. Thus, new product pages would be created with media queries using a desktop first approach. 
    At the time significant publications like Smashing Magazine were endorsing a mobile first approach with content scaling up, but since the majority of our traffic was PC based I felt it was better to start with a desktop view and scale down. This allowed us to create the best possible experience for players who wanted a new Mech while playing the game. 
    Another significant reason was the art. Mechs' were designed to be seen in a larger format with all their bells and whistles on full display, enticing players to buy a game pack.</p>
  <p>A <a href='https://mwomercs.com/origins'>carousel</a> was implemented with full length Mech images showcasing the art without any cropping. A right hand menu featured a thumbnail of each Mech allowing the players to conveniently switch between them. Small and medium sized images are fetched for smaller resolutions, speeding up page load times for mobile devices. Desaturated backgrounds were used to highlight the original Mech skins sold with the packs.</p>
          </div>
      <div className={styles.caseStudyWideImgContainer}>
      <span className={styles.caseStudyWideImgMeta}>Image showing the evolution of MWO product pages.</span>
        <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study1-mwo-product-page-comparison-img.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
      </div>

      <div className={styles.caseStudyContainer}>
  <p>Important actions like signing into your account were included in a sticky navigation below the carousel. Later, due to player feedback, a gifting button was included and proved to be popular with the player base. I added a unique strapline for the pack to complement the theme and title. New pack straplines continue to this day and are a point of joy within the live ops team.</p>
  <p>Moving further down the page players were provided with a detailed breakdown of additional pack content and mech specifications detailing information like hard points, tonnage and weapon groups via a click and reveal menu categorised by pack.</p>
  <p>Most packs usually contained extra content which expired when the Mechs' were ready for purchase in game. The time between when a pack was announced and when the content was created approximated at two months. To incentivize purchase a countdown clock was added to the main carousel at the top, which disappeared after the two month window. A back to top arrow was included in the sticky nav due to the long length of the page. Additional sections like subscribe to our newsletter and links to other Mech packs were also included to keep players engaged. Page design could be successfully tweaked to accommodate less Mech packs without large development overhead. This would have been unachievable with the initial page design method.</p>
  <p>From 2014 - 2024 page design was simplified to accommodate different < a href='https://mwomercs.com/stryker'>product offers</a>. Social media icons were removed along with newsletter signup. Data revealed they weren't overly interacted with by users. A clutter free approach to page design for maximal purchase experience was pursued. Mech specs were encapsulated into a one click reveal all page design, whie older Mech packs for purchase were removed, reducing page scroll time and illuminating the current content offering more readily.</p>
          </div>

      <div className={styles.caseStudyWideImgContainer}>
      <span className={styles.caseStudyWideImgMeta}>MWO Legends Battlepass.</span>
        <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study1-mwo-product-legends-img.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
      </div>
         

<div className={styles.caseStudyContainer}>
  <p>After a game rebrand in 2023 a new Battlepass feature was added to incentive players to buy and play Mechs with new greater value added to the Mech the more you played. </p>
    <p className={stylesLayout.backToBtnContainer}>
        <a href="/case-studies" className={`${stylesLayout.primaryBtn} ${utilStyles.backToBtn}`}><span  className={`${styles.arrowIcoHTF}`}>&#11013;</span> Case Studies</a>
    </p>
          </div>
          </article>
        </section>
      </Layout>
    );
}

