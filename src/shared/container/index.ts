import { container } from "tsyringe";

import { ICategoryRepository } from "../../modules/cars/repositories/interfaces/ICategoriesRepository";
import { CategoriesRepository } from "@modules/cars/infra/typorm/repositories/CategoriesRepository";

import { ISpecificationsRepository } from "../../modules/cars/repositories/interfaces/ISpecificationsRepository";
import { SpecificationsRepository } from "@modules/cars/infra/typorm/repositories/SpecificationsRepository";

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";

container.registerSingleton<ICategoryRepository>("CategoriesRepository", CategoriesRepository);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository);
