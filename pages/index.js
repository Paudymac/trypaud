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
        <nav className={utilStyles.mainMenuParent}>
        <a className={utilStyles.mainMenu} href="/ui">UI / Web</a>
          <a className={utilStyles.mainMenu} href="/logos">Logos</a>
          <a className={utilStyles.mainMenu} href="/branding">Branding</a>
          <a className={utilStyles.mainMenu} href="/print">Print</a>
          <a className={utilStyles.mainMenu} href="/icons">Icons</a>
          
          <a className={utilStyles.mainMenu} href="/animation">Animation</a>

          <a className={utilStyles.mainMenu} href="/illustration">Illustration</a>
          
         
        </nav>
        
      </section>
    </Layout>
  );
}


