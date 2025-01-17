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
         <h3>MechWarrior 5 Clans DLC Art</h3>
        <Image className={utilStyles.contentImg} src="/images/illustration/MW5C_TOW_KA_16x9.jpg" width={960} height={540} alt="mw5 art"/><br/>
        <h3>MechWarrior 5 Illustration</h3>
        <Image className={utilStyles.contentImg} src="/images/illustration/vector-art-mw5.svg" width={960} height={540} alt="mw5 art"/><br/>
        <h3>MWO Legends Art MockUp</h3>
        <Image className={utilStyles.contentImg} src="/images/illustration/art-legends.jpg" width={960} height={540} alt="mwo legends art"/><br/>
         <h3>MechWarrior Xmas Cards</h3>
        <Image className={utilStyles.contentImg} src="/images/illustration/xmas-card-1.jpg" width={960} height={540} alt="mw5 art"/><br/>
        <Image className={utilStyles.contentImg} src="/images/illustration/xmas-card-2.jpg" width={960} height={540} alt="mw5 art"/><br/>
        </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}

