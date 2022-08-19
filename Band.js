const {db} = require('./db');
const {DataTypes} = require('sequelize')

// TODO - define the Band model
let Band = db.define('Band', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = {Band};