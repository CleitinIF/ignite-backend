import { Repository } from "../../../shared/presentation/protocols";
import { Category } from "../models/Category";

export interface ICategoryRepository extends Repository<Category> {
  create({ id, name, description }: CreateCategoryDTO): Category;
  getAll(): Category[];
  getByName(name: string): Category | undefined;
}

export interface CreateCategoryDTO {
  id?: string;
  name: string;
  description: string;
}

export class CategoryRepository implements ICategoryRepository {
  private static instance: CategoryRepository;
  private categories: Category[];

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.instance) {
      const instance = new CategoryRepository();
      CategoryRepository.instance = instance;
    }
    return CategoryRepository.instance;
  }

  public create({ id, name, description }: CreateCategoryDTO): Category {
    const category = new Category({ id, name, description });

    this.categories.push(category);

    return category;
  }

  public getAll(): Category[] {
    return this.categories;
  }

  public getByName(name: string): Category | undefined {
    return this.categories.find((category) => category.name === name);
  }
}
