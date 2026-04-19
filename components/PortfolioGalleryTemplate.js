import Head from 'next/head';
import Layout, { siteTitle } from '@/components/Layout';

export default function PortfolioGalleryTemplate({
  title,
  description,
  children,
}) {
  return (
    <Layout>
      <Head>
        <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <header className="portfolio-header">
        <div className="portfolio-header-inner">
          <span className="portfolio-eyebrow">Gallery</span>
          {title && <h1 className="portfolio-title">{title}</h1>}
          {description && (
            <p className="portfolio-description">{description}</p>
          )}
        </div>
      </header>

      <div className="portfolio-list">{children}</div>
    </Layout>
  );
}
