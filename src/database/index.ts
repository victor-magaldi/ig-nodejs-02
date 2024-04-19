import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  host: "database_ignite",
  entities: [
    // Category,
    // ...
  ],
  migrations: [
    // CreateCategories1616082124654,
    // ...
  ],
});

dataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })

export { dataSource }