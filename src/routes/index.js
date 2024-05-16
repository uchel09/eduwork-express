import { notesRouter } from "./notes.js";
import {productRouter} from "./products.js";

const allRoutes = (app) => {
  app.use("/api/notes", notesRouter);
  app.use("/api/products", productRouter);
};

export default allRoutes;
