module.exports = (sequelize, type) => {
    return sequelize.define('developer', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        info: type.JSON
    })
}
