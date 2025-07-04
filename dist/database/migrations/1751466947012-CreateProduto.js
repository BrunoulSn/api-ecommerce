"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduto1751466947012 = void 0;
const typeorm_1 = require("typeorm");
class CreateProduto1751466947012 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("produtos");
    }
}
exports.CreateProduto1751466947012 = CreateProduto1751466947012;
