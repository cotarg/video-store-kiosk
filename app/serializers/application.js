import DS from 'ember-data'

export default DS.RESTSerializer.extend({
  // modelNameFromPayloadKey: function(payloadKey) {
  //   if (payloadKey != 'movie') {
  //     return this._super(payloadKey.replace('movie/', ''))
  //   } else {
  //    return this._super(payloadKey)
  //   }
  // }
})
