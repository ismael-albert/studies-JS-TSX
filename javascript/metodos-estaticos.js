class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    //método de instância
    aumentarVolume(){
        this.volume += 2; 
    }
    diminuirVolume(){
        this.volume -= 2; 
    }
    //metodo estático / referente a classe
    static pegarControle(){
        console.log('pegando controle')
    }
}
//não precisa de instância
//metodo referente a classe 
ControleRemoto.pegarControle();
