import Ember from 'ember';

export default Ember.Controller.extend({
  storage: Ember.inject.service(),

  willRender() {
    let token = this.get('storage.token');
    if (!Ember.isEmpty(token)) {
      this.get('target').transitionTo('profile');
    }
  }
});
