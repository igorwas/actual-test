import { Meteor } from "meteor/meteor";
import { Products } from "./model";

Meteor.methods({
  "tasks.create"(doc) {
    return Products.insert(doc);
  },

  "tasks.edit"(_id, doc) {
    return Products.update(_id, {
      $set: doc,
    });
  },

  "tasks.remove"(_id) {
    return Products.remove(_id);
  },
});
