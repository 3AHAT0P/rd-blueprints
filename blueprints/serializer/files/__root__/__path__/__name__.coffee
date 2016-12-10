import DS from 'ember-data'

{
  RESTSerializer
} = DS

<%= classifiedModuleName %>Serializer = RESTSerializer.extend()

export default <%= classifiedModuleName %>Serializer
