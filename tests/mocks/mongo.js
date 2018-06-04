module.exports = {
  Mongo: {
    Collection: jest.fn().mockImplementation(() => ({
      insert: jest.fn().mockImplementation((object) => {
        if (Object.keys(object).length !== 0 && object.constructor === Object) {
          return 1;
        }
        return 0;
      }),
      remove: (jest.fn()),
    })),
  }
};