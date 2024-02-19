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
        <h3>Colombia College</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/cc-logo-example.jpg" width={960} height={540} alt="Call to arms"/><br/>
        <h3>Smartt</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/smartt-logo-example.jpg" width={960} height={540} alt="Smartt logo"/><br/>
        <h3>MechWarrior 5</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/mw5-logo-example.jpg" width={960} height={540} alt="mechwarrior 5 logo"/><br/>
        <h3>MechCon</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/mc-logo-example.jpg" width={960} height={540} alt="mechcon logo"/><br/>
        <h3>Heroes of the Innersphere (MW5 DLC)</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/hotis-logo-example.jpg" width={960} height={540} alt="Heroes of the Innersphere logo"/><br/>
        <h3>Legends of the Kestrel Lancers (MW5 DLC)</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/lotkl-logo-example.jpg" width={960} height={540} alt="Legends of the Kestrel Lancers logo"/><br/>
        <h3>Call to Arms (MW5 DLC)</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/cta-logo-example.jpg" width={960} height={540} alt="Call to Arms logo"/><br/>
        <h3>Rise of Rasalhague (MW5 DLC)</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/ror-logo-example.jpg" width={960} height={540} alt="Rise of Rasalhague logo"/><br/>
        <h3>MechWarrior Online Legends</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/mwol-logo-example.jpg" width={960} height={540} alt="MechWarrior Online Legends logo"/><br/>
        <h3>The Dragons Gambit (MW5 DLC)</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/tdg-logo-example.jpg" width={960} height={540} alt="The Dragons Gambit logo"/><br/>
        <h3>Mechwarrior 5 Clans</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/mw5-clans-logo-example.jpg" width={960} height={540} alt="Mechwarrior 5 Clans logo"/><br/>
        <a href="/">home</a>
        </section>
      </Layout>
    );
}

