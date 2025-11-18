import { Router } from "express";
import { ProjectsController } from "@/controllers/projects-controller";

const projectsRoutes = Router();
const projectsController = new ProjectsController();

projectsRoutes.get("/", projectsController.list);
projectsRoutes.get("/segment/:segment_id", projectsController.index);
projectsRoutes.get("/:id", projectsController.show);

export { projectsRoutes };
