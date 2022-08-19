const {Sequelize} = require('sequelize');
const {path} = require('path')
// TODO - create the new sequelize connection
const db = new Sequelize({
    dialect: 'sqlite',
    storage: './data.sqlite'
}

)
module.exports = {db};
