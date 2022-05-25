const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Pets extends Model {}
Pets.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    isMicrochipped: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  },
  {
    sequelize,
    timeStamps: false,
    freezeTableName: true,
    undescored: true,
    themodelName: "pets",
  }
);

module.exports = Pets;