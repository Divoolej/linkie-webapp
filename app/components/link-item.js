import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    destroyLink(id) {
      this.get('store').findRecord('link', id).then(function(link) {
        link.destroyRecord();
      });
      this.destroy();
    }
  }
});
