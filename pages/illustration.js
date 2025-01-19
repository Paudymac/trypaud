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
        <h1>Illustration</h1>

        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>MechWarrior 5 Clans DLC Art <a className={utilStyles.launch} href="https://mw5clans.com/dlc/trials-of-war">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/illustration/MW5C_TOW_KA_16x9.jpg" width={960} height={540} alt="mw5 art"/><br/>

       
        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>MWO Legends Art</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/illustration/art-legends.jpg" width={960} height={540} alt="mwo legends art"/><br/>


        <span className={utilStyles.datePortfolio}>2021</span>
        <h3 className={utilStyles.header3Portfolio}> Xmas Card</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/illustration/xmas-card-2.jpg" width={960} height={540} alt="mw5 art"/><br/>

        <span className={utilStyles.datePortfolio}>2020</span>
        <h3 className={utilStyles.header3Portfolio}> Xmas Card</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/illustration/xmas-card-1.jpg" width={960} height={540} alt="mw5 art"/><br/>

        <span className={utilStyles.datePortfolio}>2018</span>
        <h3 className={utilStyles.header3Portfolio}>MechWarrior 5 Branding Illustration</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/illustration/vector-art-mw5.svg" width={960} height={540} alt="mw5 art"/><br/>
        </section>

        <a href="/">&larr; home</a>
      </Layout>
    );
}

