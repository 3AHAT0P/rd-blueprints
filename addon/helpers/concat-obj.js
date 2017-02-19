import Ember from 'ember';

const { Helper } = Ember;

export function concatObj(params) {
  return Object.assign.apply({}, params);
};

export default Helper.helper(concatObj);
