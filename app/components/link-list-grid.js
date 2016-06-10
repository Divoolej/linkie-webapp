import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['grid'],

  isoOptions: {
    // options
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    },
    sortBy: 'id'
  },

  didInsertElement() {
    this.$().isotope(this.isoOptions);
  }
});
