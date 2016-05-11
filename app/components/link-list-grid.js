import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['grid'],

  didInsertElement() {
    this.$().isotope({
      // options
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    });
  }
});
