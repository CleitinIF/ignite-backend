import { SpecificationRepository } from "../../repositories";
import { ListSpecificationsController } from "./controller";
import { ListSpecificationsService } from "./service";

const categoriesRepository = SpecificationRepository.getInstance();

const listSpecificationsService = new ListSpecificationsService(
  categoriesRepository
);

const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsService
);

export { listSpecificationsController };
