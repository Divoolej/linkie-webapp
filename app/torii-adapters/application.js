// Adapter for backend authentication

import Ember from 'ember';
import config from '../config/environment';

export default Ember.Object.extend({
  storage: Ember.inject.service(),

  // pull session out of local storage
  fetch() {
    let token = this.get('storage.token');
    if (Ember.isEmpty(token)) {
      throw new Error('no token in storage');
    }
    return Ember.RSVP.resolve({ token }, "fetch session");
  },

  // resolve with session data and store token in local storage
  open(authentication) {
    let fbToken = authentication.accessToken;

    return new Ember.RSVP.Promise((resolve, reject) => {
      console.log(config);
      Ember.$.ajax({
        type: 'POST',
        url: config.APP.apiURL + '/auth/facebook',
        data: {'access_token':fbToken},
        dataType: 'json',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    }, "Post fbToken to server").then((data) => {
      let linkieToken = data.accessToken;
      // save linkie token in local storage
      this.set('storage.token', linkieToken);
      this.set('storage.userId', data.user.id);
      return { linkieToken };
    });
  },

  // clear the local storage key and return a promise which will resolve.
  close() {
    this.set('storage.token', null);
    return Ember.RSVP.resolve();
  }
});
