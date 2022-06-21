/*
    Celsius em Fahrenheit e vice-versa

    O programa deve receber uma String em C ou F, fazer a transformação de uma unidade para outra

    C = (F - 32) * 5/9

    F = C * 9/5 + 32
*/

function verificando(value) {
    let itsInCelsius = value.includes("°C") || value.includes("C") || value.includes("°c") || value.includes("c");
    let itsInFahrenheit = value.includes("°F") || value.includes("F") || value.includes("°f") || value.includes("f");

    let valueSemEspaco = value.split(" ").join("");

    if(itsInCelsius) {
        return calculateCelsiusInFahrenheit(valueSemEspaco);
    } else if(itsInFahrenheit) {
        return calculateFahrenheitInCelsius(valueSemEspaco);
    } else {
        return "Erro na entrada de dados"
    }
}

function calculateCelsiusInFahrenheit(value) {
    let celsiusNumber = 0;

    if(value.includes("°C")) {
        celsiusNumber = Number(value.split("°C").join(""));
    } else if(value.includes("C")) {
        celsiusNumber = Number(value.split("C").join(""));
    } else if(value.includes("°c")) {
        celsiusNumber = Number(value.split("°c").join(""));
    } else if(value.includes("c")) {
        celsiusNumber = Number(value.split("c").join(""));
    } else {
        return "Erro na entrada de dados 2";
    }
    
    let changinCelsiusToFahrenheit = celsiusNumber * 9/5 + 32;
    return `O equivalente a ${celsiusNumber.toFixed(1)} °C em Fahrenheit é ${changinCelsiusToFahrenheit.toFixed(1)} °F`;
}

function calculateFahrenheitInCelsius(value) {
    let fahrenheitNumber = 0;

    if(value.includes("°F")) {
        fahrenheitNumber = Number(value.split("°F").join(""));
    } else if(value.includes("F")) {
        fahrenheitNumber = Number(value.split("F").join(""));
    } else if(value.includes("°f")) {
        fahrenheitNumber = Number(value.split("°f").join(""));
    } else if(value.includes("f")) {
        fahrenheitNumber = Number(value.split("f").join(""));
    } else {
        return "Erro na entrada de dados 3";
    }
    
    let changinFahrenheitToCelsius = (fahrenheitNumber - 32) * 5/9;
    return `O equivalente a ${fahrenheitNumber.toFixed(1)} °F em Celsius é ${changinFahrenheitToCelsius.toFixed(1)} °C`;
}

console.log(verificando("32 °C"));
console.log(verificando("32 C"));
console.log(verificando("64 F"));
console.log(verificando("50 C"));
console.log(verificando("50 f"));
console.log(verificando("32"));
console.log(verificando("32 °F"));