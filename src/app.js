import express from 'express';
import cors from 'cors';
import produtoRouter from './routes/routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/produtos', produtoRouter);

app.get('/', (req, res) => res.redirect('/produtos/doc'));

export default app;
