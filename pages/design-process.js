import utilStyles from '@/styles/utils.module.css';
import Layout from '@/components/Layout';
import Image from 'next/image';

export default function CaseStudy({}) {
  return (
    <Layout
      seo={{
        title: 'Design Process',
        description:
          'How a design project is framed and worked through, from the question being asked to the delivered result.',
        noindex: true,
      }}
    >
      <section className={`container ${utilStyles.articleSection}`}>
        <h1>Design Process</h1>
        <p>
          The process starts with the question being asked. What is missing from
          the business? Why do people need it? How should it be presented? Is
          this a product, an identity problem, or a communication problem? The
          deliverable is whatever answers that question: an app, a website or a
          brand asset. Every solution sits within the three spheres shown below.
          Clients and designers each bring their own perspective to a project,
          and the work happens where those perspectives meet. A good process
          separates what is known from what is assumed and sets out a clear path
          to the result.
        </p>
        <Image
          className={utilStyles.articleImg}
          priority
          src="/images/illustration/design-philosophy.svg"
          height={1080}
          width={1920}
          alt="Logo"
        />

        <h2>Design Method</h2>
        <p>
          These are the steps I usually follow to produce a piece of design
          work. The time spent on each depends on the complexity of the problem.
          The final deliverables are often numerous, and each one draws on the
          work done at every stage.
        </p>
        <Image
          className={utilStyles.articleImg}
          priority
          src="/images/illustration/design-method.svg"
          height={1080}
          width={1920}
          alt="Logo"
        />

        <h2>Design Loop</h2>
        <p>
          The loop below runs inside each step. It keeps the project on track
          and keeps the client and the design team aligned. Work is shown often,
          feedback is gathered, and the next round responds to it. After a few
          rounds the work is usually ready to be finished to a polished standard
          before the next step begins.
        </p>
        <Image
          className={utilStyles.articleImg}
          priority
          src="/images/illustration/design-loop.svg"
          height={1080}
          width={1920}
          alt="Logo"
        />
      </section>
    </Layout>
  );
}
