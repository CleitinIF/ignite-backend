import { Repository } from "../../../shared/presentation/protocols";
import { Specification } from "../models/Specification";

export interface ISpecificationRepository extends Repository<Specification> {
  create({ id, name, description }: CreateSpecificationDTO): Specification;
  getAll(): Specification[];
  getByName(name: string): Specification | undefined;
}

export interface CreateSpecificationDTO {
  id?: string;
  name: string;
  description: string;
}

export class SpecificationRepository implements ISpecificationRepository {
  private static instance: SpecificationRepository;
  private specifications: Specification[];

  private constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!SpecificationRepository.instance) {
      const instance = new SpecificationRepository();
      SpecificationRepository.instance = instance;
    }
    return SpecificationRepository.instance;
  }

  public create({
    id,
    name,
    description,
  }: CreateSpecificationDTO): Specification {
    const specification = new Specification({ id, name, description });

    this.specifications.push(specification);

    return specification;
  }

  public getAll(): Specification[] {
    return this.specifications;
  }

  public getByName(name: string): Specification | undefined {
    return this.specifications.find(
      (specification) => specification.name === name
    );
  }
}
