// Array Inicial
const numeros = [1, 5, 6, 7, 8]
console.log(numeros)

// Map

// Criar um novo array onde todos os elementos são multiplicados por 2
const numerosX2 = numeros.map((numero) => numero * 2)

// console.log(numerosX2)

// Filter
const numerosFiltrados = numeros.filter((numero) => (numero <= 5))
// console.log(numerosFiltrados)

// Reduce
// Acumulador (acc)
// Corrente (cur)
// [1, 5, 6, 7, 8]

/**
 * 1ª Volta
 * Acc: 0 | Current: 1
 * Resultado: 0 + 1 = 1
 * 
 * 2ª Volta
 * Acc: 1 | Current: 5
 * Resultado: 1 + 5 = 6
 * 
 * 3ª Volta
 * Acc: 6 | Current: 6
 * Resultado: 6 + 6 = 12
 */
const soma = numeros.reduce((acc, cur) => acc + cur, 0)
const maior = numeros.reduce((acc, cur) => Math.max(acc, cur))
console.log('A soma é', soma)
console.log('Maior:', maior)