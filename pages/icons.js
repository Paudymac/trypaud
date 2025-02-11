import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';
import BackgroundImage from '../components/backgroundImage';
import styles from '../components/backgroundImage.module.css';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  // Define the path to the JSON file
  const filePath = path.join(process.cwd(), 'public', 'icons-mwo.json');
  // Read the JSON file
  const fileContent = fs.readFileSync(filePath, 'utf8');
  // Parse the JSON data
  const iconsData = JSON.parse(fileContent);

  // Map filenames to their public URLs
 const images = iconsData.map((filename) => `/images/icons/mwo/${filename}`);

  return {
    props: {
      images,
    },
  };
}

export default function Icons({ images }) {
  return (
    <Layout home>
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Icons</h1>

        {/* Dynamically render icons */}
         <span className={utilStyles.datePortfolio}>2014 - 2024</span>
        <h3 className={utilStyles.header3Portfolio}>MWO PLayer Icons</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Art Direction ]</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {images.map((image, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <img
                src={image}
                alt={`Icon ${index}`}
                style={{ width: '120px', height: '120px' }}
              />
              {/* <p>{image.split('/').pop()}</p>  Display the filename */}
            </div>
          ))}
        </div>
        
        <br />
        <br />

        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>MW5:Clans Icon</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/icons/mw5-clans-icon.webp"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>

        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>Solaris Icon</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/icons/mw5-dlc6-icon.webp"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>


        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>The Dragons Gambit Dragon</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/icons/mw5-dlc5-icon.webp"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>

        <span className={utilStyles.datePortfolio}>2022</span>
        <h3 className={utilStyles.header3Portfolio}>Rise of Rasalhague Serpent</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/icons/mw5-dlc4-icon.webp"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>
        
        
        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>MWO Atlas Icon</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

         <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/icons/mwo-icon.webp"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>

        
        <span className={utilStyles.datePortfolio}>2021</span>
        <h3 className={utilStyles.header3Portfolio}>Legends of the Kestrel Lancers Bird</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/icons/mw5-dlc2-icon.webp"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>


        <span className={utilStyles.datePortfolio}>2019</span>
        <h3 className={utilStyles.header3Portfolio}>MW5</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>


         <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/icons/mw5-icon.webp"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>



        <span className={utilStyles.datePortfolio}>2012</span>
        <h3 className={utilStyles.header3Portfolio}>Smartt A</h3>
        <p className={utilStyles.descriptionPortfolio}>Smartt [ Design / Development / Art Direction ]</p>


        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/icons/smartt-icon.webp"
        paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div>

        </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}

