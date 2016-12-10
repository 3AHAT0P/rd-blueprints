import BaseModel from '../base-model'
import attr from 'ember-data/attr'
import { belongsTo, hasMany } from 'ember-data/relationships'

<%= classifiedModuleName %>Model = BaseModel.extend
  <%= attrs %>

export default <%= classifiedModuleName %>Model
