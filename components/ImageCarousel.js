import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './imageCarousel.module.css';

const ImageCarousel = ({ images = [], alt = 'Carousel image' }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    lazyLoad: 'ondemand', // Enable lazy loading in slick
  };

  if (images.length === 0) {
    return <div>No images to display.</div>; // Fallback for empty images array
  }

  return (
    <div style={{ width: '100%', margin: '0 auto' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.slideWrapper}>
            <div className={styles.imageContainer}>
              <Image
                src={image}
                alt={`${alt} ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
                loading={index === 0 ? 'eager' : 'lazy'} // First image eager, rest lazy
                quality={85}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
