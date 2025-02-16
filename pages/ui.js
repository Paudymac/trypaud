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
        <a className={styles.imageLink} href="https://mw5mercs.com"><BackgroundImage 
        imageUrl="/images/ui/mw5-site-example.webp"
        paddingBottom= "100%"
        /> </a>

        <span className={utilStyles.datePortfolio}>2018</span>
        <h3 className={utilStyles.header3Portfolio}>Mechcon <a className={utilStyles.launch} href="https://mechwarrior.com/mechcon">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
         <a className={styles.imageLink} href="https://mechwarrior.com/mechcon"><BackgroundImage 
        imageUrl="/images/ui/mechcon-site-example.webp"
        paddingBottom= "100%"
        /> </a>
       

        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>MWO Product Pages</h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>

        <h4>Black Hawk Ku<a className={utilStyles.launch} href="https://mwomercs.com/packages/black-hawk-ku">Launch</a></h4>
        <a className={styles.imageLink} href="https://mwomercs.com/packages/black-hawk-ku"><BackgroundImage 
        imageUrl="/images/ui/mwomercs-black-hawk-ku.webp"
        paddingBottom= "100%"
        /> </a>


        <h4>Bullshark <a className={utilStyles.launch} href="https://mwomercs.com/bullshark">Launch</a></h4>
        <a className={styles.imageLink} href="https://mwomercs.com/bullshark"><BackgroundImage 
        imageUrl="/images/ui/mwomercs-bullshark.webp"
        paddingBottom= "100%"
        /> </a>


        <h4>Stone Rhino <a className={utilStyles.launch} href="https://mwomercs.com/stone-rhino">Launch</a></h4>
        <a className={styles.imageLink} href="https://mwomercs.com/stone-rhino"><BackgroundImage 
        imageUrl="/images/ui/mwomercs-stone-rhino.webp"
        paddingBottom= "100%"
        /> </a>
       
        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>MWO Legends Spitfire <a className={utilStyles.launch} href="https://mwomercs.com/legends/spitfire">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <a className={styles.imageLink} href="https://mwomercs.com/legends/spitfire"><BackgroundImage 
        imageUrl="/images/ui/mwomercs-legends-spitfire.webp"
        paddingBottom= "100%"
        /> </a>


        <span className={utilStyles.datePortfolio}>2017</span>
        <h3 className={utilStyles.header3Portfolio}>Piranha Games <a className={utilStyles.launch} href="https://piranhagames.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <a className={styles.imageLink} href="https://piranhagames.com/"><BackgroundImage 
        imageUrl="/images/ui/piranhagames-site-example.webp"
        paddingBottom= "100%"
        /> </a>

            
        <span className={utilStyles.datePortfolio}>2014</span>
        <h3 className={utilStyles.header3Portfolio}>Transverse [Crowd Funding Site]</h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/ui/transverse-hp.webp"
        paddingBottom= "100%"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/ui/transverse-funding.webp"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/ui/transverse-product.webp"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/ui/transverse-checkout.webp"
        />
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


        <span className={utilStyles.datePortfolio}>2011</span>
        <h3 className={utilStyles.header3Portfolio}>ZLC <a className={utilStyles.launch} href="https://www.zlc.net/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>

         <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/ui/zlc-img1.webp"
        paddingBottom= "50%"
        />
        </div>

         <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/ui/zlc-img2.webp"
        paddingBottom= "50%"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/ui/zlc-img3.webp"
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
