import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
// Importa os decoradores Entity e PrimaryGeneratedColumn do TypeORM para definir a entidade Produto
@Entity("produtos")
export class Produto {
    @PrimaryGeneratedColumn()
    // @PrimaryGeneratedColumn() é um decorador do TypeORM que indica que a coluna é uma chave primária gerada automaticamente.
    id: number;
    @Column()
    nome: string;
    @Column()
    descricao: string;
    @Column("decimal", { precision: 10, scale: 2 })
    preco: number;
    @Column()
    quantidadeEstoque: number;
    @Column()
    categoriaId: number;

    constructor(
        id: number,
        nome: string,
        descricao: string,
        preco: number,
        quantidadeEstoque: number,
        categoriaId: number
    ) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
        this.categoriaId = categoriaId;
    }
}