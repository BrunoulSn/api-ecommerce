import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduto1751466947012 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "produtos",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "nome",
                        type: "varchar",
                        isNullable: false,
                    },
                    {
                        name: "descricao",
                        type: "text",
                        isNullable: false,
                    },
                    {
                        name: "preco",
                        type: "decimal",
                        precision: 10,
                        scale: 2,
                        isNullable: false,
                    },
                    {
                        name: "quantidade_estoque",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "categoria_id",
                        type: "int",
                        isNullable: false,
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("produtos");
    }

}
