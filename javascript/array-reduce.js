const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;//tem que retornar alguma coisa pro acumulador ter valor

}, 0)//valor inicial do acumulador
console.log(total)