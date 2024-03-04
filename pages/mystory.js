import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Image from 'next/image';

export default function Logos({ allPostsData }) {
  return (
    <Layout home>
     <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <div className={utilStyles.blog}>
        <h1>My Story</h1>
        <h3>Influences</h3>
        <p>The two biggest influences on my early life have been my mom and dad. They’ve helped me allot. I’ve been fortunate to get two good ones. My dad taught me how to work hard. My mom taught me how to be a good person. A strength and kindness skill set.</p>
        <p>Design is challenging. Life is challenging. There are parallels. In life it’s common to be rewarded for fitting in. Group assimilation. Design is the same. The cookie cutter design phenomena inspired a can you make it like they did attitude. However, I feel design is about innovation. This requires difference of thought. As a designer my individuality has allowed me to develop an imagination for creative problem solving. I don’t think like anyone else. And nor should you. </p>
        <p>In the comedy of Bill Hicks, I discovered a kindred spirit. I think Rant in E-Minor is a work of art up there with da Vinci’s Mona Lisa or Mozarts 5th Concerto. I honestly feel if he was still around we’d be friends. A conceit of mine I’ll admit. I consider Bill a prophet, speaking in the prophetic tradition of oppression albeit through comedy rather than hymned platformed oratories like Martin Luther King. The stage was his pulpit. Like all prophets he was never fully appreciated during his time. In fact, his following only grew stronger after he passed inspiring many comics to take up the mantle of truth telling through stand-up.</p>
        <p>A hero of mine I consider his words nothing less than profound. Bill was a designer of hilarity sent back in time by the Universe to help the species evolve, a bit like the terminator but with jokes. I’ve done stand-up. Bombed allot. But coming from Northern Ireland that shouldn’t be a surprise.
      </p>
        <p>As far as I know Bill wasn’t a designer, yet his comedy was a constant in the iterative process. He could create new material at the drop of a hat, but what’s impressive was his consistent tweaking of jokes that already worked over time. Themes, structure, timing, words, everything was subject to change or more precisely improvement. By observing his comedy over the span of his career, from when he first went on stage at the tender age of 15 to his final show when he was dying of pancreatic cancer, you could, potentially say if Bill was a designer a tenant could be: if something worked could it work better? If true update.</p>
        <p>I’m still developing the logo I’ve conjured for this MVP of a portfolio site. Iteration is a core mantra. You can never iterate too much, until you do, but, that’s rarely the case. Always leave room for new information to come to light so an outcome can me shaped better. Since a kid I’ve always been fascinated with the subject of UFOs. Bill spoke about this topic profusely in his act. One of the great things about Bill’s comedy which sets him apart from other great comics even George Carlin or Lenny Bruce, was his ability to teach you things you didn’t already know.</p>
        <p>His act was inspirational and a learning experience. For example: consuming magic mushrooms and UFO’s appearing was something I garnered from his work. I put this into practice several years later after moving to Vancouver when myself and 3 friends went on a camping trip off the coast of British Colombia. After consuming psilocybin mushrooms, we witnessed dozens of lights switch on like light bulbs from the cloudless blue sky of a warm July evening that felt overwhelmingly otherworldly. The brightest of which appeared to communicate ideas telepathically about reality. This was a transformative experience and has fueled my outlook on what’s creatively possible. Bill was right, the only limit is your imagination.</p>
        <h3>Creativity & Discipline</h3>
        <p>Most people have had negative experiences in life. It happens to all of us. For me being bullied taught me two things: you need to stand up for yourself and you need to need to develop a strong personality at least on the inside. I try and be conscientious of this reality in work. Ego’s swimming in negative thoughts can provoke difficult engagements. Trust and honest communication are cornerstones in developing collaborative relationships. Practicing martial arts from a young age instilled in me the courage to overcome mental challenges. Competing in Martial Arts tournaments taught me how to dig deep and keep pushing even when you’re losing. Performing stand-up comedy taught me trying to make a room full of stranger’s laugh with your own material is harder than fighting any opponent. However, in a way the obstacle is always the same, you and the feeling of being judged.</p>
        <p>Design is an emotional endeavour. Controlling your ego is an important aspect. This requires discipline. It’s prevents you and others from getting hurt. It prevents design critique from feeling too personal. You do need a healthy amount of ego. If you lack confidence in what you’re doing the chances you create something exceptional are small. If the team your collaborating with don't believe in the process, aren’t emotionally engaged the probability you create something successful is diminished.</p>
        <h3>My Creative Process</h3>
        <p>I believe innovation within a brief should always be the goal. 
          There are many ways to skin a cat. I’ve never skinned a cat, but I can definitely infer it’s meaning in relation to design. From building websites to designing logos many paths exist to achieve a desired goal. I prefer a flexible approach to a design process with an ability to add complexity when needed. An agreed upon structure between team members or myself and a client, CEO or project manager, prior to a project commencing is best practice. 
          </p>
        </div>
        </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}

