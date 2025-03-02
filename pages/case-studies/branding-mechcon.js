import Head from 'next/head';
import styles from '../../components/caseStudy.module.css';
import stylesLayout from '../../components/layout.module.css';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';
import scrollTo from '../../components/scrollTo';



export default function CaseStudy({  }) {

  const { scrollToTarget } = scrollTo({ targetId: 'case-study' });

  return (
    <Layout home>
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={styles.caseStudyImgContainer}>
          <div className={styles.caseStudyIntro}>
          <h1>Branding Mech_Con</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <button onClick={scrollToTarget} className={`${stylesLayout.primaryBtn} ${styles.readBtn}`}>read</button>
          </div>
           <Image className={styles.caseStudyImg}
                           priority
                           src="/images/case-studies/mechcon-poster-img-lg-case-study2.webp"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
        </div>
    
       
        <div className={styles.caseStudyContainer}>
        <article id="case-study">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
          <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
          <p className={styles.caseStudiesBtnContainer}>
          <a href="/case-studies" className={`${stylesLayout.primaryBtn} ${utilStyles.backToBtn}`}>&larr; Case Studies</a>
          </p>
        </article>
        </div>
        </section>
        
      </Layout>
    );
}

