import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.blog}>
          <p>Hi, I’m Paudy.</p>

          <p>
            I'm a designer of things from Ireland. I specialize in Branding, UI,
            Interaction Design and Storytelling. My abode is presently
            Vancouver, British Columbia.
          </p>

          <p>
            To learn more about me read
            <Link href="/my-design-story"> My Design Story.</Link>
          </p>
        </div>
        <br />
        <div className={utilStyles.mainMenuParent}>
          <Link className={utilStyles.mainMenu} href="/logos">
            Logos
          </Link>
          <Link className={utilStyles.mainMenu} href="/icons">
            Icons
          </Link>
          <Link className={utilStyles.mainMenu} href="/branding">
            Branding
          </Link>
          <Link className={utilStyles.mainMenu} href="/ui">
            UI
          </Link>
          <Link className={utilStyles.mainMenu} href="/animation">
            Animation
          </Link>
          <Link className={utilStyles.mainMenu} href="/illustration">
            Illustration
          </Link>
          <Link className={utilStyles.mainMenu} href="/print">
            Print
          </Link>
          <Link className={utilStyles.mainMenu} href="/miscellaneous">
            Miscellaneous
          </Link>
        </div>
      </section>
    </Layout>
  );
}
