import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Products = new Mongo.Collection('products');

if (Meteor.isServer) {
  // Code only runs on the server
  Meteor.publish('products', function productsPublication() {
    return Products.find();
  })
}

// Code only runs on both server and client
Meteor.methods({
  'products.insert': (product = {}) => {
    if (Object.keys(product).length === 0) {
      return false;
    }
    return Products.insert({
      name: product.name,
      quantity: ((product.quantity)/1).toFixed(0),
      price: ((product.price)/1).toFixed(2),
      createdAt: new Date(),
    });
  },
  'products.remove': (productId) => {
    if (!productId) {
      return false;
    }
    Products.remove(productId);
    return true;
  }
});