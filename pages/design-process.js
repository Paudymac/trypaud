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
      <section className={utilStyles.articleSection}>
      <h1>Design Process</h1>
      <p>The answer is in the question asked. What's missing from a business? Why do people need it? How should it be presented? 
        Is it a product, a brand identity problem or a communication issue? The final deliverable is the agreed upon solution; an app, a website or a brand asset.
        Every design solution falls under the 3 spheres. The subjective field of creativity is made from the collaborative experience of the client / creative team relationship working within the spheres; which is always unique at that moment in time. 
        Clients and creatives bring their own subjective realities to every project. A good design process distills the most objective truth and presents a clear path towards a successful end result.
     
      </p>
      <Image    
                           className={utilStyles.articleImg}
                           priority
                           src="/images/illustration/design-philosophy.svg"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />
        
        <h1>Design Method</h1>
        <Image    
                           className={utilStyles.articleImg}
                           priority
                           src="/images/illustration/design-method.svg"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />

        <h1>Design Loop</h1>
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


