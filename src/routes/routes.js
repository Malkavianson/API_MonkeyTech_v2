import { createRequire } from "module";
import { Router } from 'express';
import swaggerUI from "swagger-ui-express";
import ProdutoControllers from '../controllers/produto.controller.js';
import produtoIdMiddleware from '../middlewares/produtoId.middleware.js';
import produtoDataMiddleware from '../middlewares/produtoData.middleware.js';
const produtoRouter = Router();
const produtoControllers = new ProdutoControllers();
const require = createRequire(import.meta.url);
const swaggerDocument = require('../../swagger.json'); 

produtoRouter.use('/doc', swaggerUI.serve);
produtoRouter.get('/doc', swaggerUI.setup(swaggerDocument));


produtoRouter.get('/todos', produtoControllers.listarTodos);
produtoRouter.get(
  '/:id',
  produtoIdMiddleware,
  produtoControllers.listarProdutosPorID,
);
produtoRouter.post(
  '/novo',
  produtoDataMiddleware,
  produtoControllers.criarNovoProduto,
);
produtoRouter.put(
  '/mudar/:id',
  produtoIdMiddleware,
  produtoDataMiddleware,
  produtoControllers.atualizarProduto,
);
produtoRouter.delete(
  '/del/:id',
  produtoIdMiddleware,
  produtoControllers.excluirProduto,
);

export default produtoRouter;
