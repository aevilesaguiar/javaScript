//Criando uma calculadora

//será utilizado métodos nativos do JS

// - Number(): para converter valores em numeros
// - Prompt(): para registrar entradas de usuario;
// - Alert(): para mostrar mensagem ao usuario
//Template Strings: para usar strings junto com expressões


function calculadora(){

    const operacao = prompt("Escolha uma operação: \n 1 - Soma (+) \n 2 - Subtração (-)  \n 3 - multiplicação (*) \n 4 - Divisão real (/) \n 5 - Divisão inteira (%) \n 6 - Potenciação (**) ");

if(!operacao || operacao>=7){

    alert(" Erro - Operação inválida! ");
    calculadora();

}else{


/**
 * Verificador de informações
 */

let n1 = Number(prompt("Insira o primeiro valor: "));
let n2 = Number(prompt("Insira o segundo valor: "));
let resultado;

if(!n1 || !n2){
    alert("Erro - parâmetros inválidos!");
    calculadora();
}else{

function soma(){
    resultado= n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
}
function subtracao(){
    resultado= n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
}



function multiplicacao(){
    resultado= n1 * n2;
    alert(`${n1} x ${n2} = ${resultado}`);
}


function divisaoReal(){
    resultado= n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
}


function divisaoInteira(){
    resultado= n1 % n2;
    alert(`${n1} % ${n2} = ${resultado}`);
}


function potenciacao(){
    resultado= n1 ** n2;
    alert(`${n1} ^ ${n2} = ${resultado}`);
}
}


if(operacao==1){
    soma();
}else if(operacao==2){
    subtracao();
}else if(operacao==3){
    multiplicacao();
}else if(operacao==4){
    divisaoReal();
}else if(operacao==5){
    divisaoInteira();
}else if(operacao==6){
    potenciacao();
}
}
}

calculadora();