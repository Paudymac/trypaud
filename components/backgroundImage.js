import styles from './backgroundImage.module.css';

export default function BackgroundImage({ imageUrl, paddingBottom = '56.25%' }) {
  const backgroundStyle = {
    '--bg-image': `url(${imageUrl})`, // Set the CSS variable
     paddingBottom: paddingBottom, // Apply the padding-bottom prop
  };

  return (
    <div className={styles.backgroundImage} style={backgroundStyle}>
      {/* Content inside the div (optional) */}
    </div>
  );
}