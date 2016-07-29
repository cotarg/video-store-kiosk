import DS from 'ember-data'

export default DS.Model.extend({
  id: DS.attr(),
  title: DS.attr(),
  overview: DS.attr(),
  release_date: DS.attr(),
  inventory: DS.attr(),
  poster_filename: DS.attr()
})
