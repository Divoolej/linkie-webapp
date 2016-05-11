// Adapter for backend authentication

import Ember from 'ember';

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
    // dummy token to persist session until server is up
    // (otherwise it would redirect you to the login page)
    this.set('storage.token', "dummyToken");

    // let fbToken = authentication.accessToken;
    // let userId = authentication.userId;
  //
  //   return new Ember.RSVP.Promise((resolve, reject) => {
  //     Ember.$.ajax({
  //       // TODO fill in backend URL
  //       type: 'POST',
  //       url: 'api/session',
  //       data: {'code':fbToken},
  //       dataType: 'json',
  //       success: Ember.run.bind(null, resolve),
  //       error: Ember.run.bind(null, reject)
  //     });
  //   }, "Post fbToken to server").then((data) => {
  //     let linkieToken = data.accessToken;
  //     this.set('storage.token', linkieToken);
  //     return { token };
  //   });
  },

  // clear the local storage key and return a promise which will resolve.
  close() {
    this.set('storage.token', null);
    return Ember.RSVP.resolve(label="close session");
  }
});
