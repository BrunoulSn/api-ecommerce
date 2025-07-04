import express from 'express'; //importação do express
import 'reflect-metadata'; //importação do reflect-metadata para o TypeORM
import routeProdutos from "./routes/produto.routes"; //importação das rotas de produto
require('dotenv').config(); //importação do dotenv para carregar variáveis de ambiente

const app = express(); //instância do express

app.use(express.json()); //middleware para interpretar requisições JSON

app.use('/produtos', routeProdutos); //Define a rota base para as rotas de produto

app.listen(process.env.API_PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.API_PORT}`);
}); //inicia o servidor na porta 3000
