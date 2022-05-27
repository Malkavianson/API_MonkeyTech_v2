import mongoose from 'mongoose';

const { connect } = mongoose;

export const conectarAoDatabase = () => {
  connect(process.env.MONGODB_URI || 'mongodb+srv://malkavianson:sad@produtos.ihvk6cf.mongodb.net/?retryWrites=true&w=majority' || 'mongodb://localhost:27017/produtos', {
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


