import Head from 'next/head';
import utilStyles from '@/styles/utils.module.css';
import Layout, { siteTitle } from '@/components/Layout';
import styles from '@/components/backgroundImage.module.css';
import ImageCarousel from '@/components/ImageCarousel';

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
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>UI / Web</h1>

        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>
          Mechwarrior 5:Clans{' '}
          <a className={utilStyles.launch} href="https://mw5clans.com">
            Launch
          </a>
        </h3>
        <p className={utilStyles.descriptionPortfolio}>
          {' '}
          [ UI / UX / Front End ]
        </p>
        <a className={styles.imageLink} href="https://mw5clans.com">
          <ImageCarousel images={images} />
        </a>

        <span className={utilStyles.datePortfolio}>2021</span>
        <h3 className={utilStyles.header3Portfolio}>
          Mechwarrior 5:Mercs{' '}
          <a className={utilStyles.launch} href="https://mw5mercs.com">
            Launch
          </a>
        </h3>
        <p className={utilStyles.descriptionPortfolio}>
          {' '}
          [ UI / UX / Front End ]
        </p>
        <a className={styles.imageLink} href="https://mw5mercs.com">
          <ImageCarousel images={images1} />
        </a>

        <span className={utilStyles.datePortfolio}>2018</span>
        <h3 className={utilStyles.header3Portfolio}>
          Mechcon{' '}
          <a
            className={utilStyles.launch}
            href="https://mechwarrior.com/mechcon"
          >
            Launch
          </a>
        </h3>
        <p className={utilStyles.descriptionPortfolio}>
          {' '}
          [ UI / UX / Front End ]
        </p>
        <a className={styles.imageLink} href="https://mechwarrior.com/mechcon">
          <ImageCarousel images={images2} />
        </a>

        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>
          MWO Legends Product Page{' '}
          <a
            className={utilStyles.launch}
            href="https://mwomercs.com/legends/moonwalker"
          >
            Launch
          </a>
        </h3>
        <p className={utilStyles.descriptionPortfolio}>
          {' '}
          [ UI / UX / Front End ]
        </p>
        <a
          className={styles.imageLink}
          href="https://mwomercs.com/legends/moonwalker"
        >
          <ImageCarousel images={images8} />
        </a>

        <span className={utilStyles.datePortfolio}>2013 - 2024</span>
        <h3 className={utilStyles.header3Portfolio}>MWO Product Pages</h3>
        <p className={utilStyles.descriptionPortfolio}>
          {' '}
          [ UI / UX / Front End ]
        </p>
        <a className={styles.imageLink} href="https://mwomercs.com/store">
          <ImageCarousel images={images3} />
        </a>

        <span className={utilStyles.datePortfolio}>2017</span>
        <h3 className={utilStyles.header3Portfolio}>
          Piranha Games{' '}
          <a className={utilStyles.launch} href="https://piranhagames.com/">
            Launch
          </a>
        </h3>
        <p className={utilStyles.descriptionPortfolio}>
          {' '}
          [ UI / UX / Front End ]
        </p>
        <a className={styles.imageLink} href="https://piranhagames.com/">
          <ImageCarousel images={images4} />
        </a>

        <span className={utilStyles.datePortfolio}>2014</span>
        <h3 className={utilStyles.header3Portfolio}>
          Transverse [Crowd Funding Site]
        </h3>
        <p className={utilStyles.descriptionPortfolio}>
          {' '}
          [ UI / UX / Front End ]
        </p>

        <div className={styles.imageBg}>
          <ImageCarousel images={images5} />
        </div>

        <span className={utilStyles.datePortfolio}>2012</span>
        <h3 className={utilStyles.header3Portfolio}>
          Connect the doc{' '}
          <a className={utilStyles.launch} href="https://connectthedoc.com/">
            Launch
          </a>
        </h3>
        <p className={utilStyles.descriptionPortfolio}>
          {' '}
          [ UI / UX / Front End ]
        </p>

        <div className={styles.imageBg}>
          <ImageCarousel images={images6} />
        </div>

        <span className={utilStyles.datePortfolio}>2009</span>
        <h3 className={utilStyles.header3Portfolio}>SaaS Desktop Apps</h3>
        <p className={utilStyles.descriptionPortfolio}>
          {' '}
          [ UI / UX / Animation]
        </p>

        <div className={styles.imageBg}>
          <ImageCarousel images={images7} />
        </div>
      </section>
    </Layout>
  );
}
