class Aluno{
    constructor(id,nome,sobrenome,idade)
    {
        this.id=id;
        this.nome=nome;
        this.sobrenome=sobrenome;
        this.idade=idade;
    }
    get getID(){return this.id;}
    set setID(id){this.id=id;}
    get getNome(){return this.nome;}
    set setNome(nome){this.nome=nome;}
    get getSobrenome(){return this.sobrenome;}
    set setSobrenome(sobrenome){this.sobrenome=sobrenome;}
    get getIdade(){return this.idade;}
    set setIdade(idade){this.idade=idade;}
}

module.exports= Aluno;