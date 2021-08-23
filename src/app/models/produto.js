const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('produto', {
    produto_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome_produto: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    descricao_produto: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    preco_produto: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    qtd_estoque: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data_cadastro_produto: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'categoria_id'
      }
    },
    imagem: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'produto',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "produto_pkey",
        unique: true,
        fields: [
          { name: "produto_id" },
        ]
      },
    ]
  });
};
