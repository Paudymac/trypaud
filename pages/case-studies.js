// pages/case-studies.js

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const CaseStudiesPage = () => {
  const caseStudies = [
    { slug: 'ux-mwo-product-pages', title: 'Case Study 1: UI/Web Design' },
    { slug: 'branding-mechcon', title: 'Case Study 2: Branding' },
  ];

  return (
    <Layout>
      <section>
<h1>Case Studies</h1>

          
          <div className={utilStyles.caseStudies}>
            <a className={utilStyles.caseStudy} href="/case-studies/ux-mwo-product-pages">
              <h3>UX of MWO Product Pages</h3>
            </a>
            <a className={utilStyles.caseStudy} href="/case-studies/branding-mechcon">
              <h3>Branding for Mech_Con</h3>
            </a>
          </div>
</section>

      {/* <div>
        <h1>Case Studies</h1>
        <p>Explore our detailed case studies below.</p>
        <ul>
          {caseStudies.map((caseStudy) => (
            <li key={caseStudy.slug}>
              <Link href={`/case-studies/${caseStudy.slug}`}>
                {caseStudy.title}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </Layout>
  );
};

export default CaseStudiesPage;