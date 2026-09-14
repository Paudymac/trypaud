import Hero from '@/components/Hero';
import CaseStudies from '@/components/CaseStudies';
import AboutMe from '@/components/AboutMe';
import ContactForm from '@/components/ContactForm';
import AmbientBackground from '@/components/ui/AmbientBackground';
import SiteHeader from './_components/SiteHeader';
import SiteFooter from './_components/SiteFooter';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, absoluteUrl } from '@/lib/site';

/* Structured data for a name search: who the site belongs to and what
   they do. Only facts already on the page — the same portrait, role,
   email and LinkedIn link — so nothing here can drift from the copy. */
const person = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Padraic McAteer',
  url: SITE_URL,
  image: absoluteUrl('/images/profile-padraic.webp'),
  jobTitle: 'Senior designer and front-end developer',
  email: 'mailto:paudy@trypaud.com',
  address: { '@type': 'PostalAddress', addressCountry: 'IE' },
  sameAs: ['https://www.linkedin.com/in/padraic-mcateer-trypaud/'],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    person,
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      author: { '@id': person['@id'] },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />

      {/* One continuous sheet over the ambient space backdrop. */}
      <main id="main-content" className="sheet" role="main">
        <AmbientBackground />

        <Hero />
        <hr className="sheet-rule" />

        <CaseStudies />
        <hr className="sheet-rule" />

        <AboutMe />

        <section id="collaborate" className="contact-band" aria-label="Contact">
          <div className="contact-head">
            <div className="contact-copy">
              <h2 className="contact-title">Get in touch.</h2>
              <p className="contact-sub">
                Tell me about the project. I usually reply within a day.{' '}
                <a href="mailto:paudy@trypaud.com">paudy@trypaud.com</a>
              </p>
            </div>
          </div>
          <div className="contact-form-row">
            <div className="contact-form-col">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
