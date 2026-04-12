import ImageCarousel from '@/components/ImageCarousel';
import PortfolioItem from '@/components/PortfolioItem';
import PortfolioGalleryTemplate from '@/components/PortfolioGalleryTemplate';

const images = [
  '/images/ui/mw5-clans-homepage.webp',
  '/images/ui/mw5-clans-news.webp',
  '/images/ui/mw5-clans-dlc.webp',
  '/images/ui/mw5-clans-purchase.webp',
];

const images1 = [
  '/images/ui/mw5-mercs-homepage.webp',
  '/images/ui/mw5-mercs-dlc1.webp',
  '/images/ui/mw5-mercs-dlc2.webp',
  '/images/ui/mw5-mercs-media.webp',
];

const images2 = [
  '/images/ui/mechcon-homepage.webp',
  '/images/ui/mechcon-about.webp',
  '/images/ui/mechcon-tickets.webp',
];

const images3 = [
  '/images/ui/mwo-product-page1.webp',
  '/images/ui/mwo-product-page2.webp',
  '/images/ui/mwo-product-page3.webp',
  '/images/ui/mwo-product-page4.webp',
  '/images/ui/mwo-product-page5.webp',
  '/images/ui/mwo-product-page6.webp',
  '/images/ui/mwo-product-page7.webp',
];

const images4 = [
  '/images/ui/pgi-homepage.webp',
  '/images/ui/pgi-studio.webp',
  '/images/ui/pgi-careers.webp',
];

const images5 = [
  '/images/ui/transverse-homepage.webp',
  '/images/ui/transverse-about.webp',
  '/images/ui/transverse-product.webp',
  '/images/ui/transverse-checkout.webp',
  '/images/ui/transverse-social.webp',
];

const images6 = ['/images/ui/ctd-img1.webp', '/images/ui/ctd-img2.webp'];

const images7 = [
  '/images/ui/hs-img1.webp',
  '/images/ui/hs-img2.webp',
  '/images/ui/bb-img1.webp',
  '/images/ui/bb-img2.webp',
];

const images8 = [
  '/images/ui/mwomercs-legends-moonwalker.webp',
  '/images/ui/mwomercs-legends-moonwalker2.webp',
];

export default function Websites() {
  return (
    <PortfolioGalleryTemplate title="UI / Web">
      <PortfolioItem
        date="2024"
        title="Mechwarrior 5: Clans"
        launchUrl="https://mw5clans.com"
        description="[ UI / UX / Front End ]"
      >
        <ImageCarousel images={images} />
      </PortfolioItem>

      <PortfolioItem
        date="2021"
        title="Mechwarrior 5: Mercs"
        launchUrl="https://mw5mercs.com"
        description="[ UI / UX / Front End ]"
      >
        <ImageCarousel images={images1} />
      </PortfolioItem>

      <PortfolioItem
        date="2018"
        title="Mechcon"
        launchUrl="https://mechwarrior.com/mechcon"
        description="[ UI / UX / Front End ]"
      >
        <ImageCarousel images={images2} />
      </PortfolioItem>

      <PortfolioItem
        date="2023"
        title="MWO Legends Product Page"
        launchUrl="https://mwomercs.com/legends/moonwalker"
        description="[ UI / UX / Front End ]"
      >
        <ImageCarousel images={images8} />
      </PortfolioItem>

      <PortfolioItem
        date="2013 - 2024"
        title="MWO Product Pages"
        description="[ UI / UX / Front End ]"
      >
        <ImageCarousel images={images3} />
      </PortfolioItem>

      <PortfolioItem
        date="2017"
        title="Piranha Games"
        launchUrl="https://piranhagames.com/"
        description="[ UI / UX / Front End ]"
      >
        <ImageCarousel images={images4} />
      </PortfolioItem>

      <PortfolioItem
        date="2014"
        title="Transverse [Crowd Funding Site]"
        description="[ UI / UX / Front End ]"
      >
        <ImageCarousel images={images5} />
      </PortfolioItem>

      <PortfolioItem
        date="2012"
        title="Connect the Doc"
        launchUrl="https://connectthedoc.com/"
        description="[ UI / UX / Front End ]"
      >
        <ImageCarousel images={images6} />
      </PortfolioItem>

      <PortfolioItem
        date="2009"
        title="SaaS Desktop Apps"
        description="[ UI / UX / Animation ]"
      >
        <ImageCarousel images={images7} />
      </PortfolioItem>
    </PortfolioGalleryTemplate>
  );
}
