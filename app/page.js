import Hero from '@/components/Hero';
import CaseStudies from '@/components/CaseStudies';
import AboutMe from '@/components/AboutMe';
import ContactForm from '@/components/ContactForm';
import AmbientBackground from '@/components/ui/AmbientBackground';
import SiteHeader from './_components/SiteHeader';
import SiteFooter from './_components/SiteFooter';

export default function HomePage() {
  return (
    <>
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
              <h2 className="contact-title">Go on — try Paud.</h2>
              <p className="contact-sub">
                Tell me what you&apos;re making. Usually back within a day.{' '}
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
