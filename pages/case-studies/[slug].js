// pages/case-studies/[slug].js

import Layout from '../../components/layout';

const CaseStudy = ({ slug }) => {
  // Fetch case study data based on the slug
  const caseStudyData = {
    'case-study-1': {
      title: 'Case Study 1: UI/Web Design',
      description: 'Details about the UI/Web Design project...',
    },
    'case-study-2': {
      title: 'Case Study 2: Branding',
      description: 'Details about the Branding project...',
    },
  };

  const caseStudy = caseStudyData[slug];

  if (!caseStudy) {
    return <div>Case study not found</div>;
  }

  return (
    <Layout>
      <div>
        <h1>{caseStudy.title}</h1>
        <p>{caseStudy.description}</p>
      </div>
    </Layout>
  );
};

export default CaseStudy;

// Fetch the slug for static generation
// export async function getStaticPaths() {
//   const paths = [
//     { params: { slug: 'ux-mwo-product-pages' } },
//     { params: { slug: 'branding-mechcon' } },
//   ];

//   return {
//     paths,
//     fallback: false, // Show 404 if the slug doesn't exist
//   };
// }

// Fetch case study data for static generation
// export async function getStaticProps({ params }) {
//   return {
//     props: {
//       slug: params.slug,
//     },
//   };
// }
