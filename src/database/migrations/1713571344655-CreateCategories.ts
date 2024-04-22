import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1713571344655 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log("teste")
    try {
      const table = await queryRunner.createTable(new Table(
        {
          name: "categories",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true
            },
            {
              name: "name",
              type: "varchar"
            },
            {
              name: "description",
              type: "varchar",
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            }
          ]
        }
      ))
      console.log("teste", table)

    } catch (err) {
      console.log("ERROR=>", err)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("categories")
  }

}
