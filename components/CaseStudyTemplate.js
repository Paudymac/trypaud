import Head from 'next/head';
import stylesLayout from '@/components/layout.module.css';
import Layout, { siteTitle } from '@/components/Layout';
import utilStyles from '@/styles/utils.module.css';
import styles from '@/components/caseStudy.module.css';
import Image from 'next/image';
import useScrollTo from '@/components/useScrollTo';
import Link from 'next/link';

export default function CaseStudyTemplate({ title, description, heroImage, children }) {
  const { scrollToTarget } = useScrollTo({ targetId: 'case-study' });

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={styles.caseStudyImgContainer}>
          <div className={styles.caseStudyIntro}>
            <h1>{title}</h1>
            <p>{description}</p>
            <button
              onClick={scrollToTarget}
              className={`${stylesLayout.primaryBtn} ${styles.readBtn}`}
            >
              read
            </button>
          </div>
          <Image
            className={styles.caseStudyImg}
            priority
            src={heroImage}
            height={1080}
            width={1920}
            alt={title}
          />
        </div>

        <article id="case-study">
          {children}

          <div className={styles.caseStudyContainer}>
            <p className={stylesLayout.backToBtnContainer}>
              <Link
                href="/case-studies"
                className={`${stylesLayout.primaryBtn} ${utilStyles.backToBtn}`}
              >
                <span className={`${styles.arrowIcoHTF}`}>&#11013;</span> Case Studies
              </Link>
            </p>
          </div>
        </article>
      </section>
    </Layout>
  );
}
