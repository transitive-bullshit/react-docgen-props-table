import React from 'react'
import ReactTooltip from 'react-tooltip'
import styles from './styles.css'

export const Tooltip = ({ text, children }) => {
  const id = JSON.stringify(text)
  return (
    <React.Fragment>
      <a
        className={styles.link}
        data-tip
        data-for={id}
        href='#'
        onClick={ev => ev.preventDefault()}
      >
        {children}
      </a>

      <ReactTooltip id={id} effect='solid'>
        {text}
      </ReactTooltip>
    </React.Fragment>
  )
}
