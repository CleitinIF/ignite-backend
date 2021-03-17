import { ICategoryRepository } from "../repositories";
import { Category } from "../models/Category";

interface Request {
  id?: string;
  name: string;
  description: string;
}

export class CreateCategoryService {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute({ name, description }: Request): Category {
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
