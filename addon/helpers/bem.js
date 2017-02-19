import Ember from 'ember';

const {
  Helper,
  get
} = Ember;

export function bem(params, hash) {
  var block, classNameBasePart, element, key, mods, ref, ref1, value;
  block = (ref = get(hash, 'block')) != null ? ref : '';
  element = (ref1 = get(hash, 'element')) != null ? ref1 : '';
  mods = (function() {
    var ref2, results;
    ref2 = hash.mods;
    results = [];
    for (key in ref2) {
      value = ref2[key];
      results.push(key + "-" + value);
    }
    return results;
  })();
  classNameBasePart = element === '' ? "" + block : block + "__" + element;
  return [classNameBasePart].concat(mods.map(function(mod) {
    return classNameBasePart + "--" + mod;
  })).join(' ');
};

export default Helper.helper(bem);
