import { useIntersectionObserver } from './intersectionObserver';
import utilStyles from '../styles/utils.module.css';

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
          <a ref={ref1} className={`${utilStyles.mainMenu} ${isVisible1 ? utilStyles.visible : ''}`} href="/ui-web">UI / Web</a>
          <a ref={ref2} className={`${utilStyles.mainMenu} ${isVisible2 ? utilStyles.visible : ''}`} href="/logos">Logos</a>
          <a ref={ref3} className={`${utilStyles.mainMenu} ${isVisible3 ? utilStyles.visible : ''}`} href="/branding">Branding</a>
          <a ref={ref4} className={`${utilStyles.mainMenu} ${isVisible4 ? utilStyles.visible : ''}`} href="/icons">Icons</a>
          <a ref={ref5} className={`${utilStyles.mainMenu} ${isVisible5 ? utilStyles.visible : ''}`} href="/animation">Animation</a>
          <a ref={ref6} className={`${utilStyles.mainMenu} ${isVisible6 ? utilStyles.visible : ''}`} href="/illustration">Illustration</a>
          </nav>
          </div>
      );
    };

    export default Galleries;