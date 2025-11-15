import Image from 'next/image';
import styles from './backgroundImage.module.css';

export default function BackgroundImage({
  imageUrl,
  paddingBottom = '56.25%',
  backgroundPositionY = 'top',
  alt = '',
  priority = false,
}) {
  return (
    <div className={styles.backgroundImageWrapper} style={{ paddingBottom }}>
      <div className={styles.backgroundImage}>
        <Image
          src={imageUrl}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          style={{
            objectFit: 'cover',
            objectPosition: `center ${backgroundPositionY}`,
          }}
          priority={priority}
          quality={85}
        />
      </div>
    </div>
  );
}
