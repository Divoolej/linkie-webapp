import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  storage: Ember.inject.service(),

  didInsertElement: function() {
    Ember.$('.grid').isotope('prepended', Ember.$('#' + this.elementId)).isotope('layout');
  },

  willDestroyElement: function() {
    Ember.$('.grid').isotope('remove', Ember.$('#' + this.elementId)).isotope('layout');
  },

});
