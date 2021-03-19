import fs from "fs";
import csvParse from "csv-parse";

import { File } from "../../../../shared/main/protocols";

import { Service } from "../../../../shared/presentation/protocols";
import { Specification as Category } from "../../models";
import { ICategoryRepository } from "../../repositories";

interface Request {
  file: File;
}

export class ImportCategoriesService implements Service<Request, Category[]> {
  constructor(private categoriesRepository: ICategoryRepository) {}

  private async deleteFile(path: string): Promise<void> {
    return new Promise((resolve) => {
      fs.unlink(path, () => {
        resolve();
      });
    });
  }

  private async readCategories(
    file: File
  ): Promise<{ name: string; description: string }[]> {
    return new Promise((resolve) => {
      const categories: { name: string; description: string }[] = [];
      const stream = fs.createReadStream(file.path);

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async ([name, description]) => {
          categories.push({ name, description });
        })
        .on("end", async () => {
          // TODO adicionar um job, para fazer isso de forma assincrona e tratar erros
          await this.deleteFile(file.path);
          return resolve(categories);
        });
    });
  }

  async execute({ file }: Request): Promise<Category[]> {
    const categories = await this.readCategories(file);
    const createdCategories: Category[] = [];

    Promise.all(
      categories.map(async ({ name, description }) => {
        const categoryAlreadyExist = await this.categoriesRepository.getByName(
          name
        );

        if (!categoryAlreadyExist) {
          const category = await this.categoriesRepository.create({
            name,
            description,
          });
          createdCategories.push(category);
        }
      })
    );

    return createdCategories;
  }
}
