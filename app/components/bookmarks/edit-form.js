import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(bookmark) { Ember.Logger.info('save called'); },
    cancel() { Ember.Logger.info('cancel called'); }
  }
});
