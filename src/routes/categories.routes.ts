import { Router } from "express";

import { CategoriesRespository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import { createCategoryController } from "../modules/cars/usecases/createCategory";
import { listCategoryController } from "../modules/cars/usecases/listCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  console.log("pass");
  return listCategoryController.handle(request, response);
});

export { categoriesRoutes };
