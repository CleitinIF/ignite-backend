import { Service } from "../../../../shared/presentation/protocols";
import { Specification } from "../../models";
import { ISpecificationRepository } from "../../repositories";

interface Request {
  id?: string;
  name: string;
  description: string;
}

export class CreateSpecificationService
  implements Service<Request, Specification> {
  constructor(private specificationRepository: ISpecificationRepository) {}

  async execute({ name, description }: Request): Promise<Specification> {
    const specificationAlreadyExists = await this.specificationRepository.getByName(
      name
    );

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    const specification = await this.specificationRepository.create({
      name,
      description,
    });

    return specification;
  }
}
