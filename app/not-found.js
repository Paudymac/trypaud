import Link from 'next/link';
import SiteHeader from './_components/SiteHeader';
import SiteFooter from './_components/SiteFooter';
import { ArrowLeftIcon } from '@/components/NavIcons';

/**
 * App Router 404. Unmatched routes resolve here (not pages/404.js) because
 * the app directory owns the not-found boundary — pages/404.js only serves
 * hard 404s raised from pages-router routes themselves.
 */
export const metadata = { title: '404' };

export default function NotFound() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="sheet" role="main">
        <div
          className="container"
          style={{ textAlign: 'center', paddingBlock: 'var(--space-32)' }}
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
            Nothing at these coordinates.
          </p>
          <Link href="/" className="btn btn-accent">
            <ArrowLeftIcon className="icon-back" width={14} height={14} />
            Take me home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
