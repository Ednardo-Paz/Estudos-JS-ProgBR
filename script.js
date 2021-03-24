function criarAluno(nome, n1, n2){
    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return(this.nota1 + this.nota2) / 2
        }
    }
}

let turma = [
    criarAluno("Ed", 9, 8),
    criarAluno("Edu", 8, 8.5),
    criarAluno("Flavia", 8 ,5)
]

let aluno = turma[0]

for(let aluno of turma){
    console.log(aluno)
    console.log(aluno.media())
}