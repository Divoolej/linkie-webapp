import SailsRESTAdapter from 'ember-data-sails/adapters/sails-rest';

export default SailsRESTAdapter.extend({
  host: 'https://linkie-backend.herokuapp.com',
  namespace: '',
  useCSRF: true,
  coalesceFindRequests: true
});
