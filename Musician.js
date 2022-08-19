const {db} = require('./db');
const {DataTypes} = require('sequelize')

// TODO - define the Musician model
let Musician = db.define('Musician', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instrument: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = {Musician};