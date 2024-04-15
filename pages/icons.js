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
         <h3>Solaris Icon</h3>
        <Image className={utilStyles.contentImg} src="/images/icons/mw5-dlc6-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
        <h3>The Dragons Gambit Dragon</h3>
        <Image className={utilStyles.contentImg} src="/images/icons/mw5-dlc5-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
         <h3>Rise of Rasalhague Serpent</h3>
        <Image className={utilStyles.contentImg} src="/images/icons/mw5-dlc4-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
        <h3>MW5</h3>
        <Image className={utilStyles.contentImg} src="/images/icons/mw5-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
        <h3>PGI Cow Skull </h3>
        <Image className={utilStyles.contentImg} src="/images/icons/pgi-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
        <h3>MWO Atlas Icon</h3>
        <Image className={utilStyles.contentImg} src="/images/icons/mwo-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
        <h3>Legends of the Kestrel Lancers Bird</h3>
        <Image className={utilStyles.contentImg} src="/images/icons/mw5-dlc2-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
        <h3>Smartt A</h3>
        <Image className={utilStyles.contentImg} src="/images/icons/smartt-icon.jpg" width={960} height={540} alt="cow skull"/><br/>
        </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}

