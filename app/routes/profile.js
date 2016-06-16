import Ember from 'ember';

export default Ember.Route.extend({
  storage: Ember.inject.service(),

  model() {
    return Ember.RSVP.hash({
      categories: this.store.query('category', { userId: this.get('storage.userId')}),
      links: this.store.query('link', { userId: this.get('storage.userId')}, { reload: true }).then((response) => {
        return response.toArray();
      })
    });
  },

  actions: {
    logout() {
      this.get('session').close();
      this.transitionTo('landing');
    },

    submitLink(link) {
      link.save();
      this.get('controller.model.links').pushObject(link);
    },

  }

});
