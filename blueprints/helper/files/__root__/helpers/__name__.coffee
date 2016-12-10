import Ember from 'ember'

{
  Helper
} = Ember

# This function receives the params `params, hash`
<%= camelizedModuleName %> = (params)->
  return params

<%= classifiedModuleName %>Helper = Helper.helper <%= camelizedModuleName %>

export { <%= camelizedModuleName %> }

export default <%= classifiedModuleName %>Helper
