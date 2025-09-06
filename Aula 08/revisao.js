// Callbacks
// Uma callback é uma função que está sendo passada como parametro
// para ser executada por outra função


const nomes = ['Davi', 'Larissa', 'Arthur', 'Cauã']

// Passando uma Função Pre-Definida como Callback
// function mostraNomeMaiusculo(nome) {
//     console.log(nome.toUpperCase())
// }

// nomes.forEach(mostraNomeMaiusculo)

// Passando uma Arrow Function
nomes.forEach((nome) => console.log(nome.toUpperCase()))