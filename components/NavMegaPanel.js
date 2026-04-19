'use client';

import Link from 'next/link';
import Image from 'next/image';
import { galleryLinks, allWorkItem, caseStudyLinks } from './NavData';
import { ArrowRightIcon } from './NavIcons';

export default function NavMegaPanel({
  openMenu,
  onMouseEnter,
  onMouseLeave,
  onItemClick,
}) {
  const isOpen = openMenu !== null;

  return (
    <div
      className="nav-mega-panel"
      data-open={isOpen}
      aria-hidden={!isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="nav-mega-panel-inner">
        {openMenu === 'gallery' && <GalleryContent onItemClick={onItemClick} />}
        {openMenu === 'caseStudies' && (
          <CaseStudiesContent onItemClick={onItemClick} />
        )}
      </div>
    </div>
  );
}

function GalleryContent({ onItemClick }) {
  return (
    <div className="nav-panel-grid nav-panel-grid-gallery">
      <Link
        href={allWorkItem.href}
        className="nav-panel-feature"
        onClick={onItemClick}
      >
        <div className="nav-panel-feature-icon" aria-hidden="true">
          <allWorkItem.Icon width={28} height={28} />
        </div>
        <div className="nav-panel-feature-text">
          <strong>{allWorkItem.label}</strong>
          <span>{allWorkItem.desc}</span>
        </div>
        <ArrowRightIcon
          className="nav-panel-feature-arrow"
          width={20}
          height={20}
        />
      </Link>

      <div className="nav-panel-items">
        {galleryLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-panel-item"
            onClick={onItemClick}
          >
            <span className="nav-panel-item-icon" aria-hidden="true">
              <link.Icon width={22} height={22} />
            </span>
            <span className="nav-panel-item-text">
              <strong>{link.label}</strong>
              <span>{link.desc}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function CaseStudiesContent({ onItemClick }) {
  return (
    <div className="nav-panel-grid nav-panel-grid-cases">
      <Link
        href="/case-studies"
        className="nav-panel-feature"
        onClick={onItemClick}
      >
        <div className="nav-panel-feature-text">
          <strong>All Case Studies</strong>
          <span>Selected client work with context &amp; outcomes</span>
        </div>
        <ArrowRightIcon
          className="nav-panel-feature-arrow"
          width={20}
          height={20}
        />
      </Link>

      <div className="nav-panel-cases">
        {caseStudyLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-panel-case"
            onClick={onItemClick}
          >
            <div className="nav-panel-case-thumb">
              <Image
                src={link.image}
                alt=""
                fill
                sizes="280px"
                className="nav-panel-case-image"
              />
            </div>
            <div className="nav-panel-case-text">
              <strong>{link.label}</strong>
              <span>{link.desc}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
