import { Router } from 'express';
import ProductRoutes from '../../modules/Product/routes';
import OrderRoutes from '../../modules/Order/routes';

const routes = Router();

routes.use(ProductRoutes);
routes.use(OrderRoutes);

export default routes;
