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

module.exports = { User, Cheese, Board };