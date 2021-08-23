import { Router } from 'express';
import ProdutoController from './app/controllers/ProdutoController';

const routes = Router();

routes.get('/produtos', ProdutoController.index)
routes.get('/produtos/:id', ProdutoController.show)
routes.post('/produtos', ProdutoController.store)
routes.put('/produtos/:id', ProdutoController.update)
routes.delete('/produtos/:id', ProdutoController.delete)

//Rota padrão
routes.get('/', function (req, res) {
  return res.json({
    ok: true
  })
})
export default routes;