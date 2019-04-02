import React from 'react'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

const Link = styled('a')`
  text-decoration: none;
  color: initial;
`

export const Tooltip = ({ text, children }) => {
  const id = JSON.stringify(text)
  return (
    <React.Fragment>
      <Link data-tip data-for={id} href='#' onClick={ev => ev.preventDefault()}>
        {children}
      </Link>

      <ReactTooltip id={id} effect='solid'>
        {text}
      </ReactTooltip>
    </React.Fragment>
  )
}
