import { SpecificationRepository } from "../../repositories";
import { CreateSpecificationController } from "./controller";
import { CreateSpecificationService } from "./service";

const categoriesRepository = SpecificationRepository.getInstance();

const createSpecificationService = new CreateSpecificationService(
  categoriesRepository
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationService
);

export { createSpecificationController };
