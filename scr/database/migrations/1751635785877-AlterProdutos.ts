import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterProdutos1751635785877 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns("produtos", [new TableColumn({
            name: "quantidade_estoque",
            type: "int",
            isNullable: false,
        })
    
    ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("produtos", "quantidade_estoque");
    }

}
