import Ember from 'ember';

export default Ember.Object.extend({
  open: function(authentication) {
    var accessToken = authentication.accessToken;
    var userId = authentication.userId;
    console.log('inside torii adapter');
    // TODO send access token to backend
  }
});
