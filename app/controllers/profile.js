import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),

  actions: {
    controllerRemoveLink(id) {
      this.get('store').findRecord('link', id).then(function(link) {
        link.destroyRecord();
        Ember.$('#' + id).remove();
        Ember.$('.grid').isotope('remove', Ember.$('#' + id)).isotope('layout');
      });
    }
  }
});
