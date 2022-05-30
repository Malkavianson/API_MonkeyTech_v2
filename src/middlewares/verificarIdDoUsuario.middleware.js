import Usuario from '../models/usuarios.model.js';
import mongoose from 'mongoose';

const verificarIdDoUsuarioMiddleware = async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const usuario = await Usuario.findById(id);

  if (!usuario) {
    return res.status(404).send('Usuario não encontrado!');
  }

  next();
};

export default verificarIdDoUsuarioMiddleware;
