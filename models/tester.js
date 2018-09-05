module.exports = (sequelize, type) => {
    return sequelize.define('tester', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        info: type.JSON
    })
}
