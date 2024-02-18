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
        <Image className={utilStyles.contentImg} src="/images/logos/smartt-logo-example.jpg" width={960} height={540} alt="Call to arms"/><br/>
        <h3>MechWarrior5</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/mw5-logo-example.jpg" width={960} height={540} alt="Call to arms"/><br/>
        <h3>MechCon</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/mc-logo-example.jpg" width={960} height={540} alt="Call to arms"/><br/>
        <h3>Heroes of the Innersphere (MW5 DLC)</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/hotis-logo-example.jpg" width={960} height={540} alt="Call to arms"/><br/>
        <h3>Legends of the Kestrel Lancers (MW5 DLC)</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/lotkl-logo-example.jpg" width={960} height={540} alt="Call to arms"/><br/>
        <h3>Call to Arms (MW5 DLC)</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/cta-logo-example.jpg" width={960} height={540} alt="Call to arms"/><br/>
        <h3>Rise of Rasalhague (MW5 DLC)</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/ror-logo-example.jpg" width={960} height={540} alt="Call to arms"/><br/>
        <h3>MechWarrior Online Legends (MW5 DLC)</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/mwol-logo-example.jpg" width={960} height={540} alt="Call to arms"/><br/>
        <h3>The Dragons Gambit (MW5 DLC)</h3>
        <Image className={utilStyles.contentImg} src="/images/logos/tdg-logo-example.jpg" width={960} height={540} alt="Call to arms"/><br/>
        <a href="/">home</a>
        
        </section>
      </Layout>
    );
}

