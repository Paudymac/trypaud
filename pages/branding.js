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

const mechconImages = [
  '/images/print/mechcon-2018-img1.webp',
  '/images/print/mechcon-2018-img2.webp',
  '/images/print/mechcon-2018-img3.webp',
  '/images/print/mechcon-2018-img4.webp',
  '/images/print/mechcon-2018-img5.webp',
  '/images/print/mechcon-2018-img6.webp',
  '/images/print/mechcon-2018-img7.webp',
  '/images/print/mechcon-2017-img1.webp',
  '/images/print/mechcon-2017-img2.webp',
  '/images/print/mechcon-2017-img3.webp',
  '/images/print/mechcon-2017-img4.webp',
  '/images/print/mechcon-2017-img5.webp',
  '/images/print/mechcon-2017-img6.webp',
  '/images/print/mechcon-2017-img7.webp',
  '/images/print/mechcon-2017-img8.webp',
  '/images/print/mechcon-2016-img1.webp',
  '/images/print/mechcon-2016-img2.webp',
];

const smarttImages = [
  '/images/branding/Styleguide_PM_V6_Page_01.webp',
  '/images/branding/Styleguide_PM_V6_Page_04.webp',
  '/images/branding/Styleguide_PM_V6_Page_07.webp',
  '/images/branding/smartt-folder-front.webp',
  '/images/branding/smartt-folder.webp',
  '/images/branding/smartt-ad.webp',
];

export default function Branding({ imageData }) {
  const {
    mw5DevTee,
    clansGameManual,
    mercsGameManual,
    technicalManual,
    columbiaBrandGuidelines,
  } = imageData;

  return (
    <PortfolioGalleryTemplate
      title="Branding"
      description="Identity systems, game manuals, event design and print collateral."
    >
      <PortfolioItem
        date="2024"
        title="MW5:Clans Game Manual"
        description="Design / Development"
        images={clansGameManual}
      />

      <PortfolioItem
        date="2021"
        title="MW5:Mercs Game Manual"
        description="Design / Development / Art Direction"
        images={mercsGameManual}
      />

      <PortfolioItem
        date="2021"
        title="MW5:Mercs Technical Manual"
        description="Design / Development / Art Direction"
        images={technicalManual}
      />

      <PortfolioItem
        date="2020"
        title="Mechwarrior 5: Mercenaries Tee's"
        description="Design / Print / Art Direction"
        images={mw5DevTee}
      />

      <PortfolioItem
        date="2018"
        title="Mechwarrior 5: Mercenaries Classic Box"
        description="Design / Print"
        images={['/images/branding/mw5-box-art.webp']}
      />

      <PortfolioItem
        date="2016 – 2018"
        title="Mechcon Event"
        description="Design / Print"
        images={mechconImages}
      />

      <PortfolioItem
        date="2012"
        title="Columbia College Brand Guide"
        description="Design / Development / Art Direction"
        images={columbiaBrandGuidelines}
      />

      <PortfolioItem
        date="2012"
        title="Sierra Wireless Ad"
        description="Design / Development / Art Direction"
        images={['/images/branding/sierra-wireless-ad.webp']}
      />

      <PortfolioItem
        date="2012"
        title="Smartt Branding"
        description="Design / Development / Art Direction"
        images={smarttImages}
      />
    </PortfolioGalleryTemplate>
  );
}
