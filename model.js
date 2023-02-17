const { DataTypes } = require("sequelize")
const sequelize = require('./connection');

const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
})

const Cheese = sequelize.define('Cheese', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
})

const Board = sequelize.define('Board', {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.NUMBER
});


// Puts User in A one to many relation with Board
User.hasMany(Board);
Board.belongsTo(User);

// Cheese and Boards many to many

Board.belongsToMany(Cheese, { through: 'BoardCheese' });
Cheese.belongsToMany(Board, { through: 'BoardCheese' });




module.exports = { User, Cheese, Board };