import Ember from 'ember'

{
  Helper
} = Ember

# This function receives the params `params, hash`
export <%= camelizedModuleName %> = (params)->
  return params

export default <%= classifiedModuleName %>Helper = Helper.helper <%= camelizedModuleName %>
