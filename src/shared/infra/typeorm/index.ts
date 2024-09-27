import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  host: "database_ignite", //localhost or database_ignite
  entities: [
    `src/modules/cars/infra/typeorm/entities/Category.ts`,
    "src/modules/cars/infra/typeorm/entities/Specification.ts",
    "src/modules/accounts/infra/typeorm/entities/User.ts",
    "src/modules/accounts/cars/typeorm/entities/User.ts*{.ts,.js}",
  ],
  migrations: ["src/shared/infra/typeorm/migrations/*{.ts,.js}"],
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
