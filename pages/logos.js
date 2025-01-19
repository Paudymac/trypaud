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
        <h1>Logos</h1>
        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>Mechwarrior 5 Clans <a className={utilStyles.launch} href="https://mw5clans.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/mw5-clans-logo-example.jpg" width={960} height={540} alt="Mechwarrior 5 Clans logo"/><br/>
        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>Solaris Showdown / MW5 DLC <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/solaris-showdown">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/ss-logo-example.jpg" width={960} height={540} alt="solaris showdown"/><br/>
        
        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>MechWarrior Online Legends <a className={utilStyles.launch} href="https://mwomercs.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/mwol-logo-example.jpg" width={960} height={540} alt="MechWarrior Online Legends logo"/><br/>
        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>The Dragons Gambit (MW5 DLC)<a className={utilStyles.launch} href="https://mw5mercs.com/dlc/the-dragons-gambit">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/tdg-logo-example.jpg" width={960} height={540} alt="The Dragons Gambit logo"/><br/>
        <span className={utilStyles.datePortfolio}>2022</span>
        <h3 className={utilStyles.header3Portfolio}>Rise of Rasalhague (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/rise-of-rasalhague">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/ror-logo-example.jpg" width={960} height={540} alt="Rise of Rasalhague logo"/><br/>
        <span className={utilStyles.datePortfolio}>2022</span>
        <h3 className={utilStyles.header3Portfolio}>Call to Arms (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/call-to-arms">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/cta-logo-example.jpg" width={960} height={540} alt="Call to Arms logo"/><br/>
        <span className={utilStyles.datePortfolio}>2021</span>
        <h3 className={utilStyles.header3Portfolio}>Legends of the Kestrel Lancers (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/legend-of-the-kestrel-lancers">
        Launch</a>
        </h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/lotkl-logo-example.jpg" width={960} height={540} alt="Legends of the Kestrel Lancers logo"/><br/>
        <span className={utilStyles.datePortfolio}>2020</span>
        <h3 className={utilStyles.header3Portfolio}>Heroes of the Innersphere (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/heroes-of-the-inner-sphere">Launch</a>
        </h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/hotis-logo-example.jpg" width={960} height={540} alt="Heroes of the Innersphere logo"/><br/>
        <span className={utilStyles.datePortfolio}>2020</span>
        <h3 className={utilStyles.header3Portfolio}>Project Revenant</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/pr-logo-example.jpg" width={960} height={540} alt="project revenant logo"/><br/>
        <span className={utilStyles.datePortfolio}>2019</span>
        <h3 className={utilStyles.header3Portfolio}>MechWarrior 5 <a className={utilStyles.launch} href="https://mw5mercs.com">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/mw5-logo-example.jpg" width={960} height={540} alt="mechwarrior 5 logo"/><br/>
        <span className={utilStyles.datePortfolio}>2018</span>
        <h3 className={utilStyles.header3Portfolio}>MWO Solaris 7</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/mwos7-logo-example.jpg" width={960} height={540} alt="mechcon logo"/><br/>
         <span className={utilStyles.datePortfolio}>2018</span>
        <h3 className={utilStyles.header3Portfolio}>MechCon <a className={utilStyles.launch} href="https://mechwarrior.com/mechcon">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/mc-logo-example.jpg" width={960} height={540} alt="mechcon logo"/><br/>
         <span className={utilStyles.datePortfolio}>2012</span>
        <h3 className={utilStyles.header3Portfolio}>Colombia College <a className={utilStyles.launch} href="https://www.columbiacollege.ca/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/cc-logo-example.jpg" width={960} height={540} alt="Call to arms"/><br/>
        <span className={utilStyles.datePortfolio}>2012</span>
        <h3 className={utilStyles.header3Portfolio}>Smartt <a className={utilStyles.launch} href="https://www.smartt.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/smartt-logo-example.jpg" width={960} height={540} alt="Smartt logo"/><br/>
         <span className={utilStyles.datePortfolio}>2011</span>
        <h3 className={utilStyles.header3Portfolio}>Connect the doc <a className={utilStyles.launch} href="https://www.connectthedoc.com/">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Design / Development / Art Direction ]</p>
        <Image className={utilStyles.contentImg} src="/images/logos/ctd-logo-example.jpg" width={960} height={540} alt="Smartt logo"/><br/>
        </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}

