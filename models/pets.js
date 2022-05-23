const { Model, DataTypes } = require("Sequelize")
const Sequelize = require("../config/connection")

class pets extends Model {}
pets.init(
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
)
