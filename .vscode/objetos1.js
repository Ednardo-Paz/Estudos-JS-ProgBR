 function calcMedia (n1,n2){
    return(this.nota[0] + this.nota[1]) / 2;
 }
var aluno = {
    nome: "ED",
    nota: [8, 8],

    media: calcMedia

     
}
var aluno1 = {
    nome: "João",
    nota: [4, 8],

    media: calcMedia

     
}
console.log(aluno1.nome)
console.log(aluno1.media())
console.log(aluno.nome)
console.log(aluno.media())

