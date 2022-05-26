import mongoose from 'mongoose';

const { connect } = mongoose;

export const conectarAoDatabase = () => {
  connect('mongodb+srv://malkavianson:sad@produtos.ihvk6cf.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Mongodb Conectado');
    })
    .catch((err) => {
      console.log(`Erro na conexão com o Mongodb: ${err}`);
    });
};


