import Resolver from 'ember-resolver';

Resolver.reopen({
  moduleNameLookupPatterns: Ember.computed(function() {
    var defaults;
    defaults = this._super();
    return [this.componentResolver].concat(defaults);
  }),
  componentResolver: function(parsedName) {
    var fullNameWithoutType;
    fullNameWithoutType = parsedName.fullNameWithoutType;
    if (parsedName.type === 'component') {
      return (this.prefix(parsedName)) + "/components/" + fullNameWithoutType + "/" + parsedName.type;
    } else if (parsedName.type === 'template') {
      return (this.prefix(parsedName)) + "/" + fullNameWithoutType + "/" + parsedName.type;
    }
  }
});

export default Resolver;
