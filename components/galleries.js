import { useIntersectionObserver } from './intersectionObserver';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

const Galleries = () => {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.1 });
  const [ref4, isVisible4] = useIntersectionObserver({ threshold: 0.1 });
  const [ref5, isVisible5] = useIntersectionObserver({ threshold: 0.1 });
  const [ref6, isVisible6] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className={utilStyles.galleryMenuConatiner}>
      <h1>Galleries</h1>
      <nav className={utilStyles.mainMenuParent}>
        <a
          ref={ref1}
          className={`${utilStyles.mainMenu} ${isVisible1 ? utilStyles.visible : ''}`}
          href="/ui-web"
        >
          <Image
            priority
            src="/images/icons/gallery/ui-gallery-icon.svg"
            height={64}
            width={64}
            className={utilStyles.mainMenuImg}
          />
          UI / Web
        </a>
        <a
          ref={ref2}
          className={`${utilStyles.mainMenu} ${isVisible2 ? utilStyles.visible : ''}`}
          href="/logos"
        >
          <Image
            priority
            src="/images/icons/gallery/logos-gallery-icon.svg"
            height={64}
            width={64}
            className={utilStyles.mainMenuImg}
          />
          Logos
        </a>
        <a
          ref={ref3}
          className={`${utilStyles.mainMenu} ${isVisible3 ? utilStyles.visible : ''}`}
          href="/branding"
        >
          <Image
            priority
            src="/images/icons/gallery/branding-gallery-icon.svg"
            height={64}
            width={64}
            className={utilStyles.mainMenuImg}
          />
          Branding
        </a>
        <a
          ref={ref4}
          className={`${utilStyles.mainMenu} ${isVisible4 ? utilStyles.visible : ''}`}
          href="/icons"
        >
          <Image
            priority
            src="/images/icons/gallery/icons-gallery-icon.svg"
            height={64}
            width={64}
            className={utilStyles.mainMenuImg}
          />
          Icons
        </a>
        <a
          ref={ref5}
          className={`${utilStyles.mainMenu} ${isVisible5 ? utilStyles.visible : ''}`}
          href="/animation"
        >
          <Image
            priority
            src="/images/icons/gallery/animation-gallery-icon.svg"
            height={64}
            width={64}
            className={utilStyles.mainMenuImg}
          />
          Animation
        </a>
        <a
          ref={ref6}
          className={`${utilStyles.mainMenu} ${isVisible6 ? utilStyles.visible : ''}`}
          href="/illustration"
        >
          <Image
            priority
            src="/images/icons/gallery/illustration-gallery-icon.svg"
            height={64}
            width={64}
            className={utilStyles.mainMenuImg}
          />
          Illustration
        </a>
      </nav>
    </div>
  );
};

export default Galleries;
