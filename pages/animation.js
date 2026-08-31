import PortfolioItem from '@/components/PortfolioItem';
import PortfolioGalleryTemplate from '@/components/PortfolioGalleryTemplate';

export default function MotionGraphics() {
  return (
    <PortfolioGalleryTemplate
      title="Animation"
      description="Motion design, title sequences, and promotional trailers."
    >
      <PortfolioItem
        date="2024"
        title="Solaris Showdown Launch Trailer"
        launchUrl="https://www.youtube.com/embed/fMzvadaovKo?si=B96t4-RfiuYRTGn5"
        description="[ Motion Graphics / Cards / Typography ]"
      >
        <div className="portfolio-video notch">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fMzvadaovKo?si=B96t4-RfiuYRTGn5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </PortfolioItem>

      <PortfolioItem
        date="2023"
        title="Mechwarrior 5 Clans Teaser Trailer"
        launchUrl="https://www.youtube.com/embed/rYZwO5f9yk4?si=o8egxfFpA8oi-UhB"
        description="[ Motion Graphics / Cards / Typography ]"
      >
        <div className="portfolio-video notch">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rYZwO5f9yk4?si=o8egxfFpA8oi-UhB"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </PortfolioItem>

      <PortfolioItem
        date="2022"
        title="Mechwarrior 5 DLC 5 Rise of Rasalhague Promo Trailer"
        launchUrl="https://www.youtube.com/embed/XfiI-BJnP2I?si=7_CLiuvzMrflRHjj"
        description="[ Motion Graphics / Cards / Typography ]"
      >
        <div className="portfolio-video notch">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XfiI-BJnP2I?si=7_CLiuvzMrflRHjj"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </PortfolioItem>

      <PortfolioItem
        date="2018"
        title="MechCon Logo Animation"
        description="[ Motion Graphics / Design / Branding]"
      >
        <div className="portfolio-video notch">
          <video width="560" height="315" controls preload="metadata">
            <source src="/video/mechcon-logo-animation.mp4" type="video/mp4" />
          </video>
        </div>
      </PortfolioItem>

      <PortfolioItem
        date="2017"
        title="MWO Tournamnt Logo Animation"
        description="[ Motion Graphics / Design / Branding]"
      >
        <div className="portfolio-video notch">
          <video width="560" height="315" controls preload="metadata">
            <source src="/video/mwowc-pause-screen-2017.mp4" type="video/mp4" />
          </video>
        </div>
      </PortfolioItem>

      <PortfolioItem
        date="2016"
        title="Piranha Games Bumper"
        description="[ Motion Graphics / Design / Branding]"
      >
        <div className="portfolio-video notch">
          <video width="560" height="315" controls preload="metadata">
            <source src="/video/piranha-logo-sound.mp4" type="video/mp4" />
          </video>
        </div>
      </PortfolioItem>
    </PortfolioGalleryTemplate>
  );
}
