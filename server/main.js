import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if (Meteor.isServer) {
    console.log('test');
  }
});
