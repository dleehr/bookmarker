import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  link: attr(),
  title: attr(),
  about: attr(),
  public: attr(),
  created: attr()
});
