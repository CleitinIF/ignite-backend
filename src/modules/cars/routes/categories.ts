import { Router } from "express";
import { adaptRoute } from "../../../shared/adapters";
import {
  listCategoriesController,
  createCategoryController,
} from "../useCases";

const categoriesRoutes = Router();

categoriesRoutes.get("/", adaptRoute(listCategoriesController));

categoriesRoutes.post("/", adaptRoute(createCategoryController));

export default categoriesRoutes;
