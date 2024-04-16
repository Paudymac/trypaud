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
        <h3>Columbia College Brand Guide</h3>
         <Image className={utilStyles.contentImg} src="/images/branding/Columbia_College_Brand_Guidelines_Final_Page_01.jpg" width={960} height={540} quality={100} alt="columbia college brand guide"/><br/>
         <Image className={utilStyles.contentImg} src="/images/branding/Columbia_College_Brand_Guidelines_Final_Page_02.jpg" width={960} height={540} quality={100} alt="columbia college brand guide"/><br/>
         <Image className={utilStyles.contentImg} src="/images/branding/Columbia_College_Brand_Guidelines_Final_Page_04.jpg" width={960} height={540} quality={100} alt="columbia college brand guide"/><br/>
         <Image className={utilStyles.contentImg} src="/images/branding/Columbia_College_Brand_Guidelines_Final_Page_11.jpg" width={960} height={540} quality={100} alt="columbia college brand guide"/><br/>
         <Image className={utilStyles.contentImg} src="/images/branding/Columbia_College_Brand_Guidelines_Final_Page_16.jpg" width={960} height={540} quality={100} alt="columbia college brand guide"/><br/>
        <br/>
        <h3>Sierra Wireless Ad</h3>
         <Image className={utilStyles.contentImg} src="/images/branding/sierra-wireless-ad.jpg" width={960} height={540} quality={100} alt="sierra wireless ad"/><br/>
        <br/>
        <h3>Smartt Ad</h3>
         <Image className={utilStyles.contentImg} src="/images/branding/smartt-ad.jpg" width={960} height={540} alt="smartt branded ad"/><br/>
        <br/>
        </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}

