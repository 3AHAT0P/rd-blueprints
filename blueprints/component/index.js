/*jshint node:true*/

var stringUtil, pathUtil, validComponentName, getPathOption, path, normalizeEntityName;
try {
  stringUtil = require('ember-cli-string-utils');
} catch (e) {
  stringUtil = require('../../node_modules/ember-cli/node_modules/ember-cli-string-utils');
}
try {
  validComponentName = require('ember-cli-valid-component-name');
} catch (e) {
  validComponentName = require('../../node_modules/ember-cli/node_modules/ember-cli-valid-component-name');
}
try {
  getPathOption = require('ember-cli-get-component-path-option');
} catch (e) {
  getPathOption = require('../../node_modules/ember-cli/node_modules/ember-cli-get-component-path-option');
}
try {
  normalizeEntityName = require('ember-cli-normalize-entity-name');
} catch (e) {
  normalizeEntityName = require('../../node_modules/ember-cli/node_modules/ember-cli-normalize-entity-name');
}

module.exports = {
  description: 'Generates a component. Name must contain a hyphen.',

  availableOptions: [
    {
      name: 'path',
      type: String,
      default: 'components',
      aliases:[
        {'no-path': ''}
      ]
    }
  ],

  fileMapTokens: function() {
    return {
      __path__: function(options) {
        // if (options.pod) {
        //   return path.join(options.podPath, options.locals.path, options.dasherizedModuleName);
        // }
        return 'components';
      }
    };
  },

  normalizeEntityName: function(entityName) {
    entityName = normalizeEntityName(entityName);

    return validComponentName(entityName);
  },

  locals: function(options) {
    var templatePath   = '';
    var importTemplate = '';
    var contents       = '';
    var name           = '';
    var nameArr        = [];
    var componentName  = '';

    nameArr = options.entity.name.split('/')
    name = stringUtil.capitalize(stringUtil.camelize(nameArr.join('-')));
    componentName = nameArr.join('-');
    // if we're in an addon, build import statement
    if (options.project.isEmberCLIAddon() || options.inRepoAddon && !options.inDummy) {
      templatePath    = './template';
      importTemplate  = 'import layout from \'' + templatePath + '\';\n';
      contents        = '\n  layout';
    }

    return {
      importTemplate: importTemplate,
      contents: contents,
      name: name,
      componentName: componentName,
      path: getPathOption(options)
    };
  }
};
