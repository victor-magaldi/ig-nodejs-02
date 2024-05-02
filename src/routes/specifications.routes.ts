import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationControlle = new CreateSpecificationController();

specificationsRoutes.post("/", createSpecificationControlle.handle);

// specificationsRoutes.get("/", (request, response) => {
//   const allspecifications = specificationsRepository.list();
//   return response.json(allspecifications);
// });

export { specificationsRoutes };
