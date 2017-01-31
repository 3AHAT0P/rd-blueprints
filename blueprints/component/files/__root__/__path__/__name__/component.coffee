import RdBaseComponent from 'rd-blueprints/addon/rd-base/component'
<%= importTemplate %>
<%= name %>Component = RdBaseComponent.extend
  componentName: '<%= componentName %>'
  <%= contents %>

export default <%= name %>Component
