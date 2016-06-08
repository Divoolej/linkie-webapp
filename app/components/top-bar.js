import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    _logout() {
      this.sendAction('logout');
    }
  }

});
