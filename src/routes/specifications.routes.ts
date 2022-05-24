import { Router } from "express";

import { createSpecificationController } from "../modules/cars/usecases/createSpecification";

export const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
});
