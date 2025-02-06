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
        <h1>Print</h1>
      

        <span className={utilStyles.datePortfolio}>2016 - 2018</span>
        <h3 className={utilStyles.header3Portfolio}>Mechcon Event</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Print ]</p>

         <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2018-img1.webp"
        paddingBottom= "100%"
        backgroundPositionY="center"
        />
        </div>

         <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2018-img2.webp"
        paddingBottom= "25%"
        backgroundPositionY="center"
        />
        </div>

         <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2018-img3.webp"
        paddingBottom= "100%"
        backgroundPositionY="center"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2018-img4.webp"
        paddingBottom= "120%"
        backgroundPositionY="center"
        />
        </div>


        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2018-img5.webp"
        paddingBottom= "80%"
        backgroundPositionY="center"
        />
        </div>

                <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2018-img6.webp"
        paddingBottom= "20%"
        backgroundPositionY="center"
        />
        </div>


        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2018-img7.webp"
        paddingBottom= "70%"
        backgroundPositionY="center"
        />
        </div>

        
        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2017-img1.webp"
        paddingBottom= "30%"
        backgroundPositionY="center"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2017-img2.webp"
        paddingBottom= "37%"
        backgroundPositionY="center"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2017-img3.webp"
        paddingBottom= "40%"
        backgroundPositionY="center"
        />
        </div>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2017-img4.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        />
        </div>

                <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2017-img5.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        />
        </div>

                        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2017-img6.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        />
        </div>


                        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2017-img7.webp"
        paddingBottom= "50%"
        backgroundPositionY="center"
        />
        </div>

                                <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2017-img8.webp"
        paddingBottom= "60%"
        backgroundPositionY="center"
        />
        </div>
        

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2016-img1.webp"
        paddingBottom= "40%"
        backgroundPositionY="center"
        />
        </div>

                <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/print/mechcon-2016-img2.webp"
        paddingBottom= "40%"
        backgroundPositionY="center"
        />
        </div>
       
        </section>

       <a href="/">&larr; home</a>
      </Layout>
    );
}

