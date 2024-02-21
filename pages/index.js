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
      <h2 className={utilStyles.centerText}>Try Again, Try Better.</h2>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.mainMenu}><a href="/logos">Logos</a></p>
        <p className={utilStyles.mainMenu}><a href="/ui">User Interfaces</a></p>
        <p className={utilStyles.mainMenu}><a href="/motiongraphics">Motion Graphics</a></p>
        <p className={utilStyles.mainMenu}><a href="/illustration">Illustration</a></p>
        <p className={utilStyles.mainMenu}><a href="/print">Print</a></p>
      </section>
    </Layout>
  );
}


