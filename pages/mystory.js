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
        <p>At University I fell in love with the comedy of Bill Hicks. To me he was a kindred spirit. 
        I was devastated to find out he had already passed. I honestly feel if he was still around we’d be friends. 
        A conceit of mine I’ll admit. I consider Bill a prophet, speaking in the prophetic tradition of oppression 
        albeit through comedy rather than hymned platformed oratories like Martin Luther King. The stage was his pulpit. 
        <br /><br />
        <i>I believe Bill was a designer of hilarity sent back in time by the Universe to help the species evolve, a bit like the terminator but with jokes. </i> 
        <br /><br />
        A hero of mine I consider his words nothing less than profound.
        Like all prophets he was never fully appreciated during his time on Gaia. Leaving us much too young at the age of 32. 
        Quick rhetorical question: what has this got to with design? I’ll get to that.</p>
        <h3>Iteration</h3>
        <p>I’m still developing the logo I’ve conjured for this MVP of a portfolio site. Iterative design is a core mantra of mine. 
        You can never iterate too much, until you do, but, that’s rarely the case. Always leave room for new information to come to light.<br /><br /> 
        Since a kid I’ve always been fascinated with the subject of UFOs. Maybe you've noticed my logo. Bill spoke about them profusely in his act. 
        One of the great things about Bill’s comedy which sets him apart from other great comics even Carlin was his ability to teach you things you didn’t already know. 
        It was an learning experience.</p>
        <p>Bills comedy was a constant in the iterative process, he could create new material at the drop of a hat but what’s impressive is his consistent tweaking of jokes that already worked over time. 
        Themes, structure, timing, words, everything was subject to change or more precisely improvement. 
        By observing his comedy over the span of his career, from when he first went on stage at the tender age of 15 to his final show when 
        he was dying of pancreatic cancer, you could, potentially say a tenant of Bill’s was, if he was a designer might be: if something worked could 
        it work better? If true update.</p>
        <h3>Martial Arts</h3>
        <h3>Vancouver</h3>
        <h3>Stand Up</h3>
        <h3>Moving Forward</h3>
        <a href="/">home</a>
        </div>
        </section>
      </Layout>
    );
}

