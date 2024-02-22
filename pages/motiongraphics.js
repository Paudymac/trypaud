import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';

export default function MotionGraphics({ allPostsData }) {
  return (
    <Layout home>
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Motion Graphics</h1>
        <h3>Solaris Showdown Logo</h3>
        <div className={utilStyles.video}>
        <video width="560" height="315" controls>
        <source src="/video/ss-dlc6-logo.mp4" type="video/mp4" />
        </video></div>
        <h3>Mechwarrior 5 Clans Teaser Trailer</h3>
        <div className={utilStyles.video}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rYZwO5f9yk4?si=o8egxfFpA8oi-UhB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <h3>Mechwarrior 5 DLC 5 Promo Trailer</h3>
        <div className={utilStyles.video}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XfiI-BJnP2I?si=7_CLiuvzMrflRHjj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <br />
        <h3>Piranha Games Logo</h3>
        <div className={utilStyles.video}>
        <video width="560" height="315" controls>
          <source src="/video/piranha-logo-sound.mp4" type="video/mp4" />
        </video></div>
        <a href="/">home</a>
        </section>
      </Layout>
    );
}
