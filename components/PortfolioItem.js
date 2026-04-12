export default function PortfolioItem({
  date,
  title,
  launchUrl,
  description,
  children,
}) {
  return (
    <article
      className="card"
      style={{
        marginBottom: 'var(--space-8)',
        overflow: 'visible',
      }}
    >
      <div className="card-body">
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 'var(--space-3)',
            flexWrap: 'wrap',
            marginBottom: 'var(--space-2)',
          }}
        >
          <span
            style={{
              fontSize: 'var(--text-xs)',
              fontWeight: 'var(--font-semibold)',
              color: 'var(--color-text-inverse)',
              backgroundColor: 'var(--color-text-secondary)',
              padding: '0 var(--space-2)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            {date}
          </span>
          <h3
            style={{
              margin: 0,
              fontSize: 'var(--text-lg)',
            }}
          >
            {title}
            {launchUrl && (
              <>
                {' '}
                <a
                  href={launchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--color-primary)',
                    fontSize: 'var(--text-sm)',
                  }}
                  aria-label={`Launch ${title} website`}
                >
                  &#8599; Launch
                </a>
              </>
            )}
          </h3>
        </div>
        {description && (
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-secondary)',
              margin: 0,
              marginBottom: 'var(--space-4)',
            }}
          >
            {description}
          </p>
        )}
        {children}
      </div>
    </article>
  );
}
