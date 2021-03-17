import { Service } from "../../../../shared/presentation/protocols/service";
import { ISpecificationRepository } from "../../repositories";
import { Specification } from "../../models";

export class ListSpecificationsService
  implements Service<void, Specification[]> {
  constructor(private specificationRepository: ISpecificationRepository) {}

  async execute(): Promise<Specification[]> {
    return this.specificationRepository.getAll();
  }
}
