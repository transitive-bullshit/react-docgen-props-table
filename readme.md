# react-docgen-props-table ([demo](https://transitive-bullshit.github.io/react-docgen-props-table/))

> Beautiful Props Table for React Docgen.

[![NPM](https://img.shields.io/npm/v/react-docgen-props-table.svg)](https://www.npmjs.com/package/react-docgen-props-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<p align="center">
  <img alt="Example" src="https://raw.githubusercontent.com/transitive-bullshit/react-docgen-props-table/master/example.png">
</p>

This is a standalone version of the (now deprecated) `PropsTable` component from [Docz](https://github.com/pedronauck/docz).

## Install

```bash
npm install --save react-docgen-props-table
```

## Usage

```jsx
import React, { Component } from 'react'

import PropsTable from 'react-docgen-props-table'

// this was generated via react-docgen
const docgenInfo = {
  "description": "General component description.",
  "displayName": "MyComponent",
  "methods": [],
  "props": {
    "foo": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": "Description foo."
    },
    "bar": {
      "type": {
        "name": "string"
      },
      "required": false,
      "description": "Description bar.\n\n- markdown list-item 1\n- markdown list-item 2",
      "defaultValue": {
        "value": "'bar'",
        "computed": false
      }
    },
    "baz": {
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": "Description baz."
    }
  }
}

class Example extends Component {
  render () {
    return (
      <PropsTable props={docgenInfo.props} />
    )
  }
}
```

## Examples

Check out the [demo](https://transitive-bullshit.github.io/react-docgen-props-table/) for live examples.

## License

Credit goes to [Pedro Nauck](https://github.com/pedronauck) and [docz](https://github.com/pedronauck/docz) for the initial implementation.

MIT © [transitive-bullshit](https://transitivebullsh.it)
