import { Service } from "../../../../shared/presentation/protocols/service";
import { ICategoryRepository } from "../../repositories";
import { Category } from "../../models/Category";

interface Request {
  id?: string;
  name: string;
  description: string;
}

export class CreateCategoryService implements Service<Request, Category> {
  constructor(private categoryRepository: ICategoryRepository) {}

  async execute({ name, description }: Request): Promise<Category> {
    const categoryAlreadyExists = this.categoryRepository.getByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    const category = this.categoryRepository.create({
      name,
      description,
    });

    return category;
  }
}
