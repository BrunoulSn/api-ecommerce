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
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "preco",
                        type: "decimal",
                        precision: 10, // Total de dígitos
                        scale: 2, // Número de dígitos após o ponto decimal
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
