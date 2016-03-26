'use strict';

var path = require('path');

exports = module.exports = function(moduleName) {

    return path.dirname(require.resolve(moduleName + '/package.json'));
};
