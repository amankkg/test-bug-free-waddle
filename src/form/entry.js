import React from 'react'
import cx from 'classnames'

import styles from './entry.module.sass'

export const Entry = ({label, name, value, onChange, type, error}) => {
  const className = cx(styles.root, error && styles.error)

  return (
    <label className={className}>
      <span>{label}</span>
      <input name={name} value={value} onChange={onChange} type={type} />
    </label>
  )
}
