import { Request, Response } from "express";
import { parse as csvParse } from "csv-parse";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";
import { container } from "tsyringe";

class ImportCategoriesController {
  handle(request: Request, response: Response): Response {
    const { file } = request;
    const importCategoriesUseCase = container.resolve(ImportCategoriesUseCase);

    importCategoriesUseCase.execute(file);

    return response.status(201).send();
  }
}

export { ImportCategoriesController };
