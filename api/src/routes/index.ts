import { Router } from "express";

import { projectsRoutes } from "./projects-route";
import { segmentsRoutes } from "./segments-route";

const routes = Router();
routes.use("/segments", segmentsRoutes);
routes.use("/projects", projectsRoutes);

export { routes };
