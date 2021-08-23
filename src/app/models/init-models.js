var DataTypes = require("sequelize").DataTypes;
var _categoria = require("./categoria");
var _cliente = require("./cliente");
var _endereco = require("./endereco");
var _pedido = require("./pedido");
var _produto = require("./produto");
var _produto_pedido = require("./produto_pedido");

function initModels(sequelize) {
  var categoria = _categoria(sequelize, DataTypes);
  var cliente = _cliente(sequelize, DataTypes);
  var endereco = _endereco(sequelize, DataTypes);
  var pedido = _pedido(sequelize, DataTypes);
  var produto = _produto(sequelize, DataTypes);
  var produto_pedido = _produto_pedido(sequelize, DataTypes);

  produto.belongsTo(categoria, { as: "categorium", foreignKey: "categoria_id"});
  categoria.hasMany(produto, { as: "produtos", foreignKey: "categoria_id"});
  pedido.belongsTo(cliente, { as: "cliente", foreignKey: "cliente_id"});
  cliente.hasMany(pedido, { as: "pedidos", foreignKey: "cliente_id"});
  produto_pedido.belongsTo(pedido, { as: "pedido", foreignKey: "pedido_id"});
  pedido.hasMany(produto_pedido, { as: "produto_pedidos", foreignKey: "pedido_id"});
  produto_pedido.belongsTo(produto, { as: "produto", foreignKey: "produto_id"});
  produto.hasMany(produto_pedido, { as: "produto_pedidos", foreignKey: "produto_id"});

  return {
    categoria,
    cliente,
    endereco,
    pedido,
    produto,
    produto_pedido,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
