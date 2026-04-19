import Image from 'next/image';
import BackgroundImage from '@/components/BackgroundImage';
import styles from '@/components/backgroundImage.module.css';
import PortfolioItem from '@/components/PortfolioItem';
import PortfolioGalleryTemplate from '@/components/PortfolioGalleryTemplate';
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
    <PortfolioGalleryTemplate
      title="Icons"
      description="Glyph systems, player icons, and pictogram sets."
    >
      <PortfolioItem
        date="2014 - 2024"
        title="MWO Player Icons"
        description="[ Design / Art Direction ]"
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {images.map((image, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <Image
                src={image}
                alt={`Icon ${index}`}
                width={180}
                height={180}
              />
              {/* <p>{image.split('/').pop()}</p>  Display the filename */}
            </div>
          ))}
        </div>
      </PortfolioItem>

      <PortfolioItem
        date="2024"
        title="MW5:Clans Icon"
        description="[ Design / Development / Art Direction ]"
      >
        <div className={styles.imageBg}>
          <BackgroundImage
            imageUrl="/images/icons/mw5-clans-icon.webp"
            paddingBottom="56.25%"
            backgroundPositionY="center"
          />
        </div>
      </PortfolioItem>

      <PortfolioItem
        date="2024"
        title="Solaris Icon"
        description="[ Design / Development / Art Direction ]"
      >
        <div className={styles.imageBg}>
          <BackgroundImage
            imageUrl="/images/icons/mw5-dlc6-icon.webp"
            paddingBottom="56.25%"
            backgroundPositionY="center"
          />
        </div>
      </PortfolioItem>

      <PortfolioItem
        date="2023"
        title="The Dragons Gambit Dragon"
        description="[ Design / Development / Art Direction ]"
      >
        <div className={styles.imageBg}>
          <BackgroundImage
            imageUrl="/images/icons/mw5-dlc5-icon.webp"
            paddingBottom="56.25%"
            backgroundPositionY="center"
          />
        </div>
      </PortfolioItem>

      <PortfolioItem
        date="2022"
        title="Rise of Rasalhague Serpent"
        description="[ Design / Development / Art Direction ]"
      >
        <div className={styles.imageBg}>
          <BackgroundImage
            imageUrl="/images/icons/mw5-dlc4-icon.webp"
            paddingBottom="56.25%"
            backgroundPositionY="center"
          />
        </div>
      </PortfolioItem>

      <PortfolioItem
        date="2023"
        title="MWO Atlas Icon"
        description="[ Design / Development / Art Direction ]"
      >
        <div className={styles.imageBg}>
          <BackgroundImage
            imageUrl="/images/icons/mwo-icon.webp"
            paddingBottom="56.25%"
            backgroundPositionY="center"
          />
        </div>
      </PortfolioItem>

      <PortfolioItem
        date="2021"
        title="Legends of the Kestrel Lancers Bird"
        description="[ Design / Development / Art Direction ]"
      >
        <div className={styles.imageBg}>
          <BackgroundImage
            imageUrl="/images/icons/mw5-dlc2-icon.webp"
            paddingBottom="56.25%"
            backgroundPositionY="center"
          />
        </div>
      </PortfolioItem>

      <PortfolioItem
        date="2019"
        title="MW5"
        description="[ Design / Development / Art Direction ]"
      >
        <div className={styles.imageBg}>
          <BackgroundImage
            imageUrl="/images/icons/mw5-icon.webp"
            paddingBottom="56.25%"
            backgroundPositionY="center"
          />
        </div>
      </PortfolioItem>

      <PortfolioItem
        date="2012"
        title="Smartt A"
        description="Smartt [ Design / Development / Art Direction ]"
      >
        <div className={styles.imageBg}>
          <BackgroundImage
            imageUrl="/images/icons/smartt-icon.webp"
            paddingBottom="56.25%"
            backgroundPositionY="center"
          />
        </div>
      </PortfolioItem>
    </PortfolioGalleryTemplate>
  );
}
