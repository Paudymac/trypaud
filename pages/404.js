import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout>
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
          Page not found
        </p>
        <Link href="/" className="btn btn-primary">
          Back to home
        </Link>
      </div>
    </Layout>
  );
}
