import { Router } from 'express';
import OrderController from '../controllers';

const routes = Router();

routes.post('/orders', OrderController.create);

export default routes;
