import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class employee extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmpName: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    EmpPhone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EmpCity: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    EmpEmail: {
      type: DataTypes.STRING(75),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'employee',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  return employee;
  }
}
