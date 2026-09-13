import PortfolioItem from '@/components/PortfolioItem';
import PortfolioGalleryTemplate from '@/components/PortfolioGalleryTemplate';

const clansArt = [
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-edit-ibrahim.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-noedit-ibrahim.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-edit-leo-only.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-noedit-leo-only.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-edit-mia-only.webp',
  '/images/illustration/MW5C_KA_16x9_v02_240717_Profile-noedit-mia-only.webp',
];

export default function Illustration() {
  return (
    <PortfolioGalleryTemplate
      title="Illustration"
      description="Hand-drawn work, painting, and concept art — from personal pieces to game key art."
    >
      <PortfolioItem
        date="2025"
        title="MechWarrior 5 Clans Art"
        description="Design"
        images={clansArt}
      />

      <PortfolioItem
        date="2024"
        title="MechWarrior 5 Clans DLC Art"
        launchUrl="https://mw5clans.com/dlc/trials-of-war"
        description="Design / Art Direction"
        images={['/images/illustration/MW5C_TOW_KA_16x9.jpg']}
      />

      <PortfolioItem
        date="2023"
        title="MWO Legends Art"
        description="Design / Art Direction"
        images={['/images/illustration/mwo-legends-art-atlas.webp']}
      />

      <PortfolioItem
        date="2021"
        title="Xmas Card"
        description="Design / Art Direction"
        images={['/images/illustration/xmas-card-2.webp']}
      />

      <PortfolioItem
        date="2020"
        title="MW5 Mercs Dev Tee"
        description="Design / Art Direction"
        images={['/images/illustration/mw5mercs-tee-design.webp']}
      />

      <PortfolioItem
        date="2020"
        title="Xmas Card"
        description="Design / Art Direction"
        images={['/images/illustration/xmas-card-1.webp']}
      />

      <PortfolioItem
        date="2018"
        title="MechWarrior 5 Branding Illustration"
        description="Design / Art Direction"
        images={['/images/illustration/vector-art-mw5.svg']}
      />
    </PortfolioGalleryTemplate>
  );
}
