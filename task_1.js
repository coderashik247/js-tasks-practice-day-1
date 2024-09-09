/*

Write a function to convert temperature from Celsius to Fahrenheit.

*/

function celsiusToFahrenheit(value){
    const F = (9*value + 160)/5;
    return F;
}

const temperature = celsiusToFahrenheit(36);
console.log("Celsius to Fahrenheit temperature is :", temperature);