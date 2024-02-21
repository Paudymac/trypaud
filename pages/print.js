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
        <h1>Print</h1>
        <h3>Mechcon 2018</h3>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2018-img1.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2018-img2.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2018-img3.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2018-img4.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2018-img5.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2018-img6.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2018-img7.jpg" width={960} height={540} alt="mechcon branding"/>
        <br/>
        <a href="/">home</a>
        </section>
      </Layout>
    );
}

