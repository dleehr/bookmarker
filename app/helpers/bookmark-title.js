import Ember from 'ember';

export function bookmarkTitle([title, about]) { // deconstructing style
  let returnStr = title;
  if (about != null) {
    returnStr += ' - ' + about;
  }
  return returnStr;
}

export default Ember.Helper.helper(bookmarkTitle);
