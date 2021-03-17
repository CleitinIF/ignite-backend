import { CategoryRepository } from "../../repositories";
import { CreateCategoryController } from "./controller";
import { CreateCategoryService } from "./service";

const categoriesRepository = CategoryRepository.getInstance();

const createCategoryService = new CreateCategoryService(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryService
);

export { createCategoryController };
