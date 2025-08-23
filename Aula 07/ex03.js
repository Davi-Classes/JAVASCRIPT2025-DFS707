// 3 - Faça um programa onde você declare um array com 5 nomes, depois utilize a função "map" para criar um novo array onde todos os nomes devem estar em maiúsculo (.toUpperCase).
const nomes = ['villena', 'millena', 'madalena', 'fernanda', 'luna']
const nomesEmMaiusculo = nomes.map((nome) => nome.toUpperCase())

console.log(nomesEmMaiusculo)
