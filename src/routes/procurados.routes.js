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

// Rota para cadastrar um novo planeta
procuradosRoutes.post("/", (req, res) => {
    const { nome, descricaoFisica, envolvimentosSuspeito} = req.body;
    
      // Validação do campo obrigatório
    if (!nome) {
        return res.status(400).json({
        message: "O campo nome é obrigatório!",
        });
    }
    
      // Validação de envolvimentosSuspeito (sim ou não)
    if (envolvimentosSuspeito != "sim" && envolvimentosSuspeito != "não") {
        return res.status(400).send({
            message: "Digite 'sim' ou 'não'!",
        });
    }

    // Criação de um novo artista
const novoArtista = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    descricaoFisica: descricaoFisica || [], // Valor padrão caso descricaoFisica não seja enviado
    envolvimentosSuspeito,
};

  // Adiciona o novo Artista ao array de artistas
artistas.push(novoArtista);

return res.status(201).json({
    message: "Artista cadastrado com sucesso!",
    novoArtista,
});
});

// Rota para buscar um planeta pelo id
procuradosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    
      // Busca um planeta pelo id no array de planetas
    const artista = artistas.find((planet) => planet.id == id);
    
      // Verifica se o planeta foi encontrado
    if (!artista) {
        return res
            .status(404)
            .json({ message: `artista com id ${id} não encontrado!` });
    }
    
        return res.status(200).json(artista);
    });




export default procuradosRoutes;
