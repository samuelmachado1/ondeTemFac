import { Router } from "express";
import { SegmentsController } from "@/controllers/segments-controller";

const segmentsRoutes = Router();
const segmentsController = new SegmentsController();

segmentsRoutes.get("/", segmentsController.index);

export { segmentsRoutes };
