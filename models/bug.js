module.exports = (sequelize, type) => {
    return sequelize.define('bug', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        info: type.JSON
    })
}