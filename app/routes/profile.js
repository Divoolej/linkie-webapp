import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {

    this.render();

    this.render('sidebar', {
      outlet: "sidebar",
      into: "profile"
    });
  }
});
