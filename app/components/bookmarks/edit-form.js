import Ember from 'ember';

export default Ember.Component.extend({
  bookmark: null, // This doesn't matter yet!
  router: Ember.inject.service('-routing'),
  actions: {
    save(bookmark) {
      Ember.Logger.info('save called');
      bookmark.save()
      .then(
        (value) => {
          Ember.Logger.info(value);
          this.gotoList();
        }
      ).catch(
        () => {
          Ember.Logger.info('failure to save');
        }
      );
    },
    cancel() { Ember.Logger.info('cancel called'); },
    delete(bookmark) {
       bookmark.destroyRecord();
       this.gotoList();
    }
  },
  gotoList() {
   this.get('router').transitionTo('bookmarks');
  }

});
