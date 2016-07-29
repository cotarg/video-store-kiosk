import Ember from 'ember'

export default Ember.Route.extend({

  model (params) {
    return this.store.query('movie', { page: { number: params.page } })
  },

  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  }

})
