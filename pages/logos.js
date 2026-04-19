import PortfolioItem from '@/components/PortfolioItem';
import PortfolioGalleryTemplate from '@/components/PortfolioGalleryTemplate';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'logos-images.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const imageData = JSON.parse(fileContent);

  return {
    props: {
      imageData,
    },
  };
}

export default function Logos({ imageData }) {
  const {
    tryPaud,
    kirkwoodCarpentry,
    mw5Clans,
    solarisShowdown,
    mwoLegends,
    "theDevil'sGambit": theDevilsGambit,
    riseOfRasalhague,
    legendOfTheKestrelLancers,
    mw5Mercenaries,
  } = imageData;
  return (
    <PortfolioGalleryTemplate
      title="Logos"
      description="Marks, monograms, and logotypes spanning games, DLC, clients, and personal work."
    >
      <PortfolioItem
        date="2024"
        title="Mechwarrior 5 Clans"
        launchUrl="https://mw5clans.com/"
        description="Design / Development / Art Direction"
        images={mw5Clans}
      />

      <PortfolioItem
        date="2025"
        title="KirkWood Carpentry"
        description="Design / Development / Art Direction"
        images={kirkwoodCarpentry}
      />

      <PortfolioItem
        date="2025"
        title="TryPaud"
        description="Design / Development / Art Direction"
        images={tryPaud}
      />

      <PortfolioItem
        date="2024"
        title="Solaris Showdown / MW5 DLC"
        launchUrl="https://mw5mercs.com/dlc/solaris-showdown"
        description="Design / Development / Art Direction"
        images={solarisShowdown}
      />

      <PortfolioItem
        date="2023"
        title="MechWarrior Online Legends"
        launchUrl="https://mwomercs.com/"
        description="Design / Development / Art Direction"
        images={mwoLegends}
      />

      <PortfolioItem
        date="2023"
        title="The Dragons Gambit (MW5 DLC)"
        launchUrl="https://mw5mercs.com/dlc/the-dragons-gambit"
        description="Design / Development / Art Direction"
        images={theDevilsGambit}
      />

      <PortfolioItem
        date="2022"
        title="Rise of Rasalhague (MW5 DLC)"
        launchUrl="https://mw5mercs.com/dlc/rise-of-rasalhague"
        description="Design / Development / Art Direction"
        images={riseOfRasalhague}
      />

      <PortfolioItem
        date="2021"
        title="Legends of the Kestrel Lancers (MW5 DLC)"
        launchUrl="https://mw5mercs.com/dlc/legend-of-the-kestrel-lancers"
        description="Design / Development / Art Direction"
        images={legendOfTheKestrelLancers}
      />

      <PortfolioItem
        date="2020"
        title="Heroes of the Innersphere (MW5 DLC)"
        launchUrl="https://mw5mercs.com/dlc/heroes-of-the-inner-sphere"
        description="Design / Development / Art Direction"
        images={['/images/logos/hotis-logo-example.webp']}
      />

      <PortfolioItem
        date="2020"
        title="Project Revenant"
        description="Design / Development / Art Direction"
        images={['/images/logos/pr-logo-example.webp']}
      />

      <PortfolioItem
        date="2019"
        title="MechWarrior 5"
        launchUrl="https://mw5mercs.com"
        description="Design / Development / Art Direction"
        images={mw5Mercenaries}
      />

      <PortfolioItem
        date="2018"
        title="MechCon"
        launchUrl="https://mechwarrior.com/mechcon"
        description="Design / Development / Art Direction"
        images={['/images/logos/mc-logo-example.webp']}
      />

      <PortfolioItem
        date="2012"
        title="Colombia College"
        launchUrl="https://www.columbiacollege.ca/"
        description="Design / Development / Art Direction"
        images={['/images/logos/cc-logo-example.webp']}
      />

      <PortfolioItem
        date="2012"
        title="Smartt"
        launchUrl="https://www.smartt.com/"
        description="Design / Development / Art Direction"
        images={['/images/logos/smartt-logo-example.webp']}
      />

      <PortfolioItem
        date="2011"
        title="Connect the doc"
        launchUrl="https://www.connectthedoc.com/"
        description="Design / Development"
        images={['/images/logos/ctd-logo-example.webp']}
      />
    </PortfolioGalleryTemplate>
  );
}
