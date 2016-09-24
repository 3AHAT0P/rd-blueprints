`import Ember from 'ember';`

{ Component } = Ember
<%= importTemplate %>
<%= name %>Component = Component.extend
  classNameBindings: [":<%= componentName %>"]
  <%= contents %>

`export default <%= name %>Component;`
