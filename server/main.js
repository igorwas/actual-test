import { Meteor } from 'meteor/meteor';
import { Products } from '/imports/api/products';
import '../imports/api/products/methods';
import '../imports/api/orders/methods';

async function insertLink(doc) {
  await Products.insertAsync(doc);
}

Meteor.publish('products', function (params={}) {
  return Products.find(params);
})

Meteor.startup(async () => {
  if (await Products.find().countAsync() === 0) {
    await insertLink({
      title: 'Product #1',
      price: 2, 
      quantity: 100,
      description: 'Description #'
    });
    await insertLink({
      title: 'Product #2',
      price: 4, 
      quantity: 200,
      description: 'Description #'
    });
    await insertLink({
      title: 'Product #3',
      price: 6,
      quantity: 300,
      description: 'Description #'
    });
  }
});
