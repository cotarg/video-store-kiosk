import Ember from 'ember'

export default Ember.Route.extend({

  model (params) {
    return this.store.query('movie', { page: 1 })
      // .then(function (movies) {
      //   return {page: 1, movies: movies}
      // })
  }
})
