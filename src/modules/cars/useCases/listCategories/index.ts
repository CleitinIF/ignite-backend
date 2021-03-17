import { CategoryRepository } from "../../repositories";
import { ListCategoriesController } from "./controller";
import { ListCategoriesService } from "./service";

const categoriesRepository = CategoryRepository.getInstance();

const listCategoriesService = new ListCategoriesService(categoriesRepository);

const listCategoriesController = new ListCategoriesController(
  listCategoriesService
);

export { listCategoriesController };
