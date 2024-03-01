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
        <p>The two biggest influences on my early life have been my mom and dad. Even now they help me allot. I’ve been fortunate to get two good ones. My dad taught me how to work hard. My mom taught me how to be a good person. A strength and kindness skill set. This helped me growing up as I didn’t really fit in. 
        Even now I still don’t.</p>
        <p><i>"I was ashamed of myself when I realized life was a costume party and I attended with my real face."</i></p>
        <p>Some friends have even enquired if I thought I’m on the spectrum, I just think I’m honest. I’ve don’t have a stomach for lies. I’ve never had the heard mindset. The need to assimilate into a group. I’ve never understood people who want to fit in at the expense of their individuality. 
        This I believe is my real talent, allowing me to develop an imagination and creative outlook. </p>
        <p>In the comedy of Bill Hicks, I discovered a kindred spirit. I think Rant in E-Minor is a work of art up there with da Vinci’s Mona Lisa or Mozarts 5th Concerto. I honestly feel if he was still around we’d be friends. 
        A conceit of mine I’ll admit. I consider Bill a prophet, speaking in the prophetic tradition of oppression albeit through comedy rather than hymned platformed oratories like Martin Luther King. The stage was his pulpit.</p>
        <p><i>A designer of hilarity sent back in time by the Universe to help the species evolve, a bit like the terminator but with jokes. </i> </p>
        <p>A hero of mine I consider his words nothing less than profound. Like all prophets he was never fully appreciated during his time on earth. 
        In fact, his following only grew stronger after he passed inspiring many comics to take up the mantle of truth telling through stand-up. 
      </p>
           <p>Bills comedy was a constant in the iterative process, he could create new material at the drop of a hat but what’s impressive was his consistent tweaking of jokes that already worked over time. 
        Themes, structure, timing, words, everything was subject to change or more precisely improvement. 
        By observing his comedy over the span of his career, from when he first went on stage at the tender age of 15 to his final show when he was dying of pancreatic cancer, 
        you could, potentially say a tenant of Bill’s was, if he was a designer might be: if something worked could it work better? If true update. </p>
        <p>I’m still developing the logo I’ve conjured for this MVP of a portfolio site. Iteration is a core mantra. You can never iterate too much, until you do, but, that’s rarely the case. 
        Always leave room for new information to come to light so an outcome can me shaped better. 
        Since a kid I’ve always been fascinated with the subject of UFOs; hence I’ve placed a UFO in the logo for my personal brand. 
        Bill spoke about this topic profusely in his act. One of the great things about Bill’s comedy which sets him apart from other great comics even George Carlin or Lenny Bruce, was his ability to teach you things you didn’t already know. It was a learning experience. For example: consuming magic mushrooms and UFO’s appearing was something I garnered from his act. 
        No other person to the best of knowledge, at least for me, had stated this so openly. This planted a seed to bloom later when I made the move to Vancouver. </p>
        <h3>Creativity & Discipline</h3>
        <p>Being bullied teaches you two things: you need to stand up for yourself and you need to need to develop a strong personality on the inside. 
        Practicing martial arts from a young age instilled in me the courage to overcome obstacles. Competing in Martial Arts tournaments taught me how to dig deep and keep pushing even when you’re losing. 
        Performing stand-up comedy taught me trying to make a room full of stranger’s laugh with your own material is harder than fighting any opponent in any martial arts contest. However, in a way the obstacle is always the same: you and your emotions.</p>
        <p>Design is an emotional endeavour. Controlling your ego is an important aspect. It’s prevents you and others from feeling hurt. This requires discipline. If you lack confidence in what you’re doing the chances you create something exceptional is small. If the people your designing for aren’t emotional engaged with the project the probability you create something successful is diminished. Every project has an ok that’s good enough benchmark. You don’t always need to reinvent the wheel. However, I believe innovation within the brief should always be the goal.</p>
        <h3>My Creative Process</h3>
        <p>There are many ways to skin a cat. Thankfully I’ve never skinned a cat. That’s kind of disgusting, but I can definitely infer it’s meaning in relation to design. From building websites to designing logos many paths exist to achieve a desired outcome. I prefer a flexible approach to a design process with an ability to add complexity when needed. An agreed upon structure between team members or myself and a client, CEO or project manager, prior to a project commencing is best practice.</p>
        <h3>The Trip</h3>
    
        <a href="/">home</a>
        </div>
        </section>
      </Layout>
    );
}

