import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('profile');
  // TODO uncomment before PR
  // this.authenticatedRoute('profile');
  this.route('landing');
});

export default Router;
