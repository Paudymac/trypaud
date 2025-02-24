import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section >
        
      <div className={utilStyles.partnerLogosContainer}>
        <h1>Partners</h1>
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

      <div className={utilStyles.aboutMeContainer}>
      <h1>TryPaud</h1>
      <div className={utilStyles.aboutMe}>
      
      <div className={utilStyles.aboutMeImgContainer}>
      <div className={utilStyles.aboutMeImg}></div>
      </div>
    
 

        <div className={utilStyles.aboutMeDescipt}>
          <h2 className={utilStyles.aboutMeHeadline}>design love, sharing ideas & being creative </h2>
            <p className={utilStyles.aboutMeSummary}>I’ve always sketched and coloured from when I was small. Being creative is something I find innate. 
              My 17 year design journey has allowed me to wear many hats concurrently, making me a versatile designer
               with an eye for layout and identity mixed in with technical acumen through the lens of a user centered philosophy. </p>
        </div>

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
        
        
      </section>
    </Layout>
  );
}


