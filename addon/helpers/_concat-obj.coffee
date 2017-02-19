import Ember from 'ember'

{
  Helper
} = Ember

# This function receives the params `params, hash`
concatObj = (params) ->
  Object.assign.apply {}, params

ConcatObjHelper = Ember.Helper.helper concatObj

export { concatObj }

export default ConcatObjHelper
