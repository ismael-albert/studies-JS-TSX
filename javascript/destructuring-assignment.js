const numero = [10, 20 ,30, 40, 50];

const [dez, vinte, ...rest] = numero;
console.log(dez, rest)

//---------------------------------//
//---------------------------------//
//---------------------------------//

const pessoa = {
    nome: 'ismael',
    sobrenome: 'albert',
    idade: 17,
    endereco:{
        rua: 'Ruaismael',
        numero: 123
    }
};
const { nome, sobrenome} = pessoa;
const {endereco} = pessoa;
console.log(nome, sobrenome)
console.log(endereco)
//-------------------------------------------------//
//-------------------------------------------------//
//-------------------------------------------------//