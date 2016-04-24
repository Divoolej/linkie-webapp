import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('profile');

  this.route('profile', function() {
    this.route('sidebar');
  });
  
});

export default Router;
