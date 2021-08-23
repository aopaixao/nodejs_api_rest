import Sequelize from 'sequelize';
import initModels from '../models/init-models';
import config from '../../config/database';

var sequelize = new Sequelize(config.dbname, config.user, config.pass, config.options);
var models = initModels(sequelize);
var Produto = models.produto;

class ProdutoController {
  async store(req, res) {
    const produto = await Produto.create(req.body);
    return res.json(produto)
  }
  async index(req, res) {
    const produtos = await Produto.findAll();
    return res.json(produtos)
  }
  async update(req, res) {
    let produto = await Produto.findByPk(req.params.id)
    produto = await produto.update(req.body)
    return res.json(produto)
  }
  async delete(req, res) {
    let produto = await Produto.findByPk(req.params.id)
    produto = await produto.destroy(req.body)
    return res.json(produto)
  }
  async show(req, res) {
    let produto = await Produto.findByPk(req.params.id)
    return res.json(produto)
  }
}

export default new ProdutoController();