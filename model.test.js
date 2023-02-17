
const sequelize = require('./connection');
const { User, Cheese, Board } = require('./model');


// User Model //
describe('User model', () => {
  beforeAll(async () => {
    await sequelize.sync();
  });

  afterEach(async () => {
    await User.destroy({ where: {} });
  });

  afterAll(async () => {
    await sequelize.sync();
  });

  it('can create a new user', async () => {
    const user = await User.create({ name: 'John Doe', email: "Test@test.com" });
    expect(user.name).toEqual('John Doe');
    expect(user.email).toEqual('Test@test.com');
  });
});

// Cheese Model //
describe('Cheese model', () => {
    beforeAll(async () => {
      await sequelize.sync();
    });
  
    afterEach(async () => {
      await Cheese.destroy({ where: {} });
    });
  
    afterAll(async () => {
      await sequelize.sync();
    });
  
    it('can create a new user', async () => {
      const user = await Cheese.create({ title: 'Blue', description: "Smells Awful" });
      expect(user.title).toEqual('Blue');
      expect(user.description).toEqual('Smells Awful');
    });
  });

// Board Model //
describe('Board model', () => {
    beforeAll(async () => {
      await sequelize.sync();
    });
  
    afterEach(async () => {
      await Board.destroy({ where: {} });
    });
  
    afterAll(async () => {
      await sequelize.sync();
    });
  
    it('can create a new user', async () => {
      const user = await Board.create({ type: 'Blue', description: "Smells Awful", rating: 0 });
      expect(user.type).toEqual('Blue');
      expect(user.description).toEqual('Smells Awful');
      expect(user.rating).toEqual(0)
    });
  });
