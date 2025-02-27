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
      <p>Hi, I’m Paudy.</p>
     

      <p>I'm a designer of things from Ireland. I specialize in Branding, UI, Interaction Design and Storytelling. My abode is presently Vancouver, British Columbia.</p>
     
      <p>To learn more about me read
      <a href="/my-design-story"> My Design Story.</a></p>
      </div>
      <br />
        <div className={utilStyles.mainMenuParent}>
          <a className={utilStyles.mainMenu} href="/logos">Logos</a>
          <a className={utilStyles.mainMenu} href="/icons">Icons</a>
          <a className={utilStyles.mainMenu} href="/branding">Branding</a>
          <a className={utilStyles.mainMenu} href="/ui">UI</a>
          <a className={utilStyles.mainMenu} href="/animation">Animation</a>
          <a className={utilStyles.mainMenu} href="/illustration">Illustration</a>
          <a className={utilStyles.mainMenu} href="/print">Print</a>
          <a className={utilStyles.mainMenu} href="/miscellaneous">Miscellaneous</a>
        </div>
      </section>
    </Layout>
  );
}


