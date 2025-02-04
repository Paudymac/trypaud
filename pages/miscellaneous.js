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
      
        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>Poster S.D.B.A.</h3>
        <p className={utilStyles.descriptionPortfolio}>[ Design / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/miscellaneous/sdba-poster.jpg" width={960} height={540} alt="mw5 art"/><br/>


        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>Poster S.D.B.A.</h3>
        <p className={utilStyles.descriptionPortfolio}>[ Design / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/miscellaneous/sdba-poster-2023.jpg" width={960} height={540} alt="mw5 art"/><br/>


        <span className={utilStyles.datePortfolio}>2009</span>
        <h3 className={utilStyles.header3Portfolio}>Hicks I</h3>
        <p className={utilStyles.descriptionPortfolio}>[ Design / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/miscellaneous/itsJustAride.jpg" width={960} height={540} alt="mw5 art"/><br/>


        <span className={utilStyles.datePortfolio}>2009</span>
        <h3 className={utilStyles.header3Portfolio}>Hicks II</h3>
        <p className={utilStyles.descriptionPortfolio}>[ Design / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/miscellaneous/wheredoyouthink.jpg" width={960} height={540} alt="mwo legends art"/><br/>
        
        </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}

