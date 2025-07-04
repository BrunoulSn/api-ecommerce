import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";


const routes = Router();

routes.get("/", ProdutoController.listar);
routes.post("/", ProdutoController.criar);
routes.get("/:id", ProdutoController.buscar);
routes.put("/:id", ProdutoController.atualizar);
routes.delete("/:id", ProdutoController.deletar);

export default routes;