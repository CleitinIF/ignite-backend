import { Router } from "express";
import multer from "multer";

import { adaptRoute } from "../../../shared/main/adapters";
import { multerConfig } from "../../../shared/config";
import {
  listCategoriesController,
  createCategoryController,
} from "../useCases";
import { importCategoriesController } from "../useCases/importCategories";

const upload = multer(multerConfig);

const categoriesRoutes = Router();

categoriesRoutes.get("/", adaptRoute(listCategoriesController));

categoriesRoutes.post("/", adaptRoute(createCategoryController));

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  adaptRoute(importCategoriesController)
);

export default categoriesRoutes;
