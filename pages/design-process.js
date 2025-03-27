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
      <p>My Design Process aims to answer the question being asked. What's missing from a business? Why do people need it? How should it be presented? 
        Is it a product, a brand identity problem, a communication issue? The final deliverable is the agreed upon solution; an app, a website or a brand asset.
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
        
        <h2>Design Method</h2>
        <p>The Design Method below are the usual steps I employ to create a design artifact.  The amount of time spent on each is dependent on the complexity of the problem. 
            The final deliverables are usually myriad derived from the work put in at each stage. </p>
        <Image    
                           className={utilStyles.articleImg}
                           priority
                           src="/images/illustration/design-method.svg"
                           height={1080}
                           width={1920}
                           alt="Logo"
                         />

        <h2>Design Loop</h2>
        <p>During each step the design loop below is used. This in theory prevents projects from going off track and buttresses alignment between the client/ creative team. 
            It’s important to show work often, receive feedback and iterate on the feedback. 
           After a few rounds I can usually knuckle down and deliver a polished version of what’s required, meeting expectations, before moving onto the next step. </p>
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


