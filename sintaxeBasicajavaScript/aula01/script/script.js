//alert("JavaScript Básico rumo ao FullStack");

//TIPOS PRIMITIVOS
//boolean
/*
var tBoolean = false;
console.log(typeof(tBoolean));

var tBoolean = false;
console.log(typeof(tBoolean));

var tNumber=3;
console.log(typeof(tNumber));

var tString = "Hello!"
console.log(typeof(tString));
let tDados= "Maria";
console.log(typeof(tDados));
tDados="Diana";
console.log(typeof(tDados));
console.log(tDados);

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = "Mariza" 
    
console.log(escopoLocalInterno);
}
//console.log(escopoLocalInterno);

// O que são vetores e Arrays

let tArray =["string",1, true,["array1"],["array2"],["array3"],["array2"]];

console.log(tArray);

console.log(tArray[2]);

console.log("forEach() :");

tArray.forEach(function(item, index){
    console.log(item,index);
})

console.log("push() :");
tArray.push("novo item no final");
console.log(tArray);


console.log("pop() :");
tArray.pop();
console.log(tArray);

console.log("shift() :");
tArray.shift();
console.log(tArray);


console.log("unshift() :");
tArray.unshift("Novo item no inicio");
console.log(tArray);


console.log("indexOf() :");
console.log(tArray.indexOf(1));

console.log("splice() :");
console.log(tArray.splice(0,3));


console.log("slice() :");
let novoArray= tArray.slice(0,3)
console.log(novoArray);


console.log("Object");

let tObject = {
    string : "string",
    number: 5,
    boolean: true,
    array:"vida"
}

console.log(tObject.number);
console.log(tObject.string);

var dadoString= tObject.string;
console.log(dadoString);
*/
var array10= ["string",1, true,["array1"],["array2"],["array3"],["array2"]];

for (let index = 0; index < array10.length; index++) {
    const element = array10[index];
   console.log(element);
    
}
console.log("-------------------------------------------------");

var array =["valor1", "valor2","valor4", "valor5","valor6", "valor7"];

console.log("for/in Com array executa repetição a partir de uma propriedade");
for (let i  in array) {
    console.log(i);
}



console.log("-------------------------------------------------");

let tObject = {
    string : "string",
    number: 5,
    boolean: true,
    array:"vida"
}
console.log("for/in Com Object");
for (i in tObject) {
    console.log(i);
}


console.log("-------------------------------------------------");

var array2 =["valor1", "valor2","valor4", "valor5","valor6", "valor7"];

console.log("for/of Repetição a partir de valor");
for (i of array2){
    console.log(i);
}

console.log("-------------------------------------------------");

let tObject2 = {
    string : "nuvem",
    string1: "céu",
   string2: "estrelas",
   string3:"lua"
}

console.log("for/of por objeto");
for (i of tObject2.string2){
    console.log(i);
}

console.log("-------------------------------------------------");


console.log("while");

var a =0;
while (a<10) {
    a ++;
    console.log(a);
}

console.log("-------------------------------------------------");


console.log("do while");

var b =0;

do {
    b ++;
    console.log(b);
}while(b<10);

console.log("-------------------------------------------------");


console.log("Funções Declarativas");

function funcao(){
    console.log("Essa mensagem veio de uma função DECLARATIVA!");
}

funcao();

console.log("-------------------------------------------------");


console.log("Funções com parametros");

function mensagem(primeiro, segundo){
    console.log(primeiro, segundo);
}

mensagem("seja", "feliz!");

console.log("-------------------------------------------------");


console.log("Funções com declarativas");

function mensagem(primeiro, segundo){
    console.log(primeiro, segundo);
}

mensagem("seja", "feliz!");

console.log("-------------------------------------------------");


console.log("Expressões de funções");

var info = function (){
    console.log("Essa mensagem veio de uma função de EXPRESSÃO!")
}
info();

console.log("-------------------------------------------------");


console.log("Arrow Function");

var info2 =()=>{
    console.log("Essa mensagem veio de uma ARROW FUNCTION!")
}
info2();