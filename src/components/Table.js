import React from 'react'
import styles from './styles.css'
import cs from 'classnames'

export const Table = (props) => {
  const { className, style, ...rest } = props
  return (
    <div
      className={cs(styles.wrapper, className)}
      style={style}
    >
      <table
        className={styles.table}
        {...rest}
      />
    </div>
  )
}
