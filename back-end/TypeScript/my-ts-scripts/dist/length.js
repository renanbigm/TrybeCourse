"use strict";
const readline = require('readline-sync');
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
function convert(value, fromUnit, toUnit) {
    const fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index
    return value * Math.pow(10, exponent);
}
function exec() {
    // Declaramos as variáveis aqui para termos acesso fora do escopo do laço while
    let fromUnitChoice = '';
    let toUnitChoice = '';
    // pegamos o valor a ser convertido digitado pela pessoa usuária
    const value = readline.questionFloat("Digite o valor a ser convertido: \n");
    // pedimos que a pessoa usuária escolha a unidade base
    const fromUnitChoiceIndex = readline.keyInSelect(units, "Escolha um número para a unidade base:");
    // pedimos que a pessoa usuária escolha a unidade para conversão
    const toUnitChoiceIndex = readline.keyInSelect(units, "Escolha um número para a conversão:");
    toUnitChoice = units[toUnitChoiceIndex];
    fromUnitChoice = units[fromUnitChoiceIndex];
    // Se o usuário escolher a opção 0 (cancelar), uma mensagem é impressa no terminal e usamos o return para encerrar a execução
    if (!fromUnitChoice || !toUnitChoice) {
        console.log(`Função cancelada`);
        return 0;
    }
    const result = convert(value, fromUnitChoice, toUnitChoice);
    // montamos a mensagem de saída
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    // printamos a mensagem de saída no terminal
    console.log(message);
}
exec();
