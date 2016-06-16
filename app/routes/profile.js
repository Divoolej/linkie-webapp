import Ember from 'ember';

export default Ember.Route.extend({
  storage: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      categories: this.store.query('category', { userId: this.get('storage.userId')}),
      links: this.store.query('link', { userId: this.get('storage.userId')}, { reload: true }),
    });
  },

  actions: {
    logout() {
      this.get('session').close();
      this.transitionTo('landing');
    },

    refreshModel() {
      this.refresh();
    },

    submitLink(link) {
      link.save();
    }

  }

});
