import { Router } from 'express';
import OrderController from '../controllers';
import OrderValidator from '../validators';

const routes = Router();

routes.post('/orders', OrderValidator.create, OrderController.create);
routes.post('/orders/finish/:id', OrderController.finish);
routes.delete('/orders/:id', OrderController.delete);

routes.get('/kitchen', OrderController.kitchen);

export default routes;
