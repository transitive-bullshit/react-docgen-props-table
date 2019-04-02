# react-docgen-props-table

> Beautiful Props Table for React Docgen.

[![NPM](https://img.shields.io/npm/v/react-docgen-props-table.svg)](https://www.npmjs.com/package/react-docgen-props-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This is a standalone version of the (now deprecated) PropsTable component from [Docz](https://github.com/pedronauck/docz).

## Install

```bash
npm install --save react-docgen-props-table
```

## Usage

Take this example React component.

```js
import { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * General component description.
 */
export default class MyComponent extends Component {
  static propTypes = {
    /**
     * Description foo.
     */
    foo: PropTypes.number.isRequired,

    /**
     * Description bar.
     *
     * - markdown list-item 1
     * - markdown list-item 2
     */
    bar: PropTypes.string,

    /**
     * Description baz.
     */
    baz: PropTypes.bool
  }

  static defaultProps = {
    bar: 'bar'
  }

  render: () => { }
}
```

`react-docgen` generates the following JSON:

```js
{
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
```

You can now render this props table via:

```jsx
import React, { Component } from 'react'

import PropsTable from 'react-docgen-props-table'

const docgenInfo = '... from above ...'

class Example extends Component {
  render () {
    return (
      <PropsTable
        props={docgenInfo.props}
      />
    )
  }
}
```

## License

Credit goes to [Pedro Nauck](https://github.com/pedronauck) and [docz](https://github.com/pedronauck/docz) for the initial implementation.

MIT © [transitive-bullshit](https://transitivebullsh.it)
