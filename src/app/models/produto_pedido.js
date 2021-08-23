const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produto_pedido', {
    produto_pedido_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    qtd_produto_pedido: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    preco_produto_pedido: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'produto',
        key: 'produto_id'
      }
    },
    pedido_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pedido',
        key: 'pedido_id'
      }
    }
  }, {
    sequelize,
    tableName: 'produto_pedido',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "produto_pedido_pkey",
        unique: true,
        fields: [
          { name: "produto_pedido_id" },
        ]
      },
    ]
  });
};
