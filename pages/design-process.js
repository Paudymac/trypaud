import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';


export default function CaseStudy({  }) {


  return (
    <Layout >
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
      <h1>Design Process</h1>
      <Image    
                           className={utilStyles.articleImg}
                           priority
                           src="/images/illustration/design-philosophy.svg"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
        <Image    
                           className={utilStyles.articleImg}
                           priority
                           src="/images/illustration/design-method.svg"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
         <Image    
                           className={utilStyles.articleImg}
                           priority
                           src="/images/illustration/design-loop.svg"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
               </section>
      </Layout>
    );
}


