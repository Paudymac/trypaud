import Hero from '@/components/Hero';
import PartnerLogos from '@/components/PartnerLogos';
import CaseStudies from '@/components/CaseStudies';
import AboutMe from '@/components/AboutMe';
import Galleries from '@/components/Galleries';
import ContactForm from '@/components/ContactForm';
import SiteHeader from './_components/SiteHeader';
import SiteFooter from './_components/SiteFooter';

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content" className="page-grid" role="main">
        <Hero />

        <PartnerLogos />
        <hr className="home-rule bleed-wide" />

        <CaseStudies />
        <hr className="home-rule bleed-wide" />

        <AboutMe />
        <hr className="home-rule bleed-wide" />

        <section
          id="collaborate"
          className="form-section bleed-wide"
          aria-label="Contact form"
        >
          <header className="home-section-header">
            <div className="home-section-header-text">
              <span className="home-section-eyebrow">Contact</span>
              <h2 className="home-section-title">Let&apos;s Collaborate</h2>
            </div>
          </header>
          <div className="form-container">
            <ContactForm />
          </div>
        </section>
        <hr className="home-rule bleed-wide" />

        <Galleries />
      </main>

      <SiteFooter />
    </>
  );
}
