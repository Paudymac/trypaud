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
        <h3>Solaris Showdown (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/solaris-showdown">Launch</a></h3>
        <Image className={utilStyles.contentImg} src="/images/logos/ss-logo-example.jpg" width={960} height={540} alt="solaris showdown"/><br/>
        <h3>Mechwarrior 5 Clans <a className={utilStyles.launch} href="https://mw5clans.com/">Launch</a></h3>
        <Image className={utilStyles.contentImg} src="/images/logos/mw5-clans-logo-example.jpg" width={960} height={540} alt="Mechwarrior 5 Clans logo"/><br/>
        <h3>MechWarrior Online Legends <a className={utilStyles.launch} href="https://mwomercs.com/">Launch</a></h3>
        <Image className={utilStyles.contentImg} src="/images/logos/mwol-logo-example.jpg" width={960} height={540} alt="MechWarrior Online Legends logo"/><br/>
        <h3>The Dragons Gambit (MW5 DLC)<a className={utilStyles.launch} href="https://mw5mercs.com/dlc/the-dragons-gambit">Launch</a></h3>
        <Image className={utilStyles.contentImg} src="/images/logos/tdg-logo-example.jpg" width={960} height={540} alt="The Dragons Gambit logo"/><br/>
        <h3>Rise of Rasalhague (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/rise-of-rasalhague">Launch</a></h3>
        <Image className={utilStyles.contentImg} src="/images/logos/ror-logo-example.jpg" width={960} height={540} alt="Rise of Rasalhague logo"/><br/>
        <h3>Call to Arms (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/call-to-arms">Launch</a></h3>
        <Image className={utilStyles.contentImg} src="/images/logos/cta-logo-example.jpg" width={960} height={540} alt="Call to Arms logo"/><br/>
        <h3>Legends of the Kestrel Lancers (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/legend-of-the-kestrel-lancers">
        Launch</a>
        </h3>
        <Image className={utilStyles.contentImg} src="/images/logos/lotkl-logo-example.jpg" width={960} height={540} alt="Legends of the Kestrel Lancers logo"/><br/>
        <h3>Heroes of the Innersphere (MW5 DLC) <a className={utilStyles.launch} href="https://mw5mercs.com/dlc/heroes-of-the-inner-sphere">Launch</a>
        </h3>
        <Image className={utilStyles.contentImg} src="/images/logos/hotis-logo-example.jpg" width={960} height={540} alt="Heroes of the Innersphere logo"/><br/>
        <h3>Project Revenant</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/pr-logo-example.jpg" width={960} height={540} alt="project revenant logo"/><br/>
        <h3>MechWarrior 5 <a className={utilStyles.launch} href="https://mw5mercs.com">Launch</a></h3>
        <Image className={utilStyles.contentImg} src="/images/logos/mw5-logo-example.jpg" width={960} height={540} alt="mechwarrior 5 logo"/><br/>
        <h3>MWO Solaris 7</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/mwos7-logo-example.jpg" width={960} height={540} alt="mechcon logo"/><br/>
        <h3>MechCon <a className={utilStyles.launch} href="https://mechwarrior.com/mechcon">Launch</a></h3>
        <Image className={utilStyles.contentImg} src="/images/logos/mc-logo-example.jpg" width={960} height={540} alt="mechcon logo"/><br/>
        <h3>Colombia College <a className={utilStyles.launch} href="https://www.columbiacollege.ca/">Launch</a></h3>
        <Image className={utilStyles.contentImg} src="/images/logos/cc-logo-example.jpg" width={960} height={540} alt="Call to arms"/><br/>
        <h3>Smartt <a className={utilStyles.launch} href="https://www.smartt.com/">Launch</a></h3>
        <Image className={utilStyles.contentImg} src="/images/logos/smartt-logo-example.jpg" width={960} height={540} alt="Smartt logo"/><br/>
        <h3>Connect the doc <a className={utilStyles.launch} href="https://www.connectthedoc.com/">Launch</a></h3>
        <Image className={utilStyles.contentImg} src="/images/logos/ctd-logo-example.jpg" width={960} height={540} alt="Smartt logo"/><br/>
        </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}

