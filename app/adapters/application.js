import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  storage: Ember.inject.service(),

  // 'headers' is a property, computed on every request
  headers: function() {
    return {
      "AUTH_TOKEN": this.get('storage.token')
    };
  }.property().volatile()
});

// A workaround - headers don't work if the host is
// defined without reopening the adapter. It's an Ember thing.
// http://discuss.emberjs.com/t/passing-header-information-to-rest-get-request-using-restadapter/4220/9
DS.RESTAdapter.reopen({
  // host: 'https://linkie-backend.herokuapp.com',
  host: 'http://demo0486561.mockable.io/',
  namespace: ''
});
