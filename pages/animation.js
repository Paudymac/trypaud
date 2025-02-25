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
        <h1>Animation</h1>

        <span className={utilStyles.datePortfolio}>2024</span>
        <h3 className={utilStyles.header3Portfolio}>Solaris Showdown Launch Trailer  <a className={utilStyles.launch} href="https://www.youtube.com/embed/fMzvadaovKo?si=B96t4-RfiuYRTGn5">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Motion Graphics / Cards / Typography ]</p>
        <div className={utilStyles.video}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fMzvadaovKo?si=B96t4-RfiuYRTGn5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        <br />
        <span className={utilStyles.datePortfolio}>2023</span>
        <h3 className={utilStyles.header3Portfolio}>Mechwarrior 5 Clans Teaser Trailer <a className={utilStyles.launch} href="https://www.youtube.com/embed/rYZwO5f9yk4?si=o8egxfFpA8oi-UhB">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Motion Graphics / Cards / Typography ]</p>
        <div className={utilStyles.video}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rYZwO5f9yk4?si=o8egxfFpA8oi-UhB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        <br />
        <span className={utilStyles.datePortfolio}>2022</span>
        <h3 className={utilStyles.header3Portfolio}>Mechwarrior 5 DLC 5 Rise of Rasalhague Promo Trailer<a className={utilStyles.launch} href="https://www.youtube.com/embed/XfiI-BJnP2I?si=7_CLiuvzMrflRHjj">Launch</a></h3>
        <p className={utilStyles.descriptionPortfolio}> [ Motion Graphics / Cards / Typography ]</p>
        <div className={utilStyles.video}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XfiI-BJnP2I?si=7_CLiuvzMrflRHjj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

        <br />
        <span className={utilStyles.datePortfolio}>2018</span>
        <h3 className={utilStyles.header3Portfolio}>MechCon Logo Animation</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Motion Graphics / Design / Branding]</p>
        <div className={utilStyles.video}>
        <video width="560" height="315" controls>
        <source src="/video/mechcon-logo-animation.mp4" type="video/mp4" />
        </video></div>

        <br />
        <span className={utilStyles.datePortfolio}>2017</span>
        <h3 className={utilStyles.header3Portfolio}>MWO Tournamnt Logo Animation</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Motion Graphics / Design / Branding]</p>
        <div className={utilStyles.video}>
        <video width="560" height="315" controls>
        <source src="/video/mwowc-pause-screen-2017.mp4" type="video/mp4" />
        </video></div>

        <br />
        <span className={utilStyles.datePortfolio}>2016</span>
        <h3 className={utilStyles.header3Portfolio}>Piranha Games Bumper</h3>
        <p className={utilStyles.descriptionPortfolio}> [ Motion Graphics / Design / Branding]</p>
        <div className={utilStyles.video}>
        <video width="560" height="315" controls>
          <source src="/video/piranha-logo-sound.mp4" type="video/mp4" />
        </video></div>
        
        </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}
