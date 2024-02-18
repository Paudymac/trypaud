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
        <h3>Mechwarrior 5 Website</h3>
        <Image className={utilStyles.contentImg} src="/images/ui/mw5-site-example.jpg" width={960} height={540} alt="mw5 site"/><br/>
        <h3>Piranha Games Website</h3>
        <Image className={utilStyles.contentImg} src="/images/ui/piranhagames-site-example.jpg" width={960} height={540} alt="mw5 site"/><br/>
        <h3>Mechcon Website</h3>
        <Image className={utilStyles.contentImg} src="/images/ui/mechcon-site-example.jpg" width={960} height={540} alt="mw5 site"/><br/>
        <h3>MWO Product Pages</h3>
        <Image className={utilStyles.contentImg} src="/images/ui/mwomercs-legends-spitfire.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg} src="/images/ui/mwomercs-longbow.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg} src="/images/ui/mwomercs-warhammeriic.jpg" width={960} height={540} alt="mwo site"/><br/>
        <Image className={utilStyles.contentImg} src="/images/ui/mwomercs-civil-war-escalation.jpg" width={960} height={540} alt="mwo site"/><br/>
        <a href="/">home</a>
        </section>
      </Layout>
    );
}
