var path = require('path');
var chai = require('chai');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var expect = chai.expect;

var test = function (name, callback) {
  return webpack(config({
    path: path.join(__dirname, 'fixtures', name),
    quiet: true,
  }), callback);
};

describe('NodeSecurityPlugin', function () {

  it('runs without errors if no suspicious packages found', function (done) {
    test('no_errors', function (err, stats) {
      expect(err).to.be.null;
      expect(stats.hasErrors()).to.be.false;

      done();
    });
  });

  it('runs with error if suspicious package found', function (done) {
    test('error', function (err, stats) {
      const info = stats.toJson();

      expect(err).to.be.null;
      expect(stats.hasErrors()).to.be.true;
      expect(info.errors[0]).to.equal('Vulnerable packages found');

      done();
    });
  });

  it('runs with error if package.json is broken', function (done) {
    test('broken', function (err, stats) {
      const info = stats.toJson();

      expect(err).to.be.null;
      expect(stats.hasErrors()).to.be.true;
      expect(info.errors[0]).to.equal('Internal nsp error');

      done();
    });
  });

});
