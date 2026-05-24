module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        accent: 'var(--color-accent)',
        app: {
          bg: 'var(--color-background)',
          surface: 'var(--color-surface)',
          text: 'var(--color-text)',
          muted: 'var(--color-muted)',
          border: 'var(--color-border)',
          error: 'var(--color-error)',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)'],
      },
      spacing: {
        page: 'var(--spacing-page)',
        section: 'var(--spacing-section)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
      },
      boxShadow: {
        card: 'var(--card-shadow)',
      },
    },
  },
};