import Ember from 'ember';

export default Ember.Object.extend({
  open: function(authentication) {
    var accessToken = authentication.accessToken;
    var userId = authentication.userId;
    // TODO send access token to backend
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        // TODO fill in backend URL
        url: 'api/session',
        data: {'code':accessToken},
        dataType: 'json',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    }).then(function(user){
      return {
        currentUser: user
      }
    })
  }
});
