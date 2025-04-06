import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import ContactForm from '../components/contactForm';
import styles from '../components/contactForm.module.css';
import stylesLayout from '../components/layout.module.css';
import scrollTo from '../components/scrollTo';
import PartnerLogos from '../components/partnerLogos';
import Galleries from '../components/galleries';
import CaseStudies from '../components/caseStudies';
import Link from 'next/link';


export default function Home({ allPostsData }) {

    // Scroll to target function
    const { scrollToTarget } = scrollTo({ targetId: 'collaborate' });

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section >

      
      <div className={stylesLayout.videoReelHolder}>
            <div className={stylesLayout.videoReelContainer}>
              <video
                poster="/images/header-video-poster.webp"
                className={stylesLayout.videoReel}
                width="1920"
                height="auto"
                autoPlay
                muted
                loop
                preload="auto"
              >
                <source src="/video/header-video.mp4" type="video/mp4" />
                <track src="/path/to/captions.vtt" kind="subtitles" srcLang="en" label="English" />
                Your browser does not support the video tag.
              </video>
              <button onClick={scrollToTarget} className={`${stylesLayout.primaryBtn} ${stylesLayout.headerBtn}`}>
                let's collaborate &rarr;
              </button>
            </div>
          </div>

          <div className={`${stylesLayout.containerHome}`}>

          <PartnerLogos />

          <CaseStudies />

      <div className={utilStyles.aboutMeContainer}>
      <h1>About Me</h1>
      <div className={utilStyles.aboutMe}>
      
      <div className={utilStyles.aboutMeImgContainer}>
      <div className={utilStyles.aboutMeImg}></div>
      </div>

        <div className={utilStyles.aboutMeDescipt}>
          <h2 className={utilStyles.aboutMeHeadline}>Creativity & Design Good</h2>
            <p className={utilStyles.aboutMeSummary}>I’ve always sketched and coloured from when I was small. Being creative is something I find innate. 
              My 17 year design journey has allowed me to wear many hats concurrently, making me a versatile designer
               with an eye for layout and identity mixed in with technical acumen through the lens of a user centered philosophy. I believe good design helps people. 
               Like holding a door open and letting someone in. Great design keeps them coming back.</p>
        </div>

      </div>
      </div>
      <div id="collaborate"></div>
      <div className={styles.contactFormContainer}>
          <h1>Let's Collaborate</h1>
          <div className={styles.contactFormHolder}>
          <ContactForm />
          </div>
        </div>

   <Galleries />

        </div>
        
      </section>
    </Layout>
  );
}


