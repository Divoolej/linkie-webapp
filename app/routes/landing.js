import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signInViaFacebook() {
      var route = this,
          controller = this.controllerFor('landing');

      // TODO uncomment before PR
      route.transitionTo('profile');

      // this.get('session').open('facebook-connect').then(function() {
      //   route.transitionTo('profile');
      // }, function(error) {
      //   controller.set('error', "Could not sign you in: " + error.message);
      // });
    }
  }
});
