'use strict';

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _basic = require('./rules/basic');

var _basic2 = _interopRequireDefault(_basic);

var _production = require('./rules/production');

var _production2 = _interopRequireDefault(_production);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseConfig = {};

var config = [_basic2.default].reduce(function (prev, cur) {
  return (0, _deepmerge2.default)(prev, cur);
}, baseConfig);

if (process.env.NODE_ENV === 'production') {
  config = (0, _deepmerge2.default)(config, _production2.default);
}

module.exports = config;