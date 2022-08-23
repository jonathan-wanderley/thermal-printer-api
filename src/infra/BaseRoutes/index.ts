import { Router } from 'express';
import ProductRoutes from '../../modules/Product/routes';

const routes = Router();

routes.use(ProductRoutes);

export default routes;
