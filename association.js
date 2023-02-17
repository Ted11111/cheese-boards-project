const {User, Board, Cheese} = require('./model')

// Puts User in A one to many relation with Board
User.hasMany(Board);
Board.belongsTo(User);

// Cheese and Boards many to many

Board.belongsToMany(Cheese, { through: 'BoardCheese' });
Cheese.belongsToMany(Board, { through: 'BoardCheese' });

