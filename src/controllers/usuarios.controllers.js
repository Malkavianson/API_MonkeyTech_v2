import UsuariosServices from '../services/usuario.services.js';
const usuariosServices = new UsuariosServices();
class UsuariosControllers {
  async listarTodos(req, res) {
    const usuarios = await usuariosServices.listarTodos();
    res.send(usuarios);
  }
  async listarPorId(req, res) {
    const id = req.params.id;
    const usuario = await usuariosServices.listarPorId({ id });
    res.send(usuario);
  }
  async criarNovoUsuario(req, res) {
    const { email, nome, senha, adm } = req.body;
    try {
      const usuario = await usuariosServices.criarNovoUsuario({
        email,
        nome,
        senha,
        adm,
      });
      res.status(201).send(usuario);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Email já cadastrado');
      }
    }
  }
  async atualizarUsuario(req, res) {
    const id = req.params.id;
    const { email, nome, senha, adm } = req.body;
    try {
      const usuarioAtualizado = await usuariosServices.atualizarUsuario({
        id,
        email,
        nome,
        senha,
        adm,
      });
      res.send(usuarioAtualizado);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Email já cadastrado');
      }
    }
  }
  async excluirUsuario(req, res) {
    const id = req.params.id;
    await usuariosServices.excluirUsuario({ id });
    res.sendStatus(200);
  }
}
export default UsuariosControllers;