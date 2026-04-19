import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '@/components/Layout';
import { ArrowLeftIcon, ArrowUpRightIcon } from '@/components/NavIcons';

export default function CaseStudyTemplate({
  title,
  description,
  heroImage,
  year,
  client,
  roles,
  launchUrl,
  nextStudy,
  children,
}) {
  const [readingProgress, setReadingProgress] = useState(0);

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

      <div
        className="reading-progress"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Reading progress"
      />

      {/* HERO */}
      <section className="cs-hero" aria-labelledby="cs-title">
        <Image
          className="cs-hero-image"
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="cs-hero-overlay" aria-hidden="true" />
        <div className="cs-hero-content">
          <div className="cs-hero-main">
            <span className="cs-eyebrow">
              Case Study{year ? ` · ${year}` : ''}
            </span>
            <h1 id="cs-title" className="cs-title">
              {title}
            </h1>
            {description && <p className="cs-lead">{description}</p>}
          </div>
          {year && (
            <aside className="cs-hero-year" aria-hidden="true">
              {year}
            </aside>
          )}
        </div>
      </section>

      {/* META BAR */}
      {(client || year || roles?.length || launchUrl) && (
        <aside className="cs-meta" aria-label="Project details">
          <dl className="cs-meta-list">
            {client && (
              <div className="cs-meta-row">
                <dt>Client</dt>
                <dd>{client}</dd>
              </div>
            )}
            {year && (
              <div className="cs-meta-row">
                <dt>Year</dt>
                <dd>{year}</dd>
              </div>
            )}
            {roles?.length > 0 && (
              <div className="cs-meta-row cs-meta-row-wide">
                <dt>Role</dt>
                <dd>{roles.join(' · ')}</dd>
              </div>
            )}
            {launchUrl && (
              <div className="cs-meta-row">
                <dt>Launch</dt>
                <dd>
                  <a
                    href={launchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-meta-link"
                  >
                    View live
                    <ArrowUpRightIcon width={14} height={14} />
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </aside>
      )}

      {/* ARTICLE */}
      <article id="case-study" className="cs-article">
        {children}
      </article>

      {/* NEXT STUDY */}
      {nextStudy && (
        <section className="cs-next" aria-label="Next case study">
          <Link href={nextStudy.href} className="cs-next-link">
            <span className="cs-next-eyebrow">Next case study</span>
            <h3 className="cs-next-title">
              {nextStudy.title}
              <span className="cs-next-arrow" aria-hidden="true">
                <ArrowUpRightIcon width={28} height={28} />
              </span>
            </h3>
          </Link>
        </section>
      )}

      {/* BACK */}
      <div className="cs-back">
        <Link href="/case-studies" className="btn btn-secondary">
          <ArrowLeftIcon width={14} height={14} />
          All case studies
        </Link>
      </div>
    </Layout>
  );
}
