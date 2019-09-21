module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    projectName: DataTypes.STRING,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  });

  Project.associate = function(models) {
    Project.belongsTo(models.Employee, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  Project.associate = function(models) {
    Project.hasMany(models.Hour, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Project;
};
