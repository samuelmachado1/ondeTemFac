import { Request, Response, NextFunction } from "express";
import { prisma } from "@/database/prisma";

class SegmentsController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const segments = await prisma.segment.findMany({
        orderBy: { name: "asc" },
      });

      return response.json(segments);
    } catch (error) {
      next(error);
    }
  }
}

export { SegmentsController };
