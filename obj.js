function criarAluno(nome, n1, n2){
    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return(this.nota1 + this.nota2) / 2;
        }
    }
}

var turma = [
    criarAluno("Ed", 9, 8),
    criarAluno("Edu", 7, 5),
    criarAluno("Gina", 9, 5),
]

var aluno = turma[0]

for(var aluno of turma){
    console.log`${aluno} - ${aluno.media()} `
}