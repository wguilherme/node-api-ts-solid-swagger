import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();
app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.get("/", (req, res) => res.json("works"));

app.post("/courses", (request, response) => {
  const { name } = request.body;
  response.json({ name });
});

app.listen(3333, () => console.log("Server is runnning at port 3333"));
