/*
    Celsius em Fahrenheit e vice-versa

    O programa deve receber uma String em C ou F, fazer a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
*/

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes("C");
    const fahrenheitExists = degree.toUpperCase().includes("F");

    // Fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado');
    }

    // F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9;
    let degreeSign = 'C';

    // Fluco alternativo C -> F
    if(celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32;
        degreeSign = 'F';
    }

    return formula(updateDegree) + degreeSign;
}

try {
    console.log(transformDegree("50F"));
    console.log(transformDegree("50Z"));
    
} catch (error) {
    console.log(error.message);
}

console.log(transformDegree("50C"));