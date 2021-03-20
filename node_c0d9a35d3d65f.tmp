var nome = ['igor', 'Edu' , 'Ed']
var notaA = [7.0, 6.5, 9.5]
var notaB = [8.0, 7.0, 8.5]

function media(n1,n2){
    return (n1 + n2) / 2
}

function passou(media){
    if (media > 7){
        return "Aprovado"
    }else {
        return "Reprovado"
    }
}

for(var index in nome){
    var m = media(notaA[index], notaB[index])

    console.log(`${nome[index]} - ${notaA[index]} - ${notaB[index]} - ${m} - ${passou(m)}`)
}