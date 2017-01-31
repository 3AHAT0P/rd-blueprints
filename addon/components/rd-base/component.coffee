import Ember from 'ember'

{
  get
  Component
  computed
} = Ember

RdBaseComponent = Component.extend
  componentName: 'rd-base'
  mods: null
  elements: null
  classNameBindings: ['componentName', 'modClassNames']
  modClassNames: computed 'componentName', 'mods',
    get: ()->
      componentName = @get 'componentName'
      hash = @get('mods') ? {}
      mods = for key, value of hash
        "#{componentName}--#{key}-#{value}"
      mods = mods.join ' '
      mods

export default RdBaseComponent
