import { response, Router } from "express";
const procuradosRoutes = Router();

let artistas = [
{
    id: 1,
    nome: "Pitty",
    descricaoFisica: ["cabelos curtos", "olhos pretos", "cavanhaque", "tamanho baixo"],
    envolvimentosSuspeito: true,
},
];

// Rota para listar todos os artistas Procurados
procuradosRoutes.get("/", (req, res) => {
    return res.status(200).json(artistas);
});


export default procuradosRoutes;
