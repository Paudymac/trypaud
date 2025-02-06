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
        <h1>Illustration</h1>

        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>MechWarrior 5 Clans DLC Art <a className={utilStyles.launch} href="https://mw5clans.com/dlc/trials-of-war">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Art Direction ]</p>

         <a className={styles.imageLink} href="https://mw5clans.com/dlc/trials-of-war"><BackgroundImage 
        imageUrl="/images/illustration/MW5C_TOW_KA_16x9.jpg"
        /> </a>

       
        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>MWO Legends Art</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Art Direction ]</p>

         <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/illustration/art-legends.jpg"
        paddingBottom= "50%"
        backgroundPositionY="center"
        />
        </div>
        

        <span className={utilStyles.datePortfolio}>2021</span>
        <h3 className={utilStyles.header3Portfolio}> Xmas Card</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Art Direction ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/illustration/xmas-card-2.jpg"
        paddingBottom= "100%"
        backgroundPositionY="center"
        />
        </div>


        <span className={utilStyles.datePortfolio}>2020</span>
        <h3 className={utilStyles.header3Portfolio}> Xmas Card</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Art Direction ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/illustration/xmas-card-1.jpg"
        paddingBottom= "70%"
        backgroundPositionY="center"
        />
        </div>
        
         <span className={utilStyles.datePortfolio}>2018</span>
        <h3 className={utilStyles.header3Portfolio}>MechWarrior 5 Branding Illustration</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Art Direction ]</p>


        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/illustration/vector-art-mw5.svg"
        paddingBottom= "61%"
        backgroundPositionY="center"
        />
        </div>
        
        </section>

        <a href="/">&larr; home</a>
      </Layout>
    );
}

