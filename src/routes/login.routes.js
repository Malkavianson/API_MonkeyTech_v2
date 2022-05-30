import { Router } from 'express';
import LoginControllers from '../controllers/login.controllers.js';

const loginRouter = Router();
const loginControllers = new LoginControllers();

loginRouter.post('', loginControllers.realizarLogin);

export default loginRouter;
