import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      categories: this.store.query('category', { userId: 2}),
      links: this.store.query('link', { userId: 2}),
    });
  }
});
