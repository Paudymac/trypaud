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
          <h1>Design of Clans</h1>
          <p>
          The challenge was to create a brand and player experience to support the release of MECHWARRIOR 5: CLANS. 
          </p>
          <button onClick={scrollToTarget} className={`${stylesLayout.primaryBtn} ${styles.readBtn}`}>read</button>
          </div>
           <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/clans-img-lg-case-study4.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
        </div>

        <article id="case-study">
        <div className={styles.caseStudyContainer}>
          <h2>CLANS is the latest standalone release from Piranha Games which takes place in the Mechwarrior Universe however it is a completely different game from MW5 Mercenaries. </h2>
          <h3>My Role</h3>
          <ul>
            <li>Discovery</li>
            <li>Competition Analysis</li>
            <li>Branding</li>
            <li>Logo Design</li>
            <li>Content</li>
            <li>Wireframes</li>
            <li>Mockups</li>
            <li>Frontend Dev</li>
          </ul>
        <p>
        The challenge was to create a brand and marketing experience to support the release of MECHWARRIOR 5: CLANS. It features a new story rich campaign which you can play with 5 other 
        friends in a more immersive experience utilising the latest technology updates from unreal engine.  
          </p>
          <p>
          The key differentiator from MW5: Mercs was the story and characters. An emphasis was placed on creating a compelling narrative. 
          The logo and branding had to have a look separating it from the previous MechWarrior 5 game. The branding aimed to highlight the story update as much as possible. 
          </p>
          <p>Originally the branding aimed to relate the game to classic MechWarrior titles of the past most notably MechWarrior 2. 
            Box art had a classic vertical slice splitting the logo with a large fire background on the right and a lesser black negative strip on the left. </p>
          </div>

<div className={styles.caseStudyContainer}>
  
  <p><Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study-4-original-clans-branding.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         /></p>

<p>This iconic box art provided the main creative impetus in developing the logo. 
    The MechWarrior 5 stencil lettering uses this recognisable typographic treatment in a nod to MechWarrior 2. 
    CLANS are the alien invading force in the game subsequently its lettering has more modern curves and spacing. 
    This created the two warring factions in the primary logo mirroring the game narrative.</p>

          </div>
          <div className={styles.caseStudyWideImgContainer}>
      <span className={styles.caseStudyWideImgMeta}>Clans logo features custom typography.</span>
        <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study-4-clans-logo-img3.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
      </div>
      <div className={styles.caseStudyWideImgContainer}>
      <span className={styles.caseStudyWideImgMeta}>Website Mockup Phase & Site flow.</span>
        <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study-4-clans-website-design-img.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
      </div>
      <div className={styles.caseStudyContainer}>
          <p>Website design was priortised to show character videos, trailers and giving players a path to their preferred game vendor.
            The look and feel consolidated the marketing campaign with the game ui viusals to create a coherent brand experience. 
            Themed widgets from the game were used in the site design as frames for content including text and images were converted into css components.
            A colour scheme was created to be used for the web based on keyart from ad agency Petrol and the game UI.
          </p>
          <p><Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study4-game-front-end.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         /></p>
          </div>

          <div className={styles.caseStudyWideImgContainer}>
      <span className={styles.caseStudyWideImgMeta}>Clans website aims to showcase the new characters.</span>
        <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study-4-clans-content-img1.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
      </div>
      <div className={styles.caseStudyContainer}>
          <p>Responsive web design techniques were used in making sure the site had a seamless mobile experience. This was made easier using webp images and tailwind a utility first CSS framework.

          </p>
          </div>
      <div className={styles.caseStudyWideImgContainer}>
      <span className={styles.caseStudyWideImgMeta}>Responsive design of Clans site.</span>
        <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/case-study-4-clans-mobile-img2.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
      </div>

      <div className={styles.caseStudyContainer}>
                         
    <p className={stylesLayout.backToBtnContainer}>
        <a href="/case-studies" className={`${stylesLayout.primaryBtn} ${utilStyles.backToBtn}`}> <span  className={`${styles.arrowIcoHTF}`}>&#8678;</span> Case Studies</a>
    </p>
          </div>
         
          </article>
        </section>
      </Layout>
    );
}

