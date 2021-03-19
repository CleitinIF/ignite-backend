import { CategoryRepository } from "../../repositories";
import { ImportCategoriesController } from "./controller";
import { ImportCategoriesService } from "./service";

const categoriesRepository = CategoryRepository.getInstance();

const importCategoriesService = new ImportCategoriesService(
  categoriesRepository
);

const importCategoriesController = new ImportCategoriesController(
  importCategoriesService
);

export { importCategoriesController };
