const verificarDadosDoUsuarioMiddleware = (req, res, next) => {
  const { email, nome, senha } = req.body;

  if (!email || !nome || !senha) {
    return res.status(422).send('Dados incompletos');
  }

  next();
};

export default verificarDadosDoUsuarioMiddleware;
