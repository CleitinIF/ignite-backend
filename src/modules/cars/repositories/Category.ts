import { Category } from "../models/Category";

export interface ICategoryRepository {
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
  private categories: Category[];

  constructor() {
    this.categories = [];
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
