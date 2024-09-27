import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  host: "database_ignite", //localhost
  entities: ["src/modules/**/entities/*{.ts,.js}", "src/modules/**/entities/*{.ts,.js}"],
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
