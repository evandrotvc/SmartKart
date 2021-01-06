// Este Arquivo Serve para ativar as nossas rotas
//que será responsável por unir todas as rotas de nossa aplicação. 

import { Router } from 'express';
import usersRouter from './user.routes';
import productsRouter from './product.routes';

const routes = Router();

routes.use('/users', usersRouter);

routes.use('/products', productsRouter);

export default routes;