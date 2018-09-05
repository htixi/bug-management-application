module.exports = (sequelize, type) => {
    return sequelize.define('issuer', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        info: type.JSON
    })
}
