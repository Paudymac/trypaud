import styles from './backgroundImage.module.css';

export default function BackgroundImage({ imageUrl, paddingBottom = '56.25%', backgroundPositionY = 'top' }) {
  const backgroundStyle = {
    '--bg-image': `url(${imageUrl})`, // Set the CSS variable
    '--bg-position-y': backgroundPositionY,
     paddingBottom: paddingBottom, // Apply the padding-bottom prop
    
  };

  return (
    <div className={styles.backgroundImage} style={backgroundStyle}>
      {/* Content inside the div (optional) */}
    </div>
  );
}