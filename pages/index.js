import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ContactForm from '../components/contactForm';
import styles from '../components/contactForm.module.css';
import stylesLayout from '../components/layout.module.css';
import scrollTo from '../components/scrollTo';
import PartnerLogos from '../components/partnerLogos';
import Galleries from '../components/galleries';
import CaseStudies from '../components/caseStudies';
import AboutMe from '../components/aboutMe';


export default function Home({ allPostsData }) {

    // Scroll to target function
    const { scrollToTarget } = scrollTo({ targetId: 'collaborate' });

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta charset="UTF-8" />
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
                let's collaborate <span  className={`${styles.arrowIcoHTF}`}>&#11157;</span>
              </button>
            </div>
          </div>

          <div className={`${stylesLayout.containerHome}`}>

          <PartnerLogos />

          <CaseStudies />

          <AboutMe />

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


