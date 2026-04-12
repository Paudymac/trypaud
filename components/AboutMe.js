import { useIntersectionObserver } from './useIntersectionObserver';

const AboutMe = () => {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.1 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="about-section" aria-label="About me">
      <h2>About Me</h2>
      <div className="about-card">
        <div
          ref={ref1}
          className={`about-image animate-hidden ${isVisible1 ? 'animate-visible delay-1' : ''}`}
          style={{
            backgroundImage: "url('/images/profile-ai-shot.webp')",
          }}
          role="img"
          aria-label="Padraic McAteer portrait"
        />

        <div
          ref={ref2}
          className={`about-content animate-hidden ${isVisible2 ? 'animate-visible delay-2' : ''}`}
        >
          <h3>Creativity & Design Good</h3>
          <p className="about-summary">
            I&apos;ve always sketched and coloured from when I was small. Being
            creative is something I find innate. My 17 year design journey has
            allowed me to wear many hats concurrently, making me a versatile
            designer with an eye for layout and identity mixed in with technical
            acumen through the lens of a user centered philosophy. I believe
            good design helps people. Like holding a door open and letting
            someone in. Great design keeps them coming back.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
