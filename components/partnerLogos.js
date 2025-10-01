import { useIntersectionObserver } from './intersectionObserver';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

const PartnerLogos = () => {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.1 });
  const [ref4, isVisible4] = useIntersectionObserver({ threshold: 0.1 });
  const [ref5, isVisible5] = useIntersectionObserver({ threshold: 0.1 });
  const [ref6, isVisible6] = useIntersectionObserver({ threshold: 0.1 });
  const [ref7, isVisible7] = useIntersectionObserver({ threshold: 0.1 });
  const [ref8, isVisible8] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div className={utilStyles.partnerLogosContainer}>
      <h1>Clients</h1>
      <ul className={utilStyles.partnerLogos}>
        <li ref={ref1} className={isVisible1 ? utilStyles.visible : ''}>
          <Image
            priority
            src="/images/logos/partners/pgi.svg"
            height={150}
            width={200}
            alt="PGI Logo"
          />
        </li>
        <li ref={ref2} className={isVisible2 ? utilStyles.visible : ''}>
          <Image
            priority
            src="/images/logos/partners/mw5.svg"
            height={150}
            width={200}
            alt="MW5 Logo"
          />
        </li>
        <li ref={ref3} className={isVisible3 ? utilStyles.visible : ''}>
          <Image
            priority
            src="/images/logos/partners/clans.svg"
            height={150}
            width={200}
            alt="Clans Logo"
          />
        </li>
        <li ref={ref4} className={isVisible4 ? utilStyles.visible : ''}>
          <Image
            priority
            src="/images/logos/partners/mwo.svg"
            height={150}
            width={200}
            alt="MWO Logo"
          />
        </li>
        <li ref={ref5} className={isVisible5 ? utilStyles.visible : ''}>
          <Image
            priority
            src="/images/logos/partners/smartt.svg"
            height={150}
            width={200}
            alt="Smartt Logo"
          />
        </li>
        <li ref={ref6} className={isVisible6 ? utilStyles.visible : ''}>
          <Image
            priority
            src="/images/logos/partners/ctd.svg"
            height={150}
            width={200}
            alt="CTD Logo"
          />
        </li>
        <li ref={ref7} className={isVisible7 ? utilStyles.visible : ''}>
          <Image
            priority
            src="/images/logos/partners/columbia.svg"
            height={150}
            width={200}
            alt="Columbia Logo"
          />
        </li>
        <li ref={ref8} className={isVisible8 ? utilStyles.visible : ''}>
          <Image
            priority
            src="/images/logos/partners/kwc.svg"
            height={150}
            width={200}
            alt="KWC Logo"
          />
        </li>
      </ul>
    </div>
  );
};

export default PartnerLogos;
