const fs = require("fs");

// Estados, regiões, cidades para sortear
const estados = {
  AC: { regiao: "Norte", cidades: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"] },
  AL: { regiao: "Nordeste", cidades: ["Maceió", "Arapiraca", "Palmeira dos Índios"] },
  AM: { regiao: "Norte", cidades: ["Manaus", "Parintins", "Itacoatiara"] },
  AP: { regiao: "Norte", cidades: ["Macapá", "Santana", "Laranjal do Jari"] },
  BA: { regiao: "Nordeste", cidades: ["Salvador", "Feira de Santana", "Vitória da Conquista"] },
  CE: { regiao: "Nordeste", cidades: ["Fortaleza", "Juazeiro do Norte", "Sobral"] },
  DF: { regiao: "Centro-Oeste", cidades: ["Brasília"] },
  ES: { regiao: "Sudeste", cidades: ["Vitória", "Serra", "Vila Velha"] },
  GO: { regiao: "Centro-Oeste", cidades: ["Goiânia", "Anápolis", "Águas Lindas de Goiás"] },
  MA: { regiao: "Nordeste", cidades: ["São Luís", "Imperatriz", "Caxias"] },
  MG: { regiao: "Sudeste", cidades: ["Belo Horizonte", "Uberlândia", "Juiz de Fora"] },
  MS: { regiao: "Centro-Oeste", cidades: ["Campo Grande", "Dourados", "Três Lagoas"] },
  MT: { regiao: "Centro-Oeste", cidades: ["Cuiabá", "Rondonópolis", "Sinop"] },
  PA: { regiao: "Norte", cidades: ["Belém", "Ananindeua", "Santarém"] },
  PB: { regiao: "Nordeste", cidades: ["João Pessoa", "Campina Grande", "Patos"] },
  PE: { regiao: "Nordeste", cidades: ["Recife", "Olinda", "Jaboatão dos Guararapes"] },
  PI: { regiao: "Nordeste", cidades: ["Teresina", "Parnaíba", "Picos"] },
  PR: { regiao: "Sul", cidades: ["Curitiba", "Londrina", "Maringá"] },
  RJ: { regiao: "Sudeste", cidades: ["Rio de Janeiro", "Niterói", "Campos dos Goytacazes"] },
  RN: { regiao: "Nordeste", cidades: ["Natal", "Mossoró", "Caicó"] },
  RO: { regiao: "Norte", cidades: ["Porto Velho", "Ji-Paraná", "Ariquemes"] },
  RR: { regiao: "Norte", cidades: ["Boa Vista", "Rorainópolis"] },
  RS: { regiao: "Sul", cidades: ["Porto Alegre", "Caxias do Sul", "Pelotas"] },
  SC: { regiao: "Sul", cidades: ["Florianópolis", "Joinville", "Blumenau"] },
  SE: { regiao: "Nordeste", cidades: ["Aracaju", "Estância", "Lagarto"] },
  SP: { regiao: "Sudeste", cidades: ["São Paulo", "Campinas", "Santos"] },
  TO: { regiao: "Norte", cidades: ["Palmas", "Gurupi", "Araguaína"] }
};

// Funções de sorteio
const nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Joana",
  "Karina", "Lucas", "Mariana", "Nathan", "Olivia", "Paulo", "Quezia", "Rafael", "Sofia", "Tiago",
  "Ursula", "Vitória", "William", "Xênia", "Yuri", "Zuleica"];

const sobrenomes = ["Almeida", "Barros", "Cardoso", "Dias", "Esteves", "Ferreira", "Gomes", "Henrique",
  "Ibrahim", "Jesus", "Klein", "Lima", "Macedo", "Nascimento", "Oliveira", "Pereira", "Queiroz",
  "Ramos", "Silva", "Trindade", "Uchoa", "Vieira", "Werneck", "Xavier", "Yamamoto", "Zago"];

function sort(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const funcoes = ["Gestor escolar", "Professor", "Supervisor", "Coordenador", "Secretário escolar", "Voluntário"];
const turmas = ["2017", "2018", "2019", "2020", "2021", "2022", "2023"];

let pessoas = [];

for (let i = 1; i <= 600; i++) {
  const estadoSigla = sort(Object.keys(estados));
  const estado = estados[estadoSigla];

  const nome = `${sort(nomes)} ${sort(sobrenomes)}`;
  const cidade = sort(estado.cidades);
  const linkedin = `https://www.linkedin.com/in/${nome.toLowerCase().replace(/ /g, "-")}-${i}`;

  pessoas.push({
    nome,
    turma: sort(turmas),
    funcao: sort(funcoes),
    regiao: estado.regiao,
    estado_sigla: estadoSigla,
    cidade,
    linkedin
  });
}

// grava o arquivo
fs.writeFileSync("pessoas.json", JSON.stringify(pessoas, null, 2), "utf-8");

console.log("Arquivo pessoas.json gerado com 600 pessoas!");
