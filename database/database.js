const Sequelize = require('sequelize')

const connection = new Sequelize('folha_de_ponto','root','93153626',{
    host:'localhost',
    dialect:'mysql'
})


module.exports = connection