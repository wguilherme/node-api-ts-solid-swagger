import { Router } from "express";

import { CategoriesRespository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/usecases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRespository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const listCategories = categoriesRepository.list();
  return response.json(listCategories);
});

export { categoriesRoutes };
