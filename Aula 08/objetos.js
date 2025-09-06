// Objetos
// Um objeto javascript é uma estrutura onde podemos armazenar
// dados através de um conjunto de "chave" e "valor"
const meuObjeto = {
    // chave: valor
    chave: 'valor' // item
}


// Representanções Através de Objetos
const pessoa = {
    nome: 'Davi',
    altura: 1.71,
    idade: 21,
    temCnh: false
}

// Mostrando Objeto:
console.log(pessoa)

// Acessando um Atributo Específico.
console.log(pessoa.nome)
console.log(pessoa['altura'])

// Criar ou Alterar um Item
// pessoa.profissao = 'Desenvolvedor'
pessoa['profissao'] = 'Desenvolvedor'
console.log(pessoa)