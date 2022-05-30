import LoginServices from '../services/login.services.js';

const loginServices = new LoginServices();
class LoginControllers {
  async realizarLogin(req, res) {
    const { email, senha } = req.body;
    const login = await loginServices.realizarLogin({ email, senha });
    if (login.status === 400) {
      return res.status(login.status).send(login.mensagem);
    }
    res.status(login.status).send({ token: login.token });
  }
}

export default LoginControllers;
