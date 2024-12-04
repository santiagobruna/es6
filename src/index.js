const alunos = [
  {
    nomeAluno: "Bruna",
    notaAluno: 10,
  },
  {
    nomeAluno: "Juliana",
    notaAluno: 4,
  },
  {
    nomeAluno: "Rafaela",
    notaAluno: 7,
  },
  {
    nomeAluno: "Julio",
    notaAluno: 7,
  },
  {
    nomeAluno: "João",
    notaAluno: 9,
  },
];

// Criar uma função que retorne apenas os alunos que tiverem a nota >= 6;

const notasParaAprovacao = alunos.filter((aluno) => aluno.notaAluno >= 6);
console.log(notasParaAprovacao);

// acessando todas as notas
const notasDosAlunos = alunos.map((notas) => notas.notaAluno);
console.log(notasDosAlunos);