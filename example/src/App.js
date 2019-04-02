import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'

import ribbon from './ribbon.png'

import PropsTable from 'react-docgen-props-table'

import a from './a.json'
import b from './b.json'
import c from './c.json'
import d from './d.json'
import e from './e.json'
import f from './f.json'

const demos = [ a, b, c, d, e, f ]

export default class App extends Component {
  state = {
    index: 0
  }

  render () {
    const {
      index
    } = this.state

    const demo = demos[index]

    return (
      <MuiThemeProvider>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
          }}
        >
          <a
            href='https://github.com/transitive-bullshit/react-docgen-props-table'
            style={{
              position: 'absolute',
              top: 0,
              right: 0
            }}
          >
            <img
              src={ribbon}
              alt='Fork me on GitHub'
            />
          </a>

          <div
            style={{
              display: 'flex',
              width: 830,
              maxWidth: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2em'
            }}
          >
            <h2>
              react-docgen-props-table demo
            </h2>

            <PropsTable
              props={demo.props}
            />

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '30%',
                marginTop: '1.5em'
              }}
            >
              <RaisedButton
                label='Prev'
                onClick={this._onSelectPrev}
              />

              <RaisedButton
                label='Next'
                onClick={this._onSelectNext}
              />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

  _onSelectPrev = () => {
    let index = this.state.index - 1
    if (index < 0) index = demos.length - 1

    this.setState({ index })
  }

  _onSelectNext = () => {
    let index = this.state.index + 1
    if (index >= demos.length) index = 0

    this.setState({ index })
  }
}
