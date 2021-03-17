import { Router } from 'express';

import CategoriesRoutes from './categories';

const routes = Router();

routes.use('/categories', CategoriesRoutes)

export default routes;
