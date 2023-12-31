import { Meteor } from "meteor/meteor";
import { Products } from "../products";


Meteor.methods({
  "orders.create"(doc) {
    console.log(doc)
    
    doc.forEach(({_id, quantityToBuy }) => {
      Products.update(_id, {  $inc: {quantity: -quantityToBuy} })
    });
  },
});
