import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import BackgroundImage from '../components/backgroundImage';
import styles from '../components/backgroundImage.module.css';


export default function Logos({ allPostsData }) {
  return (
    <Layout home>
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Branding</h1>
        <span className={utilStyles.datePortfolio}>2021</span>
        <h3 className={utilStyles.header3Portfolio}>MW5:Mercs Game Manual </h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/GameManual_v2_5_Page_01.jpg"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>

         <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/GameManual_v2_5_Page_04.jpg"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>

         <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/GameManual_v2_5_Page_08.jpg"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/GameManual_v2_5_Page_13.jpg"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>


        <span className={utilStyles.datePortfolio}>2021</span>
        <h3 className={utilStyles.header3Portfolio}>MW5:Mercs Technical Manual</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/technical-manual-2024-v01_Page_01.jpg"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/technical-manual-2024-v01_Page_02.jpg"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/technical-manual-2024-v01_Page_66.jpg"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>

        <span className={utilStyles.datePortfolio}>2018</span>
        <h3 className={utilStyles.header3Portfolio}>Mechwarrior 5: Mercenaries Classic Box</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Print ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/mw5-box-art.jpg"
        paddingBottom= "50%"
        backgroundPositionY="center"
        />
        </div>

        <span className={utilStyles.datePortfolio}>2012</span>
        <h3 className={utilStyles.header3Portfolio}>Columbia College Brand Guide</h3>
        <p className={utilStyles.descriptionPortfolio}>Smartt [ Design / Development / Art Direction ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/Columbia_College_Brand_Guidelines_Final_Page_01.jpg"
        paddingBottom= "77%"
        backgroundPositionY="center"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/Columbia_College_Brand_Guidelines_Final_Page_02.jpg"
        paddingBottom= "77%"
        backgroundPositionY="center"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/Columbia_College_Brand_Guidelines_Final_Page_04.jpg"
        paddingBottom= "77%"
        backgroundPositionY="center"
        />
        </div>


        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/Columbia_College_Brand_Guidelines_Final_Page_11.jpg"
        paddingBottom= "77%"
        backgroundPositionY="center"
        />
        </div>


        <span className={utilStyles.datePortfolio}>2012</span>
        <h3 className={utilStyles.header3Portfolio}>Sierra Wireless Ad</h3>
        <p className={utilStyles.descriptionPortfolio}>Smartt [ Design / Development / Art Direction ]</p>


        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/sierra-wireless-ad.jpg"
        paddingBottom= "140%"
        backgroundPositionY="center"
        />
        </div>

        <span className={utilStyles.datePortfolio}>2012</span>
        <h3 className={utilStyles.header3Portfolio}>Smartt Branding</h3>
        <p className={utilStyles.descriptionPortfolio}>[ Design / Development / Art Direction ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/Styleguide_PM_V6_Page_01.jpg"
        paddingBottom= "77%"
        backgroundPositionY="center"
        />
        </div>

                <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/Styleguide_PM_V6_Page_04.jpg"
        paddingBottom= "77%"
        backgroundPositionY="center"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/Styleguide_PM_V6_Page_07.jpg"
        paddingBottom= "77%"
        backgroundPositionY="center"
        />
        </div>

                <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/smartt-folder-front.jpg"
        // paddingBottom= "77%"
        backgroundPositionY="center"
        />
        </div>

                   <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/smartt-folder.jpg"
        paddingBottom= "40%"
        backgroundPositionY="center"
        />
        </div>

        
         <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/smartt-ad.jpg"
        paddingBottom= "143%"
        backgroundPositionY="center"
        />
        </div>

        </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}

