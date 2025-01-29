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
        <h1>UI / Web</h1> 

         <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>Mechwarrior 5:Clans <a className={utilStyles.launch} href="https://mw5clans.com">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <Image className={utilStyles.contentImg} src="/images/ui/mw5clans-site-example.jpg" width={960} height={540} alt="mw5 site"/><br/>     


        <span className={utilStyles.datePortfolio}>2021</span>
        <h3 className={utilStyles.header3Portfolio}>Mechwarrior 5:Mercs <a className={utilStyles.launch} href="https://mw5mercs.com">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <Image className={utilStyles.contentImg} src="/images/ui/mw5-site-example.jpg" width={960} height={540} alt="mw5 site"/><br/>

        <span className={utilStyles.datePortfolio}>2018</span>
        <h3 className={utilStyles.header3Portfolio}>Mechcon <a className={utilStyles.launch} href="https://mechwarrior.com/mechcon">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <Image className={utilStyles.contentImg} src="/images/ui/mechcon-site-example.jpg" width={960} height={540} alt="mechcon site"/><br/>

        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>MWO Product Pages</h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>

        <h4>Black Hawk Ku<a className={utilStyles.launch} href="https://mwomercs.com/packages/black-hawk-ku">Launch</a></h4>
        <Image className={utilStyles.contentImg} src="/images/ui/mwomercs-black-hawk-ku.jpg" width={960} height={540} alt="mwo site"/><br/>

        <h4>Bullshark <a className={utilStyles.launch} href="https://mwomercs.com/bullshark">Launch</a></h4>
        <Image className={utilStyles.contentImg} src="/images/ui/mwomercs-bullshark.jpg" width={960} height={540} alt="mwo site"/><br/>
        <h4>Stone Rhino <a className={utilStyles.launch} href="https://mwomercs.com/stone-rhino">Launch</a></h4>
        <Image className={utilStyles.contentImg} src="/images/ui/mwomercs-stone-rhino.jpg" width={960} height={540} alt="mwo site"/><br/>
        <h4>Longbow <a className={utilStyles.launch} href="https://mwomercs.com/longbow">Launch</a></h4>
        <Image className={utilStyles.contentImg} src="/images/ui/mwomercs-longbow.jpg" width={960} height={540} alt="mwo site"/><br/>

        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>MWO Legends Spitfire <a className={utilStyles.launch} href="https://mwomercs.com/legends/spitfire">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <Image className={utilStyles.contentImg} src="/images/ui/mwomercs-legends-spitfire.jpg" width={960} height={540} alt="mwo site"/><br/>


        <span className={utilStyles.datePortfolio}>2017</span>
        <h3 className={utilStyles.header3Portfolio}>Piranha Games <a className={utilStyles.launch} href="https://piranhagames.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <Image className={utilStyles.contentImg} src="/images/ui/piranhagames-site-example.jpg" width={960} height={540} alt="mw5 site"/><br/>

            
        <span className={utilStyles.datePortfolio}>2014</span>
        <h3 className={utilStyles.header3Portfolio}>Transverse [Crowd Funding Site]</h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <Image className={utilStyles.contentImg} src="/images/ui/transverse-hp.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg} src="/images/ui/transverse-funding.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg} src="/images/ui/transverse-product.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg} src="/images/ui/transverse-checkout.jpg" width={960} height={540} alt="mwo site"/><br/>

        <span className={utilStyles.datePortfolio}>2012</span>
        <h3 className={utilStyles.header3Portfolio}>Connect the doc <a className={utilStyles.launch} href="https://connectthedoc.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <Image className={utilStyles.contentImg}  src="/images/ui/ctd-img1.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image  className={utilStyles.contentImg}  src="/images/ui/ctd-img2.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image  className={utilStyles.contentImg}  src="/images/ui/ctd-img3.jpg" width={960} height={540} alt="mwo site"/><br/>


        <span className={utilStyles.datePortfolio}>2011</span>
        <h3 className={utilStyles.header3Portfolio}>ZLC <a className={utilStyles.launch} href="https://www.zlc.net/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Front End ]</p>
        <Image className={utilStyles.contentImg}  src="/images/ui/zlc-img1.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg}  src="/images/ui/zlc-img2.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg}  src="/images/ui/zlc-img3.jpg" width={960} height={540} alt="mwo site"/><br/>

        <span className={utilStyles.datePortfolio}>2009</span>
        <h3 className={utilStyles.header3Portfolio}>Blackberry</h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Animation]</p>
        <Image className={utilStyles.contentImg}  src="/images/ui/bb-img1.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg}  src="/images/ui/bb-img2.jpg" width={960} height={540} alt="mwo site"/><br/>

        <span className={utilStyles.datePortfolio}>2008</span>
        <h3 className={utilStyles.header3Portfolio}>Head & Shoulders</h3>
        <p className={utilStyles.descriptionPortfolio}> [ UI / UX / Animation]</p>
        <Image className={utilStyles.contentImg}  src="/images/ui/hs-img1.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg}  src="/images/ui/hs-img2.jpg" width={960} height={540} alt="mwo site"/><br/>
        
        
      </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}
