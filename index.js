const AlunoCRUD = require("./CRUD/AlunoCRUD");
const Aluno = require("./model/Aluno");
const prompt = require("prompt-sync")();


cadastrar();





  function continuar()
{  
   let op = prompt("Deseja continuar com o cadastro? s/n");
   if(op.toLowerCase()==="s")
   cadastrar();
}
function cadastrar()
{
  console.log("Bem-vindo ao cadastro de alunos");
  console.log("Selecione uma entre as opções");
  console.log("1 Inserir ");
  console.log("2 Apagar");
  console.log("3 Listar todos");
  console.log("4 Atualizar");
  let op=prompt("");

  const alunoCrud = new AlunoCRUD();
  const aluno= new Aluno();
  switch (op) {
  case "1" :
   aluno.setNome=prompt("Digite o nome: ");
   aluno.setSobrenome=prompt("Digite o sobrenome: ");
   aluno.setIdade=prompt("Digite a Idade: ");
   alunoCrud.Inserir(aluno.getNome,aluno.getSobrenome,aluno.getIdade); 
   continuar();  
  
    break;
    case "2":
    aluno.setID=prompt("Digite o id do aluno a ser excluido: ");
    alunoCrud.Apagar(aluno.getID);
    continuar();  
    
    break;
    case "3":   
    alunoCrud.ListarTodos(); 
    continuar();     
    break;
    case "4" :
      aluno.setID=prompt("Qual é o ID? ");
      aluno.setNome=prompt("Digite o novo nome: ");
      aluno.setSobrenome=prompt("Digite o novo sobrenome: ");
      aluno.setIdade=prompt("Digite a nova idade: ");
      alunoCrud.Atualizar(aluno.getID,aluno.getNome,aluno.getSobrenome,aluno.getIdade); 
      continuar();  

  default:
    break;
  }
}


 



