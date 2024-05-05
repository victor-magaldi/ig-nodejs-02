import { DataSource } from "typeorm";
import { CreateCategories1713571344655 } from "./migrations/1713571344655-CreateCategories";
import { Category } from "../modules/cars/entities/Category";
import { CreateSpecifications1714868097352 } from "./migrations/1714868097352-CreateSpecifications";

const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  host: "database_ignite", //localhost
  entities: [Category],
  migrations: ["src/database/migrations/*{.ts,.js}"],
});

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

export { dataSource };
