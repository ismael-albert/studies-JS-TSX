class Pessoa{
    //passar parametros na classe
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    //metodos
    falar(){
        console.log(`${this.nome} está falando`)
    }
    comer(){
        console.log(`${this.nome} está comendo`)
    }
}

const p1 = new Pessoa('ismael', 'albert');
console.log(p1)
console.log(p1.falar)