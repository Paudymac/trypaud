import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '@/components/Layout';
import Image from 'next/image';
import useScrollTo from '@/components/useScrollTo';
import Link from 'next/link';

export default function CaseStudyTemplate({
  title,
  description,
  heroImage,
  children,
}) {
  const { scrollToTarget } = useScrollTo({ targetId: 'case-study' });
  const [readingProgress, setReadingProgress] = useState(0);

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setReadingProgress(Math.min(progress, 100));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <Head>
        <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
      </Head>

      {/* Reading progress bar */}
      <div
        className="reading-progress"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Reading progress"
      />

      <section>
        {/* Hero image */}
        <div className="case-study-hero">
          <Image
            className="case-study-hero-img"
            priority
            src={heroImage}
            height={1080}
            width={1920}
            alt={title}
          />
          <div className="case-study-intro">
            <h1>{title}</h1>
            <p>{description}</p>
            <button
              onClick={scrollToTarget}
              className="btn btn-primary"
              type="button"
            >
              Read
            </button>
          </div>
        </div>

        {/* Article content */}
        <article id="case-study" className="case-study-article">
          {children}

          <div className="case-study-back">
            <Link href="/case-studies" className="btn btn-primary">
              <span aria-hidden="true">&larr;</span> Case Studies
            </Link>
          </div>
        </article>
      </section>
    </Layout>
  );
}
