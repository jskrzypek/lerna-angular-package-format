var startsWith = require('lodash.startswith');

module.exports = {
  y: 2,
  f: (s) => startsWith(s, 'start')
};
