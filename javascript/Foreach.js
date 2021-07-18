const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for(let valor of numeros){
    console.log(valor);
}

numeros.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})