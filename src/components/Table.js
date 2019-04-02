import React from 'react'
import styled from 'styled-components'

import { get, mq } from '../theme'

const Wrapper = styled.div`
  overflow-x: auto;
  padding: 2px;
  width: 100%;
  ${mq({
    maxWidth: ['calc(100vw - 40px)', 'calc(100vw - 80px)', '100%']
  })};
`

const TableStyled = styled.table`
  font-family: ${get('fonts.ui')};
  padding: 0;
  table-layout: auto;
  box-shadow: 0 0 0 1px ${get('colors.border')};
  background-color: transparent;
  border-spacing: 0;
  border-collapse: collapse;
  border-style: hidden;
  border-radius: ${get('radii')};
  font-size: 14px;
  color: ${get('colors.tableColor')};
  ${mq({
    overflowX: ['initial', 'initial', 'initial', 'hidden'],
    display: ['block', 'block', 'block', 'table']
  })}
  & thead {
    color: ${get('colors.theadColor')};
    background: ${get('colors.theadBg')};
  }
  & thead th {
    font-weight: 400;
    padding: 20px 20px;
    &:nth-of-type(1) {
      ${mq({ width: ['20%', '20%', '20%', 'auto'] })};
    }
    &:nth-of-type(2) {
      ${mq({ width: ['10%', '10%', '10%', 'auto'] })};
    }
    &:nth-of-type(3) {
      ${mq({ width: ['10%', '10%', '10%', 'auto'] })};
    }
    &:nth-of-type(4) {
      ${mq({ width: ['10%', '10%', '10%', 'auto'] })};
    }
    &:nth-of-type(5) {
      ${mq({ width: ['20%', '20%', '20%', 'auto'] })};
    }
  }
  & tbody td {
    padding: 12px 20px;
    line-height: 2;
    font-weight: 200;
  }
  & tbody > tr {
    display: table-row;
    border-top: 1px solid ${get('colors.border')};
  }
  & a {
    color: ${get('colors.link')};
  }

  overflow-y: hidden;
  width: 100%;
  font-family: ${get('fonts.mono')};
  overflow-x: initial;
  display: block;
`

export const Table = (props) => (
  <Wrapper>
    <TableStyled {...props} />
  </Wrapper>
)
