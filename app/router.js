import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('protected');

  this.route('protected', function() {
    this.route('profile');
  });
});

export default Router;
