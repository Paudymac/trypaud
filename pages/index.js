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
      <h2 className={utilStyles.centerText}>Try Something Different</h2>
      <p>Hello, I’m Paudy,</p>
      <p>A designer of things heralding from Ireland.</p>

      <p>Design is part of the fabric to my character; 
      graphic design, interaction design, logos, layout, branding, animation, UI, development, storytelling I dig it all.</p>
     
      <p>To find out more please read
      <a href="/mystory"> My Story.</a></p>
      </div>
      <br />

        <p className={utilStyles.mainMenu}><a href="/logos">Logos</a></p>
        <p className={utilStyles.mainMenu}><a href="/branding">Branding</a></p>
        <p className={utilStyles.mainMenu}><a href="/ui">UI</a></p>
        <p className={utilStyles.mainMenu}><a href="/animation">Animation</a></p>
        <p className={utilStyles.mainMenu}><a href="/illustration">Illustration</a></p>
        <p className={utilStyles.mainMenu}><a href="/print">Print</a></p>
        <p className={utilStyles.mainMenu}><a href="/miscellaneous">Miscellaneous</a></p>
      </section>
    </Layout>
  );
}


