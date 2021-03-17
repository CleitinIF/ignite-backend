import { Service } from "../../../../shared/presentation/protocols/service";
import { ICategoryRepository } from "../../repositories";
import { Category } from "../../models/Category";

export class ListCategoriesService implements Service<void, Category[]> {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute(): Promise<Category[]> {
    return this.categoryRepository.getAll();
  }
}
