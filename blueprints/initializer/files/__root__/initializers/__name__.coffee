# Takes two parameters: container and application
export initialize = () ->
  # application.register 'route', 'foo', 'service:foo'

export default <%= classifiedModuleName %>Initializer =
  name: '<%= dasherizedModuleName %>'
  initialize: initialize
