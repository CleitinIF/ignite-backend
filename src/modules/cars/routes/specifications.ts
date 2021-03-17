import { Router } from "express";
import { SpecificationRepository } from "../repositories/Specification";
import { CreateSpecificationService } from "../services";

const specificationsRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationsRoutes.get("/", (req, res) => {
  const specifications = specificationRepository.getAll();

  return res.status(200).send(specifications);
});

specificationsRoutes.post("/", (req, res) => {
  const { name, description, id } = req.body;

  const createSpecification = new CreateSpecificationService(
    specificationRepository
  );
  const specification = createSpecification.execute({ description, name, id });

  res.status(201).json(specification);
});

export default specificationsRoutes;
