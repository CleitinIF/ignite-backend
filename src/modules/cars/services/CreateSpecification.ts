import { ISpecificationRepository } from "../repositories";
import { Specification } from "../models";

interface Request {
  id?: string;
  name: string;
  description: string;
}

export class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ name, description }: Request): Specification {
    const specificationAlreadyExists = this.specificationRepository.getByName(
      name
    );

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    const specification = this.specificationRepository.create({
      name,
      description,
    });

    return specification;
  }
}
