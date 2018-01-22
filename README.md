# Webpack Node Security Plugin


Webpack plugin that runs the Node Security Platform audit on your package.json, package-lock.json or npm-shrinkwrap.json.

> NOTE: Webpack plugin is a wrapper for the [nodesecurity/nsp](https://github.com/nodesecurity/nsp) package.

## Install

```bash
npm install --save-dev webpack-nodesecurity-plugin
```

## Usage

In your `webpack.config.js`

```javascript
var NodeSecurityPlugin = require('webpack-nodesecurity-plugin');

module.exports = {
    // ...
    plugins: [
      new NodeSecurityPlugin()
    ]
};
```


## Options:

```js
module.exports = {
    // ...
  plugins: [
    new NodeSecurityPlugin(options)
  ]
}
```

### `options.reporter`

Type: `String`<br>
Default: `summary`

Defines the output format of the vulnerabilities report. Available (built-in) reporters:

- table
- summary
- json
- codeclimate
- minimal

It is possible to install 3rd party reporters from npm or create your own one.

For more information, go to [nodesecurity/nsp#output-reporters](https://github.com/nodesecurity/nsp#output-reporters)

### `options.verbose`

Type: `Boolean`<br>
Default: `false`

Provide more verbose output.

### `options.quiet`

Type: `Boolean`<br>
Default: `false`


## License

MIT © [Jakub hsz Chrzanowski](https://github.com/hsz)
