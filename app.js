var Sequelize = require ('sequelize');
var connection = new Sequelize('one','root','password',{
    host: 'localhost',
    dialect: 'mysql'
});

var developer = connection.define('developer',{
    info: {
        type : Sequelize.JSON,
    }
});

connection.sync().then(function(){
    developer.create({
        info: 'test test'});
});

var issuer = connection.define('issuer',{
    info: {
        type : Sequelize.JSON,
    }
});

connection.sync().then(function(){
    issuer.create({
        info: 'test test'});
});

var tester = connection.define('tester',{
    info: {
        type : Sequelize.JSON,
    }
});

connection.sync().then(function(){
    tester.create({
        info: 'test test'});
});

var bug = connection.define('bug',{
    info: {
        type : Sequelize.JSON,
    },
    developerId: {
        type: Sequelize.INTEGER,
        model: 'developers',//<<<  note: its table's name, not object name
        Key: 'id' // <<< Note, its a column name
  },

  issuerId: {
    type: Sequelize.INTEGER,
    model: 'issuers', 
    Key: 'id' 
},

testerId: {
    type: Sequelize.INTEGER,
    model: 'testers', 
    Key: 'id' 
}

});

connection.sync().then(function(){
    bug.create({
        info: 'test test',
        testerId: 1,
        issuerId: 1,
        developerId:1
    });
});

issuer.belongsTo(bug);

tester.belongsTo(bug);

developer.belongsTo(bug);


/*connection.sync().then(function(){
    bug.FindById(1).then(function(bug){
        consol.log(bug.dataValuse);
        });
});

*/  
   