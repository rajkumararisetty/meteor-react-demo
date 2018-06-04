/*jest.mock('meteor/meteor');
jest.mock('meteor/mongo');*/

import { Meteor } from 'meteor/meteor';

import { Products } from '../../imports/api/products.js';

if (Meteor.isServer) {
  describe('products', () => {
    describe('methods', () => {

      it("can't not insert without input" , () => {
        expect(Meteor.server.method_handlers['products.insert']()).toBe(false);
      });

      it("can insert product and return Id", () => {
        expect(Meteor.server.method_handlers['products.insert']({
          name: 'test insert',
          quantity: 20,
          price: 200,
          createdAt: new Date(),
        })).toBe(1);
      });

      it("can't delete without input" , () => {
        expect(Meteor.server.method_handlers['products.remove']()).toBe(false);
      });

      it("can delete product with Id", () => {
        let productId;
        productId = Products.insert({
          name: 'test remove',
          quantity: 10,
          price: 100,
          createdAt: new Date(),
        });
        expect(Meteor.server.method_handlers['products.remove'](productId)).toBe(true);
      });
    });
  });
}