import { Router } from 'express';
import OrderController from '../controllers';

const routes = Router();

routes.post('/orders', OrderController.create);
routes.post('/orders/finish/:id', OrderController.finish);

export default routes;
