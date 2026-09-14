import Link from 'next/link';
import { useRouter } from 'next/router';
import { Children, isValidElement, useRef } from 'react';
import Layout from '@/components/Layout';
import { ImageMapContext } from '@/lib/staticImage';
import { galleryLinks, allWorkItem } from '@/components/NavData';
import useScrollEdges from '@/components/useScrollEdges';

const SWITCH_ITEMS = [allWorkItem, ...galleryLinks];

export default function PortfolioGalleryTemplate({
  title,
  description,
  /* The page's generated static-import map (lib/image-imports/<page>.js);
     PortfolioItem thumbnails resolve against it via context */
  imageMap = null,
  children,
}) {
  const router = useRouter();
  // Same sideways-scroll edge cue as the /gallery filter row
  const switchRef = useRef(null);
  useScrollEdges(switchRef);

  // Stats for the head's data column, read straight off the PortfolioItems
  // so the numbers can never drift from the page content.
  const projects = Children.toArray(children).filter(isValidElement);
  let plateCount = 0;
  let minYear = null;
  let maxYear = null;
  for (const project of projects) {
    if (Array.isArray(project.props.images)) {
      plateCount += project.props.images.length;
    }
    const years = String(project.props.date ?? '').match(/\d{4}/g);
    if (years) {
      for (const year of years.map(Number)) {
        if (minYear === null || year < minYear) minYear = year;
        if (maxYear === null || year > maxYear) maxYear = year;
      }
    }
  }

  return (
    <Layout seo={{ title, description }}>
      <ImageMapContext.Provider value={imageMap}>
        <header className="work-index-head">
          <div className="band-label">
            <span className="margin-label">W / Gallery</span>
          </div>
          <div className="work-index-main">
            <span className="eyebrow">Gallery</span>
            {title && <h1 className="work-index-title">{title}</h1>}
            {description && <p className="work-index-desc">{description}</p>}
          </div>
          {projects.length > 0 && (
            <div className="work-index-stats">
              <div className="about-stat">
                <span className="about-stat-number">{projects.length}</span>
                <span className="about-stat-unit">
                  {projects.length === 1 ? 'Project' : 'Projects'}
                </span>
              </div>
              <div className="about-stat-rule" aria-hidden="true" />
              <div className="about-stat-meta">
                {minYear !== null &&
                  (minYear === maxYear ? minYear : `${minYear} — ${maxYear}`)}
                {plateCount > 0 && (
                  <>
                    <br />
                    {plateCount} PLATES
                  </>
                )}
              </div>
            </div>
          )}
        </header>

        {/* Porthole dials — the same instruments as the /gallery filters,
          here as links between the sibling galleries */}
        <nav
          ref={switchRef}
          className="gallery-filters gallery-switch"
          aria-label="Browse galleries"
        >
          {SWITCH_ITEMS.map((item, i) => {
            const isCurrent = router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="porthole-filter"
                aria-current={isCurrent ? 'page' : undefined}
              >
                <span className="porthole-filter-dial" aria-hidden="true">
                  {item.href === '/gallery'
                    ? 'ALL'
                    : String(i).padStart(2, '0')}
                </span>
                <span className="porthole-filter-label">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="portfolio-list">{children}</div>
      </ImageMapContext.Provider>
    </Layout>
  );
}
