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
     

      <p>Innovative and experienced Designer with over a decade of experience in crafting compelling design solutions for both gaming and corporate clients. Demonstrated expertise in UI/UX design, branding, web design, and leading cross-functional teams through all stages of development. Proven track record of contributing to successful product launches, enhancing user experiences, and driving company growth through strategic design initiatives.</p>
     
      <p>To learn more read
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


