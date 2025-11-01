import BackgroundImage from '@/components/BackgroundImage';
import styles from '@/components/backgroundImage.module.css';
import ImageCarousel from '@/components/ImageCarousel';
import PortfolioItem from '@/components/PortfolioItem';
import PortfolioGalleryTemplate from '@/components/PortfolioGalleryTemplate';

const images = [
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-edit-ibrahim.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-noedit-ibrahim.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-edit-leo-only.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-noedit-leo-only.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-edit-mia-only.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-noedit-mia-only.webp',
];

export default function Illustration() {
  return (
    <PortfolioGalleryTemplate title="Illustration">

        <PortfolioItem
          date="2025"
          title="MechWarrior 5 Clans Art"
          description="[ Design ]"
        >
          <div className={styles.imageBg}>
            <ImageCarousel images={images} />
          </div>
        </PortfolioItem>

        <PortfolioItem
          date="2024"
          title="MechWarrior 5 Clans DLC Art"
          launchUrl="https://mw5clans.com/dlc/trials-of-war"
          description="[ Design / Art Direction ]"
        >
          <a
            className={styles.imageLink}
            href="https://mw5clans.com/dlc/trials-of-war"
          >
            <BackgroundImage imageUrl="/images/illustration/MW5C_TOW_KA_16x9.jpg" />
          </a>
        </PortfolioItem>

        <PortfolioItem
          date="2023"
          title="MWO Legends Art"
          description="[ Design / Art Direction ]"
        >
          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/illustration/mwo-legends-art-atlas.webp"
              paddingBottom="50%"
              backgroundPositionY="center"
            />
          </div>
        </PortfolioItem>

        <PortfolioItem
          date="2021"
          title="Xmas Card"
          description="[ Design / Art Direction ]"
        >
          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/illustration/xmas-card-2.webp"
              paddingBottom="120%"
              backgroundPositionY="center"
            />
          </div>
        </PortfolioItem>

        <PortfolioItem
          date="2020"
          title="MW5 Mercs Dev Tee"
          description="[ Design / Art Direction ]"
        >
          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/illustration/mw5mercs-tee-design.webp"
              backgroundPositionY="center"
            />
          </div>
        </PortfolioItem>

        <PortfolioItem
          date="2020"
          title="Xmas Card"
          description="[ Design / Art Direction ]"
        >
          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/illustration/xmas-card-1.webp"
              paddingBottom="73%"
              backgroundPositionY="center"
            />
          </div>
        </PortfolioItem>

        <PortfolioItem
          date="2018"
          title="MechWarrior 5 Branding Illustration"
          description="[ Design / Art Direction ]"
        >
          <div className={styles.imageBg}>
            <BackgroundImage
              imageUrl="/images/illustration/vector-art-mw5.svg"
              paddingBottom="61%"
              backgroundPositionY="center"
            />
          </div>
        </PortfolioItem>
    </PortfolioGalleryTemplate>
  );
}
