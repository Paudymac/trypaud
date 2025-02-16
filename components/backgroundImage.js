import styles from './backgroundImage.module.css';

export default function BackgroundImage({ imageUrl, paddingBottom = '56.25%', backgroundPositionY = 'top' }) {
  const backgroundStyle = {
    '--bg-image': `url(${imageUrl})`, // image variable
    '--bg-position-y': backgroundPositionY,
     paddingBottom: paddingBottom, // padding-bottom prop
    
  };

  return (
    <div className={styles.backgroundImage} style={backgroundStyle}>
      {/* Content inside the div (optional) */}
    </div>
  );
}