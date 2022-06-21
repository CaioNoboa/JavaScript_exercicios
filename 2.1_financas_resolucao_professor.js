/*
    Forma resolvida pelo professor.    

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        receitas: []
        despesas: []
    
    A seguir, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com sado positivo ou negativo, seguido do valor do saldo
*/

let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450, 5000],
}

function sum(array) {
    let total = 0;
    for(let value of array) {
        total += value;
    }
    return total;
}

function calculateBalance(object) {
    const calculateIncomes = sum(object.incomes);
    const calculateExpenses = sum(object.expenses);

    const total = calculateIncomes - calculateExpenses;
    const positiveBalance = total >= 0;

    let balanceText = "negativo"; 
    if(positiveBalance){
        balanceText = "positivo";
    }
    return `O seu saldo foi ${balanceText}: R$ ${total.toFixed(2)}`;
}

console.log(calculateBalance(family));