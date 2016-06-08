import Ember from 'ember';

export default Ember.Component.extend({
  storage: Ember.inject.service(),

  url: Ember.computed(function() {
    return this.get('storage.userAvatarUrl');
  })

});
