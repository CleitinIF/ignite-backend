import { Router } from "express";
import { CategoryRepository } from "../repositories/Category";
import { CreateCategoryService } from "../services/CreateCategory";

const categoriesRoutes = Router();

const categoryRepository = new CategoryRepository();

categoriesRoutes.get("/", (req, res) => {
  const categories = categoryRepository.getAll();

  return res.status(200).send(categories);
});

categoriesRoutes.post("/", (req, res) => {
  const { name, description, id } = req.body;

  const createCategory = new CreateCategoryService(categoryRepository);
  const category = createCategory.execute({ description, name, id });

  res.status(201).json(category);
});

export default categoriesRoutes;
