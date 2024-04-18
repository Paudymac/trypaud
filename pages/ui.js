import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';

export default function Websites({ allPostsData }) {
  return (
    <Layout home>
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>User Interfaces</h1>        
        <h3>Mechwarrior 5 <a className={utilStyles.launch} href="https://mw5mercs.com">Launch</a></h3>
        <Image className={utilStyles.contentImg} src="/images/ui/mw5-site-example.jpg" width={960} height={540} alt="mw5 site"/><br/>
        <h3>Piranha Games  <a className={utilStyles.launch} href="https://piranhagames.com/">Launch</a></h3>
        <Image className={utilStyles.contentImg} src="/images/ui/piranhagames-site-example.jpg" width={960} height={540} alt="mw5 site"/><br/>
        <h3>Mechcon <a className={utilStyles.launch} href="https://mechwarrior.com/mechcon">Launch</a></h3>
        <Image className={utilStyles.contentImg} src="/images/ui/mechcon-site-example.jpg" width={960} height={540} alt="mechcon site"/><br/>
        <h3>MWO Product Pages</h3>
        <h4>MWO Legends <a className={utilStyles.launch} href="https://mwomercs.com/legends/spitfire">Launch</a></h4>
        <Image className={utilStyles.contentImg} src="/images/ui/mwomercs-legends-spitfire.jpg" width={960} height={540} alt="mwo site"/><br/>
        <h4>Longbow <a className={utilStyles.launch} href="https://mwomercs.com/longbow">Launch</a></h4>
        <Image className={utilStyles.contentImg} src="/images/ui/mwomercs-longbow.jpg" width={960} height={540} alt="mwo site"/><br/>
        <h4>Warhammer IIC <a className={utilStyles.launch} href="https://mwomercs.com/warhammeriic">Launch</a></h4>
        <Image className={utilStyles.contentImg} src="/images/ui/mwomercs-warhammeriic.jpg" width={960} height={540} alt="mwo site"/><br/>
        <h4>Transverse </h4>
        <Image className={utilStyles.contentImg} src="/images/ui/transverse-hp.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg} src="/images/ui/transverse-funding.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg} src="/images/ui/transverse-product.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg} src="/images/ui/transverse-checkout.jpg" width={960} height={540} alt="mwo site"/><br/>
        <h4>Connect the doc</h4>
        <Image className={utilStyles.contentImg}  src="/images/ui/ctd-img1.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image  className={utilStyles.contentImg}  src="/images/ui/ctd-img2.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image  className={utilStyles.contentImg}  src="/images/ui/ctd-img3.jpg" width={960} height={540} alt="mwo site"/><br/>
         <h4>Karlene Karst</h4>
        <Image className={utilStyles.contentImg}  src="/images/ui/karlene-img2b.jpg" width={960} height={540} alt="mwo site"/><br/>
        <h4>Whalley</h4>
        <Image className={utilStyles.contentImg}  src="/images/ui/whalley-img1.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg}  src="/images/ui/whalley-img2.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg}  src="/images/ui/whalley-img4.jpg" width={960} height={540} alt="mwo site"/><br/>
        <h4>ZLC</h4>
        <Image className={utilStyles.contentImg}  src="/images/ui/zlc-img1.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg}  src="/images/ui/zlc-img2.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg}  src="/images/ui/zlc-img3.jpg" width={960} height={540} alt="mwo site"/><br/>
        <h4>Retirement by Design</h4>
        <Image className={utilStyles.contentImg}  src="/images/ui/rbd-img1.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg}  src="/images/ui/rbd-img2.jpg" width={960} height={540} alt="mwo site"/><br/>
        <h4>Head & Shoulders</h4>
        <Image className={utilStyles.contentImg}  src="/images/ui/hs-img1.jpg" width={960} height={540} alt="mwo site"/><br/>
         <Image className={utilStyles.contentImg}  src="/images/ui/hs-img2.jpg" width={960} height={540} alt="mwo site"/><br/>
        <h4>Fiberone</h4>
        <Image className={utilStyles.contentImg}  src="/images/ui/fiberone-img1.jpg" width={960} height={540} alt="mwo site"/><br/>
        <h4>Blackberry</h4>
        <Image className={utilStyles.contentImg}  src="/images/ui/bb-img1.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg}  src="/images/ui/bb-img2.jpg" width={960} height={540} alt="mwo site"/><br/>
      </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}
