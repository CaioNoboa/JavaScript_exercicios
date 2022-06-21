/*
    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        receitas: []
        despesas: []
    
    A seguir, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com sado positivo ou negativo, seguido do valor do saldo
*/


function calcularFinancas(financas) {
    this.financas = {
        receitas: [],
        despesas: [],
    }
    
    let receitas = financas.receitas;
    let despesas = financas.despesas;
    
    let totalReceita = 0;
    for(let valoresDeReceita of receitas){
        totalReceita += valoresDeReceita;
    }
    // console.log(totalReceita);

    let totalDespesa = 0;
    for(let valoresDeDespesa of despesas){
        totalDespesa += valoresDeDespesa;
    }
    // console.log(totalDespesa);

    saldo = totalReceita - totalDespesa;
    saldoPositivo = saldo >= 0;
    saldoNegativo = saldo < 0;
    if(saldoPositivo) {
        return `O saldo é positivo e com valor de R\$ ${saldo.toFixed(2)}`
    } else if(saldoNegativo) {
        return `O saldo é negativo e com valor de R\$ ${saldo.toFixed(2)}`
    } else {
        return `Algo de errado não está certo`
    }
}

let list = {
    receitas:
        [50.55, 55, 100, 500, 55, 125],
    despesas:
        [200.35, 300, 200]
}

console.log(calcularFinancas(list));