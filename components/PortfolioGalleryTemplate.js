import Head from 'next/head';
import Layout, { siteTitle } from '@/components/Layout';

export default function PortfolioGalleryTemplate({ title, children }) {
  return (
    <Layout>
      <Head>
        <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
      </Head>
      <section>
        {title && <h1>{title}</h1>}
        {children}
      </section>
    </Layout>
  );
}
