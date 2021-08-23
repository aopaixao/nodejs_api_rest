const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente', {
    cliente_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    senha: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: "cliente_cpf_key"
    },
    telefone: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    endereco_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cliente',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cliente_cpf_key",
        unique: true,
        fields: [
          { name: "cpf" },
        ]
      },
      {
        name: "cliente_pkey",
        unique: true,
        fields: [
          { name: "cliente_id" },
        ]
      },
    ]
  });
};
