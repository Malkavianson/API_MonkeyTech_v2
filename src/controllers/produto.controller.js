import ProdutoServices from '../services/produto.service.js';
const produtoServices = new ProdutoServices();
class ProdutoControllers {
  async listarTodos(req, res) {
    try {
      const produtos = await produtoServices.listarTodos();
      res.send(produtos);
    } catch (err) {
      res.status(err.status).send(err.message);
    }
  }

  async listarProdutosPorID(req, res) {
    const id = req.params.id;
    const produto = await produtoServices.listarProdutosPorID({ id });
    res.send(produto);
  }

  async criarNovoProduto(req, res) {
    const { produto, descricao, foto, preco } = req.body;

    try {
      const novoProduto = await produtoServices.criarNovoProduto({
        produto,
        descricao,
        preco,
        foto,
      });
      res.status(201).send(novoProduto);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async atualizarProduto(req, res) {
    const { produto, descricao, foto, preco } = req.body;
    const id = req.params.id;
    try {
      const produtoAtualizado = await produtoServices.atualizarProduto({
        produto,
        descricao,
        preco,
        foto,
        id,
      });
      res.send(produtoAtualizado);
    } catch (err) {
      res.status(409).send(err.message);
    }
  }

  async excluirProduto(req, res) {
    const id = req.params.id;
    try {
      const produto = await produtoServices.excluirProduto({ id });
      res.status(200).send(produto);      
    } catch (err) {
      res.status(404).send(err.message);      
    }
  }
}
export default ProdutoControllers;
