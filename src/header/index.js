import React from 'react'
import cx from 'classnames'

import styles from './index.module.css'

export function Header() {
  const primaryLinkClass = cx(styles.link, styles.primary)
  const secondaryLinkClass = cx(styles.link, styles.secondary)

  return (
    <div className={styles.root}>
      <a
        href="https://netlify.com"
        target="_blank"
        rel="noopener noreferrer"
        className={primaryLinkClass}
      >
        Learn Netlify
      </a>
      <a
        href="https://sass-lang.com"
        target="_blank"
        rel="noopener noreferrer"
        className={secondaryLinkClass}
      >
        Learn Sass
      </a>
    </div>
  )
}
