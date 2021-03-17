import { Router } from "express";
import { adaptRoute } from "../../../shared/adapters";
import {
  createSpecificationController,
  listSpecificationsController,
} from "../useCases";

const specificationsRoutes = Router();

specificationsRoutes.get("/", adaptRoute(listSpecificationsController));

specificationsRoutes.post("/", adaptRoute(createSpecificationController));

export default specificationsRoutes;
