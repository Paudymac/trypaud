import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import BackgroundImage from '../components/backgroundImage';
import styles from '../components/backgroundImage.module.css';
import ImageCarousel from '../components/ImageCarousel';

const images = [
  "/images/logos/trypaud-white-logo-example.webp",
  "/images/logos/trypaud-black-logo-example.webp",
];

const images1 = [
  "/images/logos/kwc-logo-white-example.webp",
  "/images/logos/kwc-logo-black-example.webp",
];

export default function Logos({ allPostsData }) {
  return (
    <Layout home>
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Logos</h1>

        <span className={utilStyles.datePortfolio}>2025</span>
        <h3 className={utilStyles.header3Portfolio}>KirkWood Carpentry <a className={utilStyles.launch} href="/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <div className={styles.imageBg}>
        <ImageCarousel images={images1} />
        </div>

        <span className={utilStyles.datePortfolio}>2025</span>
        <h3 className={utilStyles.header3Portfolio}>TryPaud <a className={utilStyles.launch} href="/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <div className={styles.imageBg}>
        <ImageCarousel images={images} />
        </div>


        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>Mechwarrior 5 Clans <a className={utilStyles.launch} href="https://mw5clans.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

       

        <a className={styles.imageLink} href="https://mw5clans.com"><BackgroundImage 
        imageUrl="/images/logos/mw5-clans-logo-example.webp"
        paddingBottom= "50%"
        backgroundPositionY="top"
        /> </a>

        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>Solaris Showdown / MW5 DLC <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/solaris-showdown">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ] </p>


        <a className={styles.imageLink} href="https://mw5mercs.com/dlc/solaris-showdown"><BackgroundImage 
        imageUrl="/images/logos/ss-logo-example.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        /></a>

        
        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>MechWarrior Online Legends <a className={utilStyles.launch} href="https://mwomercs.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://mwomercs.com/"><BackgroundImage 
        imageUrl="/images/logos/mwol-logo-example.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        /></a>


        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>The Dragons Gambit (MW5 DLC)<a className={utilStyles.launch} href="https://mw5mercs.com/dlc/the-dragons-gambit">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        
        <a className={styles.imageLink} href="https://mw5mercs.com/dlc/the-dragons-gambit"><BackgroundImage 
        imageUrl="/images/logos/tdg-logo-example.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        /></a>

        <span className={utilStyles.datePortfolio}>2022</span>
        <h3 className={utilStyles.header3Portfolio}>Rise of Rasalhague (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/rise-of-rasalhague">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://mw5mercs.com/dlc/rise-of-rasalhague"><BackgroundImage 
        imageUrl="/images/logos/ror-logo-example.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        /></a>

        <span className={utilStyles.datePortfolio}>2022</span>
        <h3 className={utilStyles.header3Portfolio}>Call to Arms (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/call-to-arms">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://mw5mercs.com/dlc/call-to-arms"><BackgroundImage 
        imageUrl="/images/logos/cta-logo-example.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        /></a>


        <span className={utilStyles.datePortfolio}>2021</span>
        <h3 className={utilStyles.header3Portfolio}>Legends of the Kestrel Lancers (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/legend-of-the-kestrel-lancers">
        Launch</a>
        </h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://mw5mercs.com/dlc/legend-of-the-kestrel-lancers"><BackgroundImage 
        imageUrl="/images/logos/lotkl-logo-example.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        /></a>

        <span className={utilStyles.datePortfolio}>2020</span>
        <h3 className={utilStyles.header3Portfolio}>Heroes of the Innersphere (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/heroes-of-the-inner-sphere">Launch</a>
        </h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://mw5mercs.com/dlc/heroes-of-the-inner-sphere"><BackgroundImage 
        imageUrl="/images/logos/hotis-logo-example.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        /></a>


        <span className={utilStyles.datePortfolio}>2020</span>
        <h3 className={utilStyles.header3Portfolio}>Project Revenant</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/logos/pr-logo-example.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        />
        </div>


        <span className={utilStyles.datePortfolio}>2019</span>
        <h3 className={utilStyles.header3Portfolio}>MechWarrior 5 <a className={utilStyles.launch} href="https://mw5mercs.com">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>


        <a className={styles.imageLink} href="https://mw5mercs.com"><BackgroundImage 
        imageUrl="/images/logos/mw5-logo-example.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        /></a>


        <span className={utilStyles.datePortfolio}>2018</span>
        <h3 className={utilStyles.header3Portfolio}>MechCon <a className={utilStyles.launch} href="https://mechwarrior.com/mechcon">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://mechwarrior.com/mechcon"><BackgroundImage 
        imageUrl="/images/logos/mc-logo-example.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        /></a>


        <span className={utilStyles.datePortfolio}>2012</span>
        <h3 className={utilStyles.header3Portfolio}>Colombia College <a className={utilStyles.launch} href="https://www.columbiacollege.ca/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://www.columbiacollege.ca/"><BackgroundImage 
        imageUrl="/images/logos/cc-logo-example.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        /></a>


        <span className={utilStyles.datePortfolio}>2012</span>
        <h3 className={utilStyles.header3Portfolio}>Smartt <a className={utilStyles.launch} href="https://www.smartt.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://www.smartt.com/"><BackgroundImage 
        imageUrl="/images/logos/smartt-logo-example.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        /></a>

        <span className={utilStyles.datePortfolio}>2011</span>
        <h3 className={utilStyles.header3Portfolio}>Connect the doc <a className={utilStyles.launch} href="https://www.connectthedoc.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development ]</p>

        <a className={styles.imageLink} href="https://www.connectthedoc.com/"><BackgroundImage 
        imageUrl="/images/logos/ctd-logo-example.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        /></a>

        </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}

