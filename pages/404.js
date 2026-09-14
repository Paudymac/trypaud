import Layout from '@/components/Layout';
import Link from 'next/link';
import { ArrowLeftIcon } from '@/components/NavIcons';

export default function Custom404() {
  return (
    <Layout seo={{ title: '404', noindex: true }}>
      <div
        className="container"
        style={{
          textAlign: 'center',
          paddingBlock: 'var(--space-32)',
        }}
      >
        <h1
          style={{
            fontSize: 'var(--text-6xl)',
            marginBottom: 'var(--space-4)',
          }}
        >
          404
        </h1>
        <p
          className="text-secondary text-lg"
          style={{ marginBottom: 'var(--space-8)' }}
        >
          There is no page at this address.
        </p>
        <Link href="/" className="btn btn-accent">
          <ArrowLeftIcon className="icon-back" width={14} height={14} />
          Back to the homepage
        </Link>
      </div>
    </Layout>
  );
}
