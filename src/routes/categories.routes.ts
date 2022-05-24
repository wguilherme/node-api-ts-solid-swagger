import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/usecases/createCategory";
import { listCategoryController } from "../modules/cars/usecases/listCategory";

const upload = multer({
  dest: "./tmp",
});

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  const { file } = request;
  console.log("file", file);
  return response.send();
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoryController.handle(request, response);
});

export { categoriesRoutes };
