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
        <h1>My Design Story</h1>
       <p>From a young age, I’ve always been drawn to design. Art, drawing, and painting came naturally to me, and I was determined to translate these talents into a digital medium early in my education. As the internet was burgeoning and Napster was embroiled in controversy with Metallica, I saw a unique opportunity to blend creativity with technical skills, setting the stage for a dynamic career. This vision led me to pursue a Bachelor’s degree in Interactive Multimedia Design at the University of Ulster in Northern Ireland.</p>
        <Image className={utilStyles.contentImg} src="/images/portfolio-pic.jpg" width={960} height={540} alt="solaris showdown"/>
        <p>Upon graduating, I found myself at a crossroads, unsure of my next step. To enhance my job prospects, I decided to further my education at the University of Ulster, pursuing a Master’s degree in Computing and Design. This program deepened my understanding of complex computing concepts such as networks and programming while expanding my design skills with modules on typography, 3D modeling, animation, and UI design.</p>
        <p> My first professional experience came as a junior designer at Screendragon in Southern Ireland. This small but growing software development company specialized in marketing collaboration software for global agencies. Working under the art director, I collaborated closely with developers, project managers, and UX advocates, delivering projects for esteemed clients like Kimberly-Clark and P&G. This role was instrumental in honing my skills and understanding the synergy between design and technology.</p>

        <Image className={utilStyles.contentImg} src="/images/books.jpg" width={960} height={540} alt="solaris showdown"/>
        <p>In November 2010, I arrived in Vancouver on a cold, wet night—reminiscent of Ireland. My friend assured me that the sun would emerge in the spring. Once I sorted out accommodation, I immersed myself in applications for UI design jobs. My focus at Screendragon had been on Adobe Flash and ActionScript, but the industry was shifting towards HTML5. I quickly realized the need to upgrade my HTML and CSS skills to remain competitive. Over the next eight weeks, I diligently improved these skills through tutorials and books.</p>
        <p>Fortune smiled upon me when I received a job offer from Smartt, a marketing consultancy in Burnaby, just before the New Year. This opportunity was a lifesaver, as I was running low on money and patience with the couch-surfing lifestyle. Although my experience was primarily with Flash, Smartt valued my ambition, portfolio, and strong references. I was now working as a Graphic and Web Designer in North America.</p>
        <p>At Smartt, I was immediately involved in an incubator project called Connect The Doc, an online booking system for medical clinics. I led the front-end design, guiding clients through wireframes, mock-ups, and branding updates. This role significantly enhanced my skills in time management and project organization. I also led the internal rebranding project for Smartt and developed a new branding strategy for Columbia College, improving its competitive edge and website.</p>
        <p>My next chapter began at Piranha Games, where I joined as an Interactive Designer. Over the past decade, I have led design projects for the web, contributed to the UI for Mechwarrior Online, designed game assets, and worked on branding for live events and digital marketing campaigns. Working on a beloved game franchise like Mechwarrior has been a rewarding experience, allowing me to collaborate with a diverse team of developers, marketers, game designers, creative directors, and a passionate CEO. This role has significantly contributed to my growth as a well-rounded designer.</p>
        <p>At Piranha, I have honed my skills in logo creation, web development, and UI design. My design process is flexible, adapting to the needs of each project. I strive to create design systems that accelerate development rather than hinder it. My front-end coding skills have matured alongside my graphic design abilities. The branding and web design for Mechwarrior 5 has been particularly fulfilling. Launching a game is no easy task, but it has been an incredible journey. We are now preparing for the launch of Mechwarrior 5: Clans, with a planned product website release in 2024. Stay tuned!</p>

        </div>
        </section>
        <a href="/">&larr; home</a>
      </Layout>
    );
}

