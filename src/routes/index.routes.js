import { Router } from "express";
import  procuradosRoutes from "./procurados.routes.js";


const routes = Router();


routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Bem vindo ao meu servidor!" });
});


routes.use("/artistas", procuradosRoutes);

export default routes;