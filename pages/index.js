import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <div className={utilStyles.blog}>
      </div>
      <br />
        <div className={utilStyles.mainMenuParent}>
        <a className={utilStyles.mainMenu} href="/ui">UI / Web</a>
          <a className={utilStyles.mainMenu} href="/logos">Logos</a>
          <a className={utilStyles.mainMenu} href="/branding">Branding</a>
          <a className={utilStyles.mainMenu} href="/print">Print</a>
          <a className={utilStyles.mainMenu} href="/icons">Icons</a>
          
          <a className={utilStyles.mainMenu} href="/animation">Animation</a>

          <a className={utilStyles.mainMenu} href="/illustration">Illustration</a>
          
          <a className={utilStyles.mainMenu} href="/miscellaneous">Miscellaneous</a>
        </div>
        <div className={utilStyles.mobMenuParent}>
        <a className={utilStyles.mobMenu} href="/ui">UI / Web</a>
          <a className={utilStyles.mobMenu} href="/logos">Logos</a>
          <a className={utilStyles.mobMenu} href="/branding">Branding</a>
          <a className={utilStyles.mobMenu} href="/print">Print</a>
          <a className={utilStyles.mobMenu} href="/icons">Icons</a>
          
          <a className={utilStyles.mobMenu} href="/animation">Animation</a>

          <a className={utilStyles.mobMenu} href="/illustration">Illustration</a>
          
          <a className={utilStyles.mobMenu} href="/miscellaneous">Miscellaneous</a>
        </div>
      </section>
    </Layout>
  );
}


