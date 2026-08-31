// pages/case-studies.js — the file index.
// Front matter for the academic sheets: the same index head as /gallery,
// then a numbered ledger — one hairline row per study, mono meta, notched
// mono thumbnail. Deliberately not the homepage plates band.
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '@/components/Layout';
import { caseStudyLinks } from '@/components/NavData';

const CaseStudiesPage = () => {
  return (
    <Layout>
      <Head>
        <title>{`Case Studies - ${siteTitle}`}</title>
        <meta
          name="description"
          content="Four long-form design case studies — branding, UI, and marketing across the MechWarrior franchise, from brief to shipped result."
        />
      </Head>

      <header className="work-index-head">
        <div className="band-label">
          <span className="margin-label">CS / Index</span>
        </div>
        <div className="work-index-main">
          <span className="eyebrow">Case Studies</span>
          <h1 className="work-index-title">The case files</h1>
          <p className="work-index-desc">
            Four long-form studies from one franchise — the brief, the drawings,
            and what shipped. Read them like lab notes.
          </p>
        </div>
        <div className="work-index-stats">
          <div className="about-stat">
            <span className="about-stat-number">
              {String(caseStudyLinks.length).padStart(2, '0')}
            </span>
            <span className="about-stat-unit">Studies</span>
          </div>
          <div className="about-stat-rule" aria-hidden="true" />
          <div className="about-stat-meta">
            2013 — 2024
            <br />
            ONE FRANCHISE
          </div>
        </div>
      </header>

      <ul className="cs-index" role="list">
        {caseStudyLinks.map((study) => (
          <li key={study.href}>
            <Link href={study.href} className="cs-index-row">
              <span className="cs-index-num" aria-hidden="true">
                {study.num}
              </span>
              <span className="cs-index-body">
                <span className="cs-index-title">{study.label}</span>
                <span className="cs-index-summary">{study.summary}</span>
              </span>
              <span className="cs-index-meta">
                <span>{study.client}</span>
                <span>{study.year}</span>
                <span>{study.discipline}</span>
              </span>
              <span className="cs-index-thumb notch">
                <Image
                  src={study.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 25vw"
                  className="cs-index-image"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="cs-index-foot">
        <Link href="/gallery" className="work-galleries-note">
          <svg
            className="nav-cue"
            width="14"
            height="14"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <polygon points="50,20 75.98,65 24.02,65" fill="currentColor" />
          </svg>
          <span>Six galleries behind these</span>
        </Link>
      </div>
    </Layout>
  );
};

export default CaseStudiesPage;
