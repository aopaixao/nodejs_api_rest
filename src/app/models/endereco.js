const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('endereco', {
    endereco_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cep: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    rua: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    cidade: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    numero: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    complemento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    uf: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'endereco',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "endereco_pkey",
        unique: true,
        fields: [
          { name: "endereco_id" },
        ]
      },
    ]
  });
};
