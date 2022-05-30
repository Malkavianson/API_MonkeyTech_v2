import express from 'express';
import cors from 'cors';
import produtoRouter from './routes/routes.js';
import usuariosRouter from './routes/usuarios.routes.js';
import loginRouter from './routes/login.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/produtos', produtoRouter);
app.use('/usuarios', usuariosRouter);
app.use('/login', loginRouter);

app.get('/', (req, res) => res.redirect('/produtos/doc'));

export default app;
