import { useIntersectionObserver } from './intersectionObserver';
import utilStyles from '../styles/utils.module.css';

const CaseStudies = () => {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.1 });
  const [ref4, isVisible4] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className={utilStyles.caseStudiesContainer}>
      <h1>Case Studies</h1>
      <div className={utilStyles.caseStudies}>
        <a
          ref={ref1}
          className={`${utilStyles.caseStudy} ${utilStyles.caseStudy4} ${isVisible1 ? utilStyles.visible : ''}`}
          href="/case-studies/design-of-clans"
        >
          <h3>Design of Clans</h3>
        </a>
        <a
          ref={ref2}
          className={`${utilStyles.caseStudy} ${utilStyles.caseStudy3} ${isVisible2 ? utilStyles.visible : ''}`}
          href="/case-studies/mw5-mercenaries"
        >
          <h3>MW5 Mercenaries Marketing</h3>
        </a>
        <a
          ref={ref3}
          className={`${utilStyles.caseStudy} ${utilStyles.caseStudy1} ${isVisible3 ? utilStyles.visible : ''}`}
          href="/case-studies/ui-mwo-product-pages"
        >
          <h3>UI for MWO Product Pages</h3>
        </a>
        <a
          ref={ref4}
          className={`${utilStyles.caseStudy} ${utilStyles.caseStudy2} ${isVisible4 ? utilStyles.visible : ''}`}
          href="/case-studies/mechcon-design-system"
        >
          <h3>Mech_Con Design System</h3>
        </a>
      </div>
    </div>
  );
};

export default CaseStudies;
