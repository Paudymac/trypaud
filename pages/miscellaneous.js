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
        <h1>Miscellaneous</h1>
        <h3>Hicks I</h3>
        <Image className={utilStyles.contentImg} src="/images/miscellaneous/itsJustAride.jpg" width={960} height={540} alt="mw5 art"/><br/>
        <h3>Hicks II</h3>
        <Image className={utilStyles.contentImg} src="/images/miscellaneous/wheredoyouthink.jpg" width={960} height={540} alt="mwo legends art"/><br/>
        <a href="/">home</a>
        </section>
      </Layout>
    );
}

