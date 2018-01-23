const nspCheck = require('nsp/commands/check');

function NodeSecurityPlugin (options) {
  this.options = options || {};
  this.options.reporter = this.options.reporter || 'summary';
}

NodeSecurityPlugin.prototype.apply = function (compiler) {
  var options = this.options;
  var errorCode = 0;
  var originalExit = process.exit;
  var done = function (callback) {
    process.exit = originalExit;
    callback();
  };

  compiler.plugin('emit', function (compilation, callback) {
    process.exit = function (code) {
      errorCode = errorCode || code;
    };

    nspCheck.handler(options)
      .then(function () {
        switch (errorCode) {
          case 0:
            break;
          case 1:
            compilation.errors.push(new Error('Vulnerable packages found'));
            break;
          case 3:
            compilation.errors.push(new Error('Internal nsp error'));
            break;
          default:
            compilation.errors.push(new Error('Unhandled error'));
        }

        done(callback);
      });
  });
};

module.exports = NodeSecurityPlugin;
