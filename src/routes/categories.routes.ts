import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/usecases/createCategory";
import { importCategoryController } from "../modules/cars/usecases/importCategory";
import { listCategoryController } from "../modules/cars/usecases/listCategory";

const upload = multer({
  dest: "./tmp",
});

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

export { categoriesRoutes };
