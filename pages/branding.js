import BackgroundImage from '@/components/BackgroundImage';
import styles from '@/components/backgroundImage.module.css';
import ImageCarousel from '@/components/ImageCarousel';
import PortfolioItem from '@/components/PortfolioItem';
import PortfolioGalleryTemplate from '@/components/PortfolioGalleryTemplate';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'branding-images.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const imageData = JSON.parse(fileContent);

  return {
    props: {
      imageData,
    },
  };
}

export default function Branding({ imageData }) {
  const {
    mw5DevTee,
    clansGameManual,
    mercsGameManual,
    technicalManual,
    columbiaBrandGuidelines,
  } = imageData;
  return (
    <PortfolioGalleryTemplate title="Branding">

        <PortfolioItem
          date="2024"
          title="MW5:Clans Game Manual"
          description="[ Design / Development ]"
        >
          <div className={styles.imageBg}>
            <ImageCarousel images={clansGameManual} />
          </div>
        </PortfolioItem>

        {/* <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>MW5:Clans Technical Read Out</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development ]</p>

        <div className={styles.imageBg}>
        <BackgroundImage 
        imageUrl="/images/branding/tro-digital-extras.webp"
        // paddingBottom= "52%"
        backgroundPositionY="center"
        />
        </div> */}

        <PortfolioItem
          date="2021"
          title="MW5:Mercs Game Manual"
          description="[ Design / Development / Art Direction ]"
        >
          <div className={styles.imageBg}>
            <ImageCarousel images={mercsGameManual} />
          </div>
        </PortfolioItem>

        <PortfolioItem
          date="2021"
          title="MW5:Mercs Technical Manual"
          description="[ Design / Development / Art Direction ]"
        >
          <div className={styles.imageBg}>
            <ImageCarousel images={technicalManual} />
          </div>
        </PortfolioItem>

        <PortfolioItem
          date="2020"
          title="Mechwarrior 5: Mercenaries Tee's"
          description="[ Design / Print / Art Direction ]"
        >
          <div className={styles.imageBg}>
            <ImageCarousel images={mw5DevTee} />
          </div>
        </PortfolioItem>

        <PortfolioItem
          date="2018"
          title="Mechwarrior 5: Mercenaries Classic Box"
          description="[ Design / Print ]"
        >
          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/branding/mw5-box-art.webp"
              paddingBottom="50%"
              backgroundPositionY="center"
            />
          </div>
        </PortfolioItem>

        <PortfolioItem
          date="2016 - 2018"
          title="Mechcon Event"
          description="[ Design / Print ]"
        >
          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2018-img1.webp"
              paddingBottom="100%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2018-img2.webp"
              paddingBottom="25%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2018-img3.webp"
              paddingBottom="100%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2018-img4.webp"
              paddingBottom="120%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2018-img5.webp"
              paddingBottom="80%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2018-img6.webp"
              paddingBottom="20%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2018-img7.webp"
              paddingBottom="70%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2017-img1.webp"
              paddingBottom="30%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2017-img2.webp"
              paddingBottom="37%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2017-img3.webp"
              paddingBottom="40%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2017-img4.webp"
              paddingBottom="50%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2017-img5.webp"
              paddingBottom="50%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2017-img6.webp"
              paddingBottom="50%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2017-img7.webp"
              paddingBottom="50%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2017-img8.webp"
              paddingBottom="60%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2016-img1.webp"
              paddingBottom="40%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/print/mechcon-2016-img2.webp"
              paddingBottom="40%"
              backgroundPositionY="center"
            />
          </div>
        </PortfolioItem>

        <PortfolioItem
          date="2012"
          title="Columbia College Brand Guide"
          description="[ Design / Development / Art Direction ]"
        >
          <div className={styles.imageBg}>
            <ImageCarousel images={columbiaBrandGuidelines} />
          </div>
        </PortfolioItem>

        <PortfolioItem
          date="2012"
          title="Sierra Wireless Ad"
          description="[ Design / Development / Art Direction ]"
        >
          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/branding/sierra-wireless-ad.webp"
              paddingBottom="140%"
              backgroundPositionY="center"
            />
          </div>
        </PortfolioItem>

        <PortfolioItem
          date="2012"
          title="Smartt Branding"
          description="[ Design / Development / Art Direction ]"
        >
          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/branding/Styleguide_PM_V6_Page_01.webp"
              paddingBottom="77%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/branding/Styleguide_PM_V6_Page_04.webp"
              paddingBottom="77%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/branding/Styleguide_PM_V6_Page_07.webp"
              paddingBottom="77%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/branding/smartt-folder-front.webp"
              // paddingBottom= "77%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/branding/smartt-folder.webp"
              paddingBottom="40%"
              backgroundPositionY="center"
            />
          </div>

          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/branding/smartt-ad.webp"
              paddingBottom="143%"
              backgroundPositionY="center"
            />
          </div>
        </PortfolioItem>
    </PortfolioGalleryTemplate>
  );
}
