const Sequelize = require('sequelize')
const BugModel = require('./models/bug')
const DeveloperModel = require('./models/developer')
const IssuerModel = require('./models/issuer')
const TesterModel = require('./models/tester')

const sequelize = new Sequelize('one', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

const Bug = BugModel(sequelize, Sequelize)
// BugDeveloper will be our way of tracking relationship between Bug and Developer models
// each Bug can have one DEveloper and each Developer can have multiple bugs
const BugDeveloper = sequelize.define('Bug_Developer', {})
const Developer = DeveloperModel(sequelize, Sequelize)
const Tester = TesterModel(sequelize, Sequelize)
const Issuer = IssuerModel(sequelize,Sequelize)
Bug.belongsTo(Developer, { through: BugDeveloper, unique: false })
Developer.belongsToMany(Bug, { through: BugDeveloper, unique: false })
Tester.belongsTo(Bug);
Issuer.belongsTo(Bug);

sequelize.sync().then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  Bug,
  Developer,
  Tester,
  Issuer
}