# Takes one parameter: appInstance
initialize = () ->
  # appInstance.inject 'route', 'foo', 'service:foo'

<%= classifiedModuleName %>Initializer =
  name: '<%= dasherizedModuleName %>'
  initialize: initialize

export {initialize}
export default <%= classifiedModuleName %>Initializer
