import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    destroyLink(id) {
      this.get('store').findRecord('link', id).then(function(link) {
        link.destroyRecord();
      });

      let iso = Ember.$('.grid');
      iso.isotope('remove', iso.find('.grid-item')[0]).isotope('layout');
    }
  }
});
