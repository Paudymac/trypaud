import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ images = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  if (images.length === 0) {
    return <div>No images to display.</div>; // Fallback for empty images array
  }

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "100%",
              backgroundPosition: "center",
              height: "1080px", // Set a fixed height or make it responsive
              width: "100%",
              lineHeight:"0",
            }}
          >
            {/* Optional: Add content on top of the background image */}
            <div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "100%",
              backgroundPosition: "top center",
              height: "auto", // Set a fixed height or make it responsive
              width: "100%",
              paddingBottom:"56.25%",
              borderRadius: "23px",
              backgroundRepeat: "no-repeat",
              lineHeight:"0",
            }}
          >
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;