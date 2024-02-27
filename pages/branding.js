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
        <h1>Branding</h1>
        <h3>Smartt</h3>
        <embed src="/images/branding/Styleguide_PM_V6.pdf" width="1920px" height="1080px" />
       
        <br/>
        <a href="/">home</a>
        </section>
      </Layout>
    );
}

