import { response, Router } from "express";
const procuradosRoutes = Router();

let artistas = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Pitty",
    descricaoFisica: [
      "cabelos curtos",
      "olhos pretos",
      "cavanhaque",
      "tamanho baixo",
    ],
    envolvimentosSuspeito: "sim",
    idade: 54
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "michael jackson",
    descricaoFisica: ["cabelos longos", "olhos pretos", "tamanho alto"],
    envolvimentosSuspeito: "sim",
    idade: 50
  },
];

// Rota para listar todos os artistas Procurados
procuradosRoutes.get("/", (req, res) => {
    return res.status(200).json(artistas);
});

// Rota para cadastrar um novo artista
procuradosRoutes.post("/", (req, res) => {
  const { nome, descricaoFisica, envolvimentosSuspeito, idade } = req.body;

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
    idade,
  };

  // Adiciona o novo Artista ao array de artistas
  artistas.push(novoArtista);

  return res.status(201).json({
    message: "Artista cadastrado com sucesso!",
    novoArtista,
  });
});

// Rota para buscar um artista pelo id
procuradosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um artista pelo id no array de artista
  const artista = artistas.find((rapper) => rapper.id == id);

  // Verifica se o artista foi encontrado
  if (!artista) {
    return res
      .status(404)
      .json({ message: `artista com id ${id} não encontrado!` });
  }

  return res.status(200).json(artista);
});

// Rota para atualizar um artista pelo id
procuradosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;

  //console.log(id);
  
  const { nome, descricaoFisica, envolvimentosSuspeito, idade} = req.body;


  // Busca um artista pelo id no array de artista
  const artista = artistas.find((rapper) => rapper.id == id);

 // Verifica se o artista foi encontrado
 if (!artista) {
    return res
      .status(404)
      .json({ message: `Artista com id ${id} não encontrado!` });
  }

  // Validação do campo obrigatório
  if (!nome) {
    return res.status(400).json({
      message: "O campo nome é obrigatório!",
    });
  }

  // Validação de envolvimentosSuspeito (sim ou não     )
  if (envolvimentosSuspeito != "sim" && envolvimentosSuspeito != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'!",
    });
  }

  artista.nome = nome;
  artista.descricaoFisica = descricaoFisica;
  artista.envolvimentosSuspeito = envolvimentosSuspeito;
  artista.idade = idade

  return res.status(200).json({
    message: "artista atualizado com sucesso!",
    artista,
  });
});

// Rota para deletar um artista
procuradosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    // Busca um artista pelo id no array de artistas
    const artista = artistas.find((rapper) => rapper.id == id);
  
    // Verifica se o artista foi encontrado
    if (!artista) {
      return res
        .status(404)
        .json({ message: `Artista com id ${id} não encontrado!` });
    }
  
    // Remove o artista do array de artistas
    artistas = artistas.filter((rapper) => rapper.id != id);
  
    return res.status(200).json({
      message: "Artista removido com sucesso!",
      artistas,
    });
});


export default procuradosRoutes;
