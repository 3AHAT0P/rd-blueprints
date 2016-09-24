`import <%= name %> from '<%= servicePath %>/<%= serviceName %>'`

initialize = (application) ->
  application.register 'service:<%= serviceName %>', <%= name %>

<%= name %>Initializer =
  name: '<%= serviceName %>'
  initialize: initialize

`export {initialize}`
`export default <%= name %>Initializer`
