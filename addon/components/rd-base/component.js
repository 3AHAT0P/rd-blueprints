import Ember from 'ember';

const {
  get
  Component
  computed
} = Ember;

RdBaseComponent = Component.extend({
  componentName: 'rd-base',
  mods: null,
  elements: null,
  classNameBindings: ['componentName', 'modClassNames'],
  modClassNames: computed('componentName', 'mods', {
    get: function() {
      var componentName, hash, key, mods, ref, value;
      componentName = this.get('componentName');
      hash = (ref = this.get('mods')) != null ? ref : {};
      mods = (function() {
        var results;
        results = [];
        for (key in hash) {
          value = hash[key];
          results.push(componentName + "--" + key + "-" + value);
        }
        return results;
      })();
      mods = mods.join(' ');
      return mods;
    }
  })
});

export default RdBaseComponent;
