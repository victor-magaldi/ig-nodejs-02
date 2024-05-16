import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserDeleteUserName1714955936756 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.dropColumn("users", "userName");
    } catch (err) {
      console.log("err=>", err);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.addColumn(
        "users",
        new TableColumn({
          name: "userName",
          type: "varchar",
        }),
      );
    } catch (err) {
      console.log("err=>", err);
    }
  }
}
