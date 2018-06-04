const serverMethods = {
  method_handlers: []
};
module.exports = {
  Meteor: {
    isServer: true,
    publish: jest.fn(),
    methods: jest.fn().mockImplementation((methods) => {
      serverMethods.method_handlers =  methods;
    }),
    server: serverMethods,
    call: jest.fn()
  }
};