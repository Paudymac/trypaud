import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import BackgroundImage from '../components/backgroundImage';
import styles from '../components/backgroundImage.module.css';
import ImageCarousel from '../components/ImageCarousel';

 const images = [
    "/images/ui/mw5-clans-homepage.webp",
    "/images/ui/mw5-clans-news.webp",
    "/images/ui/mw5-clans-dlc.webp",
    "/images/ui/mw5-clans-purchase.webp",
  ];

 const images1 = [
    "/images/ui/mw5-mercs-homepage.webp",
    "/images/ui/mw5-mercs-dlc1.webp",
    "/images/ui/mw5-mercs-dlc2.webp",
    "/images/ui/mw5-mercs-media.webp",
  ];

 const images2 = [
    "/images/ui/mechcon-homepage.webp",
    "/images/ui/mechcon-about.webp",
    "/images/ui/mechcon-tickets.webp",
  ];

  const images3 = [
    "/images/ui/mwo-product-page1.webp",
    "/images/ui/mwo-product-page2.webp",
    "/images/ui/mwo-product-page3.webp",
    "/images/ui/mwo-product-page4.webp",
    "/images/ui/mwo-product-page5.webp",
    "/images/ui/mwo-product-page6.webp",
    "/images/ui/mwo-product-page7.webp",
  ];

  const images4 = [
    "/images/ui/pgi-homepage.webp",
    "/images/ui/pgi-studio.webp",
    "/images/ui/pgi-careers.webp",
  ];

  const images5 = [
    "/images/ui/transverse-homepage.webp",
    "/images/ui/transverse-about.webp",
    "/images/ui/transverse-product.webp",
    "/images/ui/transverse-checkout.webp",
    "/images/ui/transverse-social.webp",
  ];

export default function Websites({  }) {
  return (
    <Layout home>
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>UI / Web</h1> 


        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>Mechwarrior 5:Clans <a className={utilStyles.launch} href="https://mw5clans.com">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <a className={styles.imageLink} href="https://mw5clans.com">
        <ImageCarousel images={images} />
        </a>



        <span className={utilStyles.datePortfolio}>2021</span>
        <h3 className={utilStyles.header3Portfolio}>Mechwarrior 5:Mercs <a className={utilStyles.launch} href="https://mw5mercs.com">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <a className={styles.imageLink} href="https://mw5mercs.com">
        <ImageCarousel images={images1} />
        </a>

        <span className={utilStyles.datePortfolio}>2018</span>
        <h3 className={utilStyles.header3Portfolio}>Mechcon <a className={utilStyles.launch} href="https://mechwarrior.com/mechcon">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <a className={styles.imageLink} href="https://mechwarrior.com/mechcon">
        <ImageCarousel images={images2} />
        </a>
       

        <span className={utilStyles.datePortfolio}>2013 - 2024</span>
        <h3 className={utilStyles.header3Portfolio}>MWO Product Pages</h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <a className={styles.imageLink} href="https://mwomercs.com/store">
        <ImageCarousel images={images3} />
        </a>


        <span className={utilStyles.datePortfolio}>2017</span>
        <h3 className={utilStyles.header3Portfolio}>Piranha Games <a className={utilStyles.launch} href="https://piranhagames.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <a className={styles.imageLink} href="https://piranhagames.com/">
        <ImageCarousel images={images4} />
        </a>

            
        <span className={utilStyles.datePortfolio}>2014</span>
        <h3 className={utilStyles.header3Portfolio}>Transverse [Crowd Funding Site]</h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        

        <div className={styles.imageBg}>
        <ImageCarousel images={images5} />
        </div>

        <span className={utilStyles.datePortfolio}>2012</span>
        <h3 className={utilStyles.header3Portfolio}>Connect the doc <a className={utilStyles.launch} href="https://connectthedoc.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>

         <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/ui/ctd-img1.webp"
        paddingBottom= "50%"
        />
        </div>

         <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/ui/ctd-img2.webp"
        paddingBottom= "50%"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/ui/ctd-img3.webp"
        paddingBottom= "50%"
        />
        </div>

        <span className={utilStyles.datePortfolio}>2009</span>
        <h3 className={utilStyles.header3Portfolio}>Blackberry</h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Animation]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/ui/bb-img1.webp"
        paddingBottom= "50%"
        />
        </div>

         <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/ui/bb-img2.webp"
        paddingBottom= "50%"
        />
        </div>

        <span className={utilStyles.datePortfolio}>2008</span>
        <h3 className={utilStyles.header3Portfolio}>Head & Shoulders</h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Animation]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/ui/hs-img1.webp"
        paddingBottom= "50%"
        />
        </div>

          <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/ui/hs-img2.webp"
        paddingBottom= "50%"
        />
        </div>
        
        
      </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}
