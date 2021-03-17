import { Router } from "express";

import CategoriesRoutes from "../../../../../modules/cars/routes/categories";
import SpecificationsRoutes from "../../../../../modules/cars/routes/specifications";

const routes = Router();

routes.use("/categories", CategoriesRoutes);
routes.use("/specifications", SpecificationsRoutes);

export default routes;
