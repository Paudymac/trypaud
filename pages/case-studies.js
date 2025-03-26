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
            <a className={utilStyles.caseStudy} href="/case-studies/ui-mwo-product-pages">
              <h3>UI for MWO Product Pages</h3>
            </a>
            <a className={utilStyles.caseStudy} href="/case-studies/mechcon-design-system">
              <h3>Mech_Con Design System</h3>
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