import { Request, Response } from "express";
import { parse as csvParse } from "csv-parse";
import { ImportCategoriesUseCase } from "./ImportCategoriesUseCase";

class ImportCategoriesController {
  constructor(private importCategoriesUseCase: ImportCategoriesUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request;

    this.importCategoriesUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoriesController };
