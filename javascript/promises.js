
function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
    
}
function esperando(msg, tempo){
    return new Promise((resolve, reject) =>{

        if(typeof msg !== 'string') reject('VALOR RUIM');

        setTimeout(()=> {
            resolve(msg);
        }, tempo);

    })
}
//quando chama 'resolve' o metodo "then" vai ser executado, e quando chama 'reject' o "catch" 

    esperando('frase 1', aleatorio(1, 3))
    .then(resposta => {

    console.log(resposta); 
    return esperando('frase 2', aleatorio(1, 3))
    })
    .then(resposta =>{
    console.log(resposta)
    return esperando('frase 3', aleatorio(1,3))
    })
    .then(resposta=> {
        console.log(resposta)
    })
    .catch(e => {
        console.log('ERRO', e)
    });


/*function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
    
}
function esperando(msg, tempo){
    setTimeout(()=> {
        console.log(msg)
    }, tempo);
}

esperando('Frase 1', aleatorio(1, 3));
esperando('Frase 2', aleatorio(1, 3));
esperando('Frase 3', aleatorio(1, 3));*/