import { useIntersectionObserver } from './useIntersectionObserver';
import utilStyles from '@/styles/utils.module.css';

const AboutMe = () => {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className={utilStyles.aboutMeContainer}>
      <h1>About Me</h1>
      <div className={utilStyles.aboutMe}>
        <div
          ref={ref1}
          className={`${utilStyles.aboutMeImgContainer} ${isVisible1 ? utilStyles.visible : ''}`}
        >
          <div className={utilStyles.aboutMeImg}></div>
        </div>

        <div
          ref={ref2}
          className={`${utilStyles.aboutMeDescipt} ${isVisible2 ? utilStyles.visible : ''}`}
        >
          <h2 className={utilStyles.aboutMeHeadline}>
            Creativity & Design Good
          </h2>
          <p className={utilStyles.aboutMeSummary}>
            I’ve always sketched and coloured from when I was small. Being
            creative is something I find innate. My 17 year design journey has
            allowed me to wear many hats concurrently, making me a versatile
            designer with an eye for layout and identity mixed in with technical
            acumen through the lens of a user centered philosophy. I believe
            good design helps people. Like holding a door open and letting
            someone in. Great design keeps them coming back.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
