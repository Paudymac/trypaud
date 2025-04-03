// pages/case-studies.js
import Layout, { siteTitle } from '../components/layout';
import CaseStudies from '../components/caseStudies';


const CaseStudiesPage = () => {
  const caseStudies = [
    { slug: 'ux-mwo-product-pages', title: 'Case Study 1: UI/Web Design' },
    { slug: 'branding-mechcon', title: 'Case Study 2: Branding' },
  ];

  return (
    <Layout>
      
      <CaseStudies />

    </Layout>
  );
};

export default CaseStudiesPage;