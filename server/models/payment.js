'use strict';
module.exports = function(sequelize, DataTypes) {
  var Payment = sequelize.define('Payment', {
    recipient: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
    memo: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Payment.belongsTo(models.User);
      }
    }
  });
  return Payment;
};