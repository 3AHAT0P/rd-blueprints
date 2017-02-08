# Takes one parameter: appInstance
export initialize = () ->
  # appInstance.inject 'route', 'foo', 'service:foo'

export default <%= classifiedModuleName %>Initializer =
  name: '<%= dasherizedModuleName %>'
  initialize: initialize
