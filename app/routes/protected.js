import Ember from 'ember';

export default Ember.Route.extend({

  RenderTemplate() {
    this.render('protected/profile');
  }
});
