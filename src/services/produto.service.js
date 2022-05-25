import Produtos from '../models/Produtos.model.js';

class ProdutoServices {
  async listarTodos() {
    const produtos = await Produtos.find();
    if (produtos.length === 0) {
      throw {
        status: 404,
        message: 'Nenhum produto disponível!',
      };
    }
    return produtos;
  }

  async listarProdutosPorID({id}) {
    const produtoSelecionado = await Produtos.findById(id).exec();
    return produtoSelecionado;
  }

  async criarNovoProduto({ produto, descricao, foto, preco }) {
    const novoProduto = {
      produto,
      descricao,
      foto,
      preco,
    };
    const p = await Produtos.create(novoProduto);
    return p;
  }

  async atualizarProduto({ produto, descricao, foto, preco, id }) {
    const produtoAtualizado = {
      produto,
      descricao,
      foto,
      preco,
    };
    await Produtos.updateOne({ _id: id }, produtoAtualizado);
    const p = await Produtos.findById(id);
    return p;
  }

  async excluirProduto({ id }) {
    const p = await Produtos.findByIdAndDelete(id);
    return p;
  }
}

export default ProdutoServices;
