import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';

export default function Logos({ allPostsData }) {
  return (
    <Layout home>
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Icons</h1>
        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>Solaris Icon</h3>
        <p className={utilStyles.descriptionPortfolio}>PGI [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/icons/mw5-dlc6-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>The Dragons Gambit Dragon</h3>
        <p className={utilStyles.descriptionPortfolio}>PGI [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/icons/mw5-dlc5-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
        <span className={utilStyles.datePortfolio}>2022</span>
        <h3 className={utilStyles.header3Portfolio}>Rise of Rasalhague Serpent</h3>
        <p className={utilStyles.descriptionPortfolio}>PGI [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/icons/mw5-dlc4-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
        <span className={utilStyles.datePortfolio}>2019</span>
        <h3 className={utilStyles.header3Portfolio}>MW5</h3>
        <p className={utilStyles.descriptionPortfolio}>PGI [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/icons/mw5-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
         <span className={utilStyles.datePortfolio}>2017</span>
        <h3 className={utilStyles.header3Portfolio}>PGI Cow Skull </h3>
        <p className={utilStyles.descriptionPortfolio}>PGI [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/icons/pgi-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>MWO Atlas Icon</h3>
        <p className={utilStyles.descriptionPortfolio}>PGI [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/icons/mwo-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
        <span className={utilStyles.datePortfolio}>2021</span>
        <h3 className={utilStyles.header3Portfolio}>Legends of the Kestrel Lancers Bird</h3>
        <p className={utilStyles.descriptionPortfolio}>PGI [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/icons/mw5-dlc2-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
        <span className={utilStyles.datePortfolio}>2012</span>
        <h3 className={utilStyles.header3Portfolio}>Smartt A</h3>
        <p className={utilStyles.descriptionPortfolio}>Smartt [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/icons/smartt-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
        </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}

