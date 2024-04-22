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
        <h3>MW5 Box Art</h3>
        <Image className={utilStyles.contentImg} src="/images/branding/mw5-box-art.jpg" width={960} height={540} alt="mw5 branding"/>
        <h3>Mechcon Events</h3>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2017-img1.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2017-img2.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2017-img3.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2017-img4.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2017-img5.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2017-img6.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2017-img7.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2017-img8.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2018-img1.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2018-img2.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2018-img3.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2018-img4.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2018-img5.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2018-img6.jpg" width={960} height={540} alt="mechcon branding"/>
        <Image className={utilStyles.contentImg} src="/images/print/mechcon-2018-img7.jpg" width={960} height={540} alt="mechcon branding"/>
        <br/>
        <h3>Smartt Branding</h3>
         <Image className={utilStyles.contentImg} src="/images/branding/smartt-folder-front.jpg" width={960} height={540} alt="smartt branding"/>
        <Image className={utilStyles.contentImg} src="/images/branding/smartt-folder.jpg" width={960} height={540} alt="smartt branding"/><br/>
       
        </section>

       <a href="/">&larr; home</a>
      </Layout>
    );
}

