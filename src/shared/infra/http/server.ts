import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import "@shared/infra/typeorm";
import "@shared/container";

import swaggerFile from "../../../swagger.json";
import { router } from "./routes";
import { AppError } from "@shared/errors/AppErros";

const app = express();
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }
  return response
    .status(500)
    .json({ status: "error", message: `Internal sever error ${err.message}` });
});

app.listen(3333);
