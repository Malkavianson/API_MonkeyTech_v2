const produtosData = (req, res, next) => {
  const { produto, descricao, foto, preco } = req.body;
  if (!produto || !descricao || !foto || !preco) {
    return res.status(422).send('Dados Incompletos!');
  }

  next();
};

export default produtosData;
