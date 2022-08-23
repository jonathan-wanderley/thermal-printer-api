import { Router } from 'express';
import ProductController from '../controllers';

const routes = Router();

routes.get('/products', ProductController.find);

export default routes;
