import { DataSource } from "typeorm";
import { CreateCategories1713571344655 } from "./migrations/1713571344655-CreateCategories";

const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  host: "localhost",
  entities: [],
  migrations: [CreateCategories1713571344655],

});

dataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

export { dataSource }