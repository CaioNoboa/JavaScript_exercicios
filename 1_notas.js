/*
    Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres(A-E)
*/

function getScore(nota) {
    let notaAlta = nota >= 90 && nota <= 100;
    let notaBoa = nota >= 80 && nota < 90;
    let notaRazoavel = nota >= 70 && nota < 80;
    let notaHum = nota >= 60 && nota < 70;
    let notaBosta = nota >= 0 && nota < 60;

    let notaFinal;

    if(notaAlta) {
        notaFinal = 'A';
    } else if(notaBoa) {
        notaFinal = 'B';
    } else if(notaRazoavel) {
        notaFinal = 'C';
    } else if(notaHum) {
        notaFinal = 'D';
    } else if(notaBosta) {
        notaFinal = 'E';
    } else {
        notaFinal = "Nota inválida";
    }

    return notaFinal
}

console.log(getScore(1000));
console.log(getScore(-1));
console.log(getScore(0));
console.log(getScore("Boa"));

for (let i = 100; i >= 0; i--) {
    console.log(`A nota ${i} equivale a ${getScore(i)}`);
}