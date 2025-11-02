import { Request, Response, NextFunction } from "express";
import { prisma } from "@/database/prisma";
import { z } from "zod";

class ProjectsController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const paramsSchema = z.object({
        segment_id: z.string().uuid(),
      });

      const { segment_id } = paramsSchema.parse(request.params);

      const projects = await prisma.project.findMany({
        where: { segmentId: segment_id },
        orderBy: { name: "asc" },
      });

      return response.json(projects);
    } catch (error) {
      next(error);
    }
  }

  async show(request: Request, response: Response, next: NextFunction) {
    try {
      const paramsSchema = z.object({
        id: z.string().uuid(),
      });

      const { id } = paramsSchema.parse(request.params);

      const project = await prisma.project.findUnique({
        where: { id },
        include: {
          segment: true,
        },
      });

      return response.json(project);
    } catch (error) {
      next(error);
    }
  }

  async list(request: Request, response: Response, next: NextFunction) {
    try {
      const projects = await prisma.project.findMany({
        include: {
          segment: true,
        },
        orderBy: { startDate: "asc" },
      });

      return response.json(projects);
    } catch (error) {
      next(error);
    }
  }
}

export { ProjectsController };
