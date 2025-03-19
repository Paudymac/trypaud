import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import BackgroundImage from '../components/backgroundImage';
import styles from '../components/backgroundImage.module.css';
import ImageCarousel from '../components/ImageCarousel';

const images = [
  "/images/logos/trypaud-colour-logo-example.webp",
  "/images/logos/trypaud-black-logo-example.webp",
];

const images1 = [
  "/images/logos/kwc-logo-colour-example.webp",
  "/images/logos/kwc-logo-longform-colour-example.webp",
];

const images2 = [
  "/images/logos/mw5-clans-logo-example.webp",
  "/images/icons/mw5-clans-icon.webp",
];

const images3 = [
  "/images/logos/ss-logo-example.webp",
  "/images/icons/mw5-dlc6-icon.webp",
];

const images4 = [
  "/images/logos/mwol-logo-example.webp",
  "/images/icons/mwo-icon.webp",
];

const images5 = [
  "/images/logos/tdg-logo-example.webp",
  "/images/icons/mw5-dlc5-icon.webp",
];

const images6 = [
  "/images/logos/ror-logo-example.webp",
  "/images/icons/mw5-dlc4-icon.webp",
];

const images7 = [
  "/images/logos/lotkl-logo-example.webp",
  "/images/icons/mw5-dlc2-icon.webp",
];

const images8 = [
  "/images/logos/mw5-logo-example.webp",
  "/images/icons/mw5-icon.webp",
];

export default function Logos({ allPostsData }) {
  return (
    <Layout>
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Logos</h1>

      

        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>Mechwarrior 5 Clans <a className={utilStyles.launch} href="https://mw5clans.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <a className={styles.imageLink} href="https://mw5clans.com">
        <ImageCarousel images={images2} />
       </a>

        <span className={utilStyles.datePortfolio}>2025</span>
        <h3 className={utilStyles.header3Portfolio}>KirkWood Carpentry</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <div className={styles.imageBg}>
        <ImageCarousel images={images1} />
        </div>

        <span className={utilStyles.datePortfolio}>2025</span>
        <h3 className={utilStyles.header3Portfolio}>TryPaud</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <div className={styles.imageBg}>
        <ImageCarousel images={images} />
        </div>

       

       

        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>Solaris Showdown / MW5 DLC <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/solaris-showdown">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ] </p>


        <a className={styles.imageLink} href="https://mw5mercs.com/dlc/solaris-showdown">
        <ImageCarousel images={images3} />
        </a>

        
        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>MechWarrior Online Legends <a className={utilStyles.launch} href="https://mwomercs.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://mwomercs.com/">
        <ImageCarousel images={images4} />
        </a>


        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>The Dragons Gambit (MW5 DLC)<a className={utilStyles.launch} href="https://mw5mercs.com/dlc/the-dragons-gambit">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        
        <a className={styles.imageLink} href="https://mw5mercs.com/dlc/the-dragons-gambit">
        <ImageCarousel images={images5} />
        </a>

        <span className={utilStyles.datePortfolio}>2022</span>
        <h3 className={utilStyles.header3Portfolio}>Rise of Rasalhague (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/rise-of-rasalhague">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://mw5mercs.com/dlc/rise-of-rasalhague">
        <ImageCarousel images={images6} />
        </a>


        <span className={utilStyles.datePortfolio}>2021</span>
        <h3 className={utilStyles.header3Portfolio}>Legends of the Kestrel Lancers (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/legend-of-the-kestrel-lancers">
        Launch</a>
        </h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://mw5mercs.com/dlc/legend-of-the-kestrel-lancers">
        <ImageCarousel images={images7} />
        </a>

        <span className={utilStyles.datePortfolio}>2020</span>
        <h3 className={utilStyles.header3Portfolio}>Heroes of the Innersphere (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/heroes-of-the-inner-sphere">Launch</a>
        </h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://mw5mercs.com/dlc/heroes-of-the-inner-sphere"><BackgroundImage 
        imageUrl="/images/logos/hotis-logo-example.webp"
        paddingBottom= "56.25%"
        backgroundPositionY="center"
        /></a>


        <span className={utilStyles.datePortfolio}>2020</span>
        <h3 className={utilStyles.header3Portfolio}>Project Revenant</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/logos/pr-logo-example.webp"
        paddingBottom= "56.25%"
        backgroundPositionY="center"
        />
        </div>


        <span className={utilStyles.datePortfolio}>2019</span>
        <h3 className={utilStyles.header3Portfolio}>MechWarrior 5 <a className={utilStyles.launch} href="https://mw5mercs.com">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>


        <a className={styles.imageLink} href="https://mw5mercs.com">
        <ImageCarousel images={images8} />
        </a>


        <span className={utilStyles.datePortfolio}>2018</span>
        <h3 className={utilStyles.header3Portfolio}>MechCon <a className={utilStyles.launch} href="https://mechwarrior.com/mechcon">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://mechwarrior.com/mechcon"><BackgroundImage 
        imageUrl="/images/logos/mc-logo-example.webp"
        paddingBottom= "56.25%"
        backgroundPositionY="center"
        /></a>


        <span className={utilStyles.datePortfolio}>2012</span>
        <h3 className={utilStyles.header3Portfolio}>Colombia College <a className={utilStyles.launch} href="https://www.columbiacollege.ca/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://www.columbiacollege.ca/"><BackgroundImage 
        imageUrl="/images/logos/cc-logo-example.webp"
        paddingBottom= "56.25%"
        backgroundPositionY="center"
        /></a>


        <span className={utilStyles.datePortfolio}>2012</span>
        <h3 className={utilStyles.header3Portfolio}>Smartt <a className={utilStyles.launch} href="https://www.smartt.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <a className={styles.imageLink} href="https://www.smartt.com/"><BackgroundImage 
        imageUrl="/images/logos/smartt-logo-example.webp"
        paddingBottom= "56.25%"
        backgroundPositionY="center"
        /></a>

        <span className={utilStyles.datePortfolio}>2011</span>
        <h3 className={utilStyles.header3Portfolio}>Connect the doc <a className={utilStyles.launch} href="https://www.connectthedoc.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development ]</p>

        <a className={styles.imageLink} href="https://www.connectthedoc.com/"><BackgroundImage 
        imageUrl="/images/logos/ctd-logo-example.webp"
        paddingBottom= "56.25%"
        backgroundPositionY="center"
        /></a>

        </section>
      </Layout>
    );
}

