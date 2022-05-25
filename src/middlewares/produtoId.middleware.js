import Produto from '../models/Produtos.model.js';
import mongoose from 'mongoose';

const produtoIdMiddleware = async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).send({ message: 'ID inválido!' });
  }

  const produto = await Produto.findById(id);

  if (!produto) {
    return res.status(404).send('Produto não encontrado!');
  }
  next();
};

export default produtoIdMiddleware;
