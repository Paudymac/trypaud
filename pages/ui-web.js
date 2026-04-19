import PortfolioItem from '@/components/PortfolioItem';
import PortfolioGalleryTemplate from '@/components/PortfolioGalleryTemplate';

const mw5ClansImages = [
  '/images/ui/mw5-clans-homepage.webp',
  '/images/ui/mw5-clans-news.webp',
  '/images/ui/mw5-clans-dlc.webp',
  '/images/ui/mw5-clans-purchase.webp',
];

const mw5MercsImages = [
  '/images/ui/mw5-mercs-homepage.webp',
  '/images/ui/mw5-mercs-dlc1.webp',
  '/images/ui/mw5-mercs-dlc2.webp',
  '/images/ui/mw5-mercs-media.webp',
];

const mechconImages = [
  '/images/ui/mechcon-homepage.webp',
  '/images/ui/mechcon-about.webp',
  '/images/ui/mechcon-tickets.webp',
];

const mwoProductImages = [
  '/images/ui/mwo-product-page1.webp',
  '/images/ui/mwo-product-page2.webp',
  '/images/ui/mwo-product-page3.webp',
  '/images/ui/mwo-product-page4.webp',
  '/images/ui/mwo-product-page5.webp',
  '/images/ui/mwo-product-page6.webp',
  '/images/ui/mwo-product-page7.webp',
];

const pgiImages = [
  '/images/ui/pgi-homepage.webp',
  '/images/ui/pgi-studio.webp',
  '/images/ui/pgi-careers.webp',
];

const transverseImages = [
  '/images/ui/transverse-homepage.webp',
  '/images/ui/transverse-about.webp',
  '/images/ui/transverse-product.webp',
  '/images/ui/transverse-checkout.webp',
  '/images/ui/transverse-social.webp',
];

const ctdImages = ['/images/ui/ctd-img1.webp', '/images/ui/ctd-img2.webp'];

const saasImages = [
  '/images/ui/hs-img1.webp',
  '/images/ui/hs-img2.webp',
  '/images/ui/bb-img1.webp',
  '/images/ui/bb-img2.webp',
];

const legendsImages = [
  '/images/ui/mwomercs-legends-moonwalker.webp',
  '/images/ui/mwomercs-legends-moonwalker2.webp',
];

export default function Websites() {
  return (
    <PortfolioGalleryTemplate
      title="UI / Web"
      description="Product screens, marketing sites, and interface systems from 2009 through today."
    >
      <PortfolioItem
        date="2024"
        title="Mechwarrior 5: Clans"
        launchUrl="https://mw5clans.com"
        description="UI / UX / Front End"
        images={mw5ClansImages}
      />

      <PortfolioItem
        date="2021"
        title="Mechwarrior 5: Mercs"
        launchUrl="https://mw5mercs.com"
        description="UI / UX / Front End"
        images={mw5MercsImages}
      />

      <PortfolioItem
        date="2018"
        title="Mechcon"
        launchUrl="https://mechwarrior.com/mechcon"
        description="UI / UX / Front End"
        images={mechconImages}
      />

      <PortfolioItem
        date="2023"
        title="MWO Legends Product Page"
        launchUrl="https://mwomercs.com/legends/moonwalker"
        description="UI / UX / Front End"
        images={legendsImages}
      />

      <PortfolioItem
        date="2013 – 2024"
        title="MWO Product Pages"
        description="UI / UX / Front End"
        images={mwoProductImages}
      />

      <PortfolioItem
        date="2017"
        title="Piranha Games"
        launchUrl="https://piranhagames.com/"
        description="UI / UX / Front End"
        images={pgiImages}
      />

      <PortfolioItem
        date="2014"
        title="Transverse — Crowd Funding Site"
        description="UI / UX / Front End"
        images={transverseImages}
      />

      <PortfolioItem
        date="2012"
        title="Connect the Doc"
        launchUrl="https://connectthedoc.com/"
        description="UI / UX / Front End"
        images={ctdImages}
      />

      <PortfolioItem
        date="2009"
        title="SaaS Desktop Apps"
        description="UI / UX / Animation"
        images={saasImages}
      />
    </PortfolioGalleryTemplate>
  );
}
