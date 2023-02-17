const { Sequelize } = require('sequelize');
// Connection Test
describe('Sequelize connection', () => {
  it('should connect to the database', async () => {
    const sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: './db',
    });

    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  });
});
