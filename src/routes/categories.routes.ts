import { Router } from "express";

import { CategoriesRespository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRespository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const listCategories = categoriesRepository.list();
  return response.json(listCategories);
});

export { categoriesRoutes };
