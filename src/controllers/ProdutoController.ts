import { Request, Response } from "express";

export const ProdutoController = {

    async listar(req: Request, res: Response) {
        res.status(200).json({ "Sucesso com essa requisição": "Lista de produtos!" });
    },

    async criar(req: Request, res: Response) {
        res.status(200).json({ "Sucesso com essa requisição": "Produto criado com sucesso!" });
    },

    async buscar(req: Request, res: Response) {
        res.status(200).json({ "Sucesso com essa requisição": "Produto encontrado!" });
    },
    async atualizar(req: Request, res: Response) {
        res.status(200).json({ "Sucesso com essa requisição": "Produto atualizado com sucesso!" });
    },
    async deletar(req: Request, res: Response) {
        res.status(200).json({ "Sucesso com essa requisição": "Produto deletado com sucesso!" });

    },
}
