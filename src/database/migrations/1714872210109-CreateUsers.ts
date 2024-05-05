import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1714872210109 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      const table = await queryRunner.createTable(
        new Table({
          name: "users",
          columns: [
            {
              name: "id",
              type: "uuid",
            },
            {
              name: "name",
              type: "varchar",
            },
            {
              name: "userName",
              type: "varchar",
              isUnique: true,
            },
            {
              name: "password",
              type: "varchar",
            },
            {
              name: "email",
              type: "varchar",
            },
            {
              name: "driver_license",
              type: "varchar",
            },
            {
              name: "is_admin",
              type: "boolean",
              default: false,
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()",
            },
          ],
        }),
      );
      console.log("Create Table User", table);
    } catch (err) {
      console.log("ERROR=>", err);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
