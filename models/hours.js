module.exports = function(sequelize, DataTypes) {
  var Hour = sequelize.define("Hour", {
    hourName: DataTypes.INTEGER,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  });

  Hour.associate = function(models) {
    Hour.belongsTo(models.Project, {
      onDelete: "cascade"
    });
  };

  return Hour;
};
