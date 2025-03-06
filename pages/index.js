import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import ContactForm from '../components/contactForm';
import styles from '../components/contactForm.module.css';
import stylesLayout from '../components/layout.module.css';
import scrollTo from '../components/scrollTo';


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
                className={stylesLayout.videoReel}
                width="1920"
                height="auto"
                autoPlay
                muted
                loop
                preload="metadata"
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

          <div className={stylesLayout.containerHome}>
      <div className={utilStyles.partnerLogosContainer}>
        <h1>Clients</h1>
        <ul className={utilStyles.partnerLogos}>
          <li>
          <Image
                 priority
                 src="/images/logos/partners/pgi.svg"
                 height={150}
                 width={200}
                 alt="Logo"
               />
          </li>
          <li>
          <Image
                 priority
                 src="/images/logos/partners/mw5.svg"
                 height={150}
                 width={200}
                 alt="Logo"
               />
          </li>
          <li>
          <Image
                 priority
                 src="/images/logos/partners/clans.svg"
                 height={150}
                 width={200}
                 alt="Logo"
               />
         </li>
          <li>
          <Image
                 priority
                 src="/images/logos/partners/mwo.svg"
                 height={150}
                 width={200}
                 alt="Logo"
               />
          </li>
          <li>
          <Image
                 priority
                 src="/images/logos/partners/smartt.svg"
                 height={150}
                 width={200}
                 alt="Logo"
               />
          </li>
          <li>
          <Image
                 priority
                 src="/images/logos/partners/ctd.svg"
                 height={150}
                 width={200}
                 alt="Logo"
               />
          </li>
          <li>
          <Image
                 priority
                 src="/images/logos/partners/columbia.svg"
                 height={150}
                 width={200}
                 alt="Logo"
               />
         </li>
          <li>
          <Image
                 priority
                 src="/images/logos/partners/kwc.svg"
                 height={150}
                 width={200}
                 alt="Logo"
               />
         </li>
        </ul>
      </div>

      <div className={utilStyles.caseStudiesContainer}>
          <h1>Case Studies</h1>
          <div className={utilStyles.caseStudies}>
            <a className={utilStyles.caseStudy} href="/case-studies/ui-mwo-product-pages">
              <h3>UI for MWO Product Pages</h3>
            </a>
            <a className={utilStyles.caseStudy} href="/case-studies/branding-mechcon">
              <h3>Branding for Mech_Con</h3>
            </a>
          </div>
      </div>

      <div className={utilStyles.aboutMeContainer}>
      <h1>About</h1>
      <div className={utilStyles.aboutMe}>
      
      <div className={utilStyles.aboutMeImgContainer}>
      <div className={utilStyles.aboutMeImg}></div>
      </div>
    
 

        <div className={utilStyles.aboutMeDescipt}>
          <h2 className={utilStyles.aboutMeHeadline}>Love of Design & being creative </h2>
            <p className={utilStyles.aboutMeSummary}>I’ve always sketched and coloured from when I was small. Being creative is something I find innate. 
              My 17 year design journey has allowed me to wear many hats concurrently, making me a versatile designer
               with an eye for layout and identity mixed in with technical acumen through the lens of a user centered philosophy. </p>
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

   
    <div className={utilStyles.galleryMenuConatiner}>
      <h1>Galleries</h1>
        <nav className={utilStyles.mainMenuParent}>
        <a className={utilStyles.mainMenu} href="/ui">UI / Web</a>
          <a className={utilStyles.mainMenu} href="/logos">Logos</a>
          <a className={utilStyles.mainMenu} href="/branding">Branding</a>
          <a className={utilStyles.mainMenu} href="/print">Print</a>
          <a className={utilStyles.mainMenu} href="/icons">Icons</a>
          
          <a className={utilStyles.mainMenu} href="/animation">Animation</a>

          <a className={utilStyles.mainMenu} href="/illustration">Illustration</a>
          
         
        </nav>
        </div>
        </div>
        
      </section>
    </Layout>
  );
}


