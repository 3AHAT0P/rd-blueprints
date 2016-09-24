/*jshint node:true*/

var stringUtil, getPathOption;
try {
  stringUtil = require('ember-cli-string-utils');
} catch (e) {
  stringUtil = require('../../node_modules/ember-cli/node_modules/ember-cli-string-utils');
}
try {
  getPathOption = require('ember-cli-get-component-path-option');
} catch (e) {
  getPathOption = require('../../node_modules/ember-cli/node_modules/ember-cli-get-component-path-option');
}

module.exports = {
  description: 'Generates a service.',

  fileMapTokens: function() {
    return {
      __initialazerpath__: function(options) {
        return 'initializers';
      }
    };
  },

  locals: function(options) {
    var name           = '';
    var nameArr        = [];

    nameArr = options.entity.name.split('/')
    name = stringUtil.capitalize(stringUtil.camelize(nameArr.join('-')));
    serviceName = nameArr.join('-');
    servicePath = './services'

    return {
      name: name,
      serviceName: serviceName,
      servicePath: servicePath,
      path: getPathOption(options)
    };
  }
};
