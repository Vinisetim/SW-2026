/*
Funções: Blocos de código: Blocos de código separados para fazer determinada tarefa. Elas são delimitada por chaves ({}) e devem ter um nome único.
Funções podem receber parametros e retornar valores.
Tipos:
-Função declarada
-Função expressa
-Arrow Function (função seta)
-Função auto invocada (IIFE)
*/

//Função Declarada (sem parametro e sem retorno)
function exibirMensagem() {
    console.log("Olá, sou uma função, sem parametro e sem retorno");
    
}

//Função com parametro
function exibirMensagemComParametro(nome){
    console.log(`Olá ${nome}`);
}

//Função parametro e retorno 
function somar(x,y) {
    let resultado = x + y
    return resultado
}

//Funções expressas
const subtrair = function(a, b){
    let res = 0
    if (a > b) {
        res = a -b
    }
    else{
        res = b - a
    }
    return res
}

console.log(subtrair (5, 2))

//função seta
const multiplicar = (x, y) => {
    let resultado = x * y
    return resultado
}

//função imediatamente invocada
(function(){
    console.log("executo automaticamente!")
})()

//funções de retorno (callbacks) 
//callbacks são funções passadas como parametro para outra função
function funcaoRecebeCallback (funcao){
    funcao()
}
funcaoRecebeCallback(function () {
    console.log('executei a callback');
})

funcaoRecebeCallback(()=>{
    console.log('executei a callback passando uma função de seta');

})

async function buscarDados() {
    return 'dados';
}
buscarDados().then(console.log('Retornou!'))

