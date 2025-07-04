"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //importação do express
require('dotenv').config(); //importação do dotenv para carregar variáveis de ambiente
const app = (0, express_1.default)(); //instância do express
app.use(express_1.default.json()); //middleware para interpretar requisições JSON
app.get('/', (req, res) => { res.send('Servidor rodando!'); }); //Pega a rota raiz e responde com uma mensagem
app.listen(process.env.API_PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.API_PORT}`);
}); //inicia o servidor na porta 3000
