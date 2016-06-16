// wrapper around the browser localStorage API.

import Ember from 'ember';
import LocalStorage from 'linkie-webapp/utils/local-storage';

const { Service, computed } = Ember;
const STORAGE_ITEM = 'session';

export default Ember.Service.extend({
  token: attr(),
  timeFormat: attr(),
  userFilter: attr(),
  userId: attr(),
  userAvatarUrl: attr(),

  isoOptions: {
    // options
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      columnWidth: '.grid-sizer'
    },
    sortBy: 'id'
  },

});

function attr() {
  return computed({
    get(key) {
      return new LocalStorage(STORAGE_ITEM).data[key];
    },

    set(key, value) {
      let session = new LocalStorage(STORAGE_ITEM);

      session.data[key] = value;
      session.store();

      return value;
    }
  });
}
