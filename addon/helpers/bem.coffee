import Ember from 'ember'

{
  Helper
  get
} = Ember

bem = (params, hash)->
  block = get(hash, 'block') ? ''
  element = get(hash, 'element') ? ''
  mods = for key, value of hash.mods
    "#{key}-#{value}"
  classNameBasePart = if element is '' then "#{block}" else "#{block}__#{element}"
  [classNameBasePart].concat mods.map (mod)-> "#{classNameBasePart}--#{mod}"
  .join ' '

BemHelper = Helper.helper bem

export { bem }

export default BemHelper
