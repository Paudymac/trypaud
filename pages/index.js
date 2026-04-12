import Head from 'next/head';
import Layout, { siteTitle } from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import useScrollTo from '@/components/useScrollTo';
import PartnerLogos from '@/components/PartnerLogos';
import Galleries from '@/components/Galleries';
import CaseStudies from '@/components/CaseStudies';
import AboutMe from '@/components/AboutMe';
import Hero from '@/components/Hero';

export default function Home() {
  const { scrollToTarget } = useScrollTo({ targetId: 'collaborate' });

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Hero — static Artemis II image */}
      <Hero scrollToTarget={scrollToTarget} />

      {/* Main homepage sections */}
      <PartnerLogos />

      <CaseStudies />

      <AboutMe />

      {/* Collaborate / Contact section */}
      <section
        id="collaborate"
        className="form-section"
        aria-label="Contact form"
      >
        <h1>Let&apos;s Collaborate</h1>
        <div className="form-container">
          <ContactForm />
        </div>
      </section>

      <Galleries />
    </Layout>
  );
}
