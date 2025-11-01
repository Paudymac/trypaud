import utilStyles from '@/styles/utils.module.css';

export default function PortfolioItem({
  date,
  title,
  launchUrl,
  description,
  children,
}) {
  return (
    <>
      <span className={utilStyles.datePortfolio}>{date}</span>
      <h3 className={utilStyles.header3Portfolio}>
        {title}
        {launchUrl && (
          <>
            {' '}
            <a className={utilStyles.launch} href={launchUrl}>
              Launch
            </a>
          </>
        )}
      </h3>
      {description && (
        <p className={utilStyles.descriptionPortfolio}>{description}</p>
      )}
      {children}
    </>
  );
}
