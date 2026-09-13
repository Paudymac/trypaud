import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '@/components/Layout';
import { caseStudyLinks } from '@/components/NavData';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
} from '@/components/NavIcons';

/**
 * CaseStudyTemplate — the academic sheet.
 * Dark banner (light text in both themes) → mono meta strip → the article
 * as numbered sections on the 12-column grid (numbering is CSS counters in
 * case-study.css — each top-level <div> child is one section) → next-study
 * band. No reading-progress bar: red is signal, never chrome.
 */
export default function CaseStudyTemplate({
  index,
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
  // The next-study band announces the next file number; the canonical
  // numbering lives in NavData's caseStudyLinks.
  const nextNum = nextStudy
    ? caseStudyLinks.find((l) => l.href === nextStudy.href)?.num
    : null;

  return (
    <Layout>
      <Head>
        <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
      </Head>

      {/* BANNER */}
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
              Case study{index ? ` ${index}` : ''}
              {year ? ` / ${year}` : ''}
            </span>
            <h1 id="cs-title" className="cs-title">
              {title}
            </h1>
            {description && <p className="cs-lead">{description}</p>}
          </div>
        </div>
      </section>

      {/* META STRIP */}
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
                <dd>{roles.join(' / ')}</dd>
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

      {/* ARTICLE — numbered sections */}
      <article id="case-study" className="cs-article">
        {children}
      </article>

      {/* NEXT STUDY */}
      {nextStudy && (
        <section className="cs-next" aria-label="Next case study">
          <Link href={nextStudy.href} className="cs-next-link">
            <span className="cs-next-eyebrow">
              {nextNum ? `Next — Study ${nextNum}` : 'Next case study'}
            </span>
            <h3 className="cs-next-title">
              {nextStudy.title}
              <span className="cs-next-arrow" aria-hidden="true">
                <ArrowRightIcon width={28} height={28} />
              </span>
            </h3>
          </Link>
        </section>
      )}

      {/* BACK */}
      <div className="cs-back">
        <Link href="/case-studies" className="btn btn-secondary btn-ring">
          <ArrowLeftIcon className="icon-back" width={14} height={14} />
          All case studies
        </Link>
      </div>
    </Layout>
  );
}
