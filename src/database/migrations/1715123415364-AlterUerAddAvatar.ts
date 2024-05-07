import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUerAddAvatar1715123415364 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.addColumn(
        "users",
        new TableColumn({
          name: "avatar",
          type: "varchar",
          isNullable: true,
        }),
      );
    } catch (err) {
      console.log("err=>", err);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.dropColumn("users", "avatar");
    } catch (err) {
      console.log("err=>", err);
    }
  }
}
