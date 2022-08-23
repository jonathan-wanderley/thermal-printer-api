import { Router } from 'express';
import OrderController from '../controllers';

const routes = Router();

routes.post('/order', OrderController.create);

export default routes;
