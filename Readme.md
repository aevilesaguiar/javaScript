# O que é javaScript

O javaScript é uma linguagem de programação de alto nível, que integra o desenvolvimento de apps e paginas web. É uma das linguagem de programação mais usada no mundo do desenvolvimento.

## Como surgiu JS

Em 1995 o programador Brendam Eich que trabalhava na NetScape , implementou uma linguagem de programação chamada Mocha , depois o nome mudou para liveScript, mas na época a linguagem java era popular, então mudaram LiveScript para JavaScript como jogada de Marketing.

## Para que serve js

Para criar páginas dinâmicas que realizam a interação de apps ou páginas web.

## Onde usar JS

Podemos usar JS no desenvolvimento de páginas web , juntamente com html e CSS



## Boas Práticas JS

- Utilizar o arquivo js externo
- Carregar o script no final do body

## Como funciona a tipagem em JS

A tipagem funciona como uma regra de uso de dados, quanro mais forte a tipagem, mais obrigatório é a declaração do tipo de dado.
A tipagem em JS é fraca, a declaração dos dados acontece de modo dinâmico

Ex: Ao criarmos uma variavel com valor entre aspas "valo" , JS já converte o dado para o tipo String.

## Tipos Primitivos

As variáveis em JS podem guardar tipos de dados qie chamamos de tipos primitivos.

Variaveis podem guardar valores dos tipos: Boolean, null, undefined ,number, String, array, object, function;


## Declaração de Variaveis

Existem 3 modos de declarar as cariáveis em JS:

- var : escopo global e local , pode ter seu valor alterado, se não tiver um valor inicial será tratado como null;

let : escopo local de bloco, pode ter seu valor alterado, se não tiver um valor inicial será tratado como null.

const: escopo local de bloco, somente leitura , o valor inicial é obrigatório e não pode ser alterado;


## Escopo

O escopo define a limitação e visibilidade de um bloco de código

- Escopo global: quando a variavel é declarada fora de qualquer bloco, sua visibilidade fica disponível em todo o código.

- Escopo local: quando a variável é declarada dentro de um bloco, sua visibilidade pode ficar disponível , ou não;

## Regras de Uso de Varáveis

- Iniciar com letras, underscore, ou cifrão;
- Não usar espaço, use underscore ou CamelCase
- Não usar palavras reservadas
- Declarar variáveis no topo do código

## Diferenças entre atribuição, comparação e comparação identica

- O sinal de igualdade , significa atribuição
- quando quisrmos fazer uma comparação de valores em JS usamos "==", e o resultado sempre será : true or false
- comparação identica quando queremos fazer a comparação de valores e tipos, utilizamos === sempre será : true or false

## Operadores aritméticos

São tipos de operaadores matemáticos com valor numérico

- adição +, subtração -, multiplicação * , divisão real /, divisão inteira %, potenciação **

## Operadores Relacionais

São tipos de operadores que consultam a relação entre valores:

- ">" maior que;
- "<" menor que;
- ">=" maior ou igual a;
- "<=" menor ou igual a ;

## Operadores Lógicos

São tipos de operadoress que consultam valores lógicos:

- &&: consideram que todos os valores sejam true;
- || : resulta em um valor VERDADEIRO se ao menos UM dos dois valores de entrada da operação for VERDADEIRO, caso contrário o resultado é FALSO
- ! : inverte o valor de true para false ou vice-versa;

## O que são vetores/arrays

Arrays são um tipo de lista, ou matriz de variáveis, onde cada variavel possui um indice. Os valores podem ser de vários tipos.
Um Array no JavaScript é um objeto com um construtor único, com uma sintaxe literal e com um conjunto adicional de propriedades e de métodos herdados de um protótipo de Array. Arrays em JavaScript são usados para armazenar vários valores em uma única variável.

ex: let array = ["",1, true];

obs:O índice só é acessado por um número inteiro, onde 0 é o primeiro índice.

## Manipulando Arrays

Ao ser declarado, o Array traz consigo uma série de métodos para manipulá-lo.

- forEach() - itera um array;
- push() - add item no final do array
- pop() - remove um item no final do array
- shift() - remove item no inicio do array
- unshift()- add item no inicio do array
- indexOf() - retorna o índice de um valor;
- splice() - remove ou substitui um item pelo o índice;
- slice() - retorna uma parte de array existente;

## Objetos

Em JavaScript um objeto é uma coleção de propriedades, sendo cada propriedade definida como uma sintaxe de par chave : valor . A chave pode ser uma string e o valor pode der qualquer informação. Para criar um objeto, use a sintaxe literal de objeto.

Objetos são dados que possuem propriedades e valores que definem suas características. Deve ser declarado entre chaves{}

ex: var xicara={
    cor:"azul",
    tamanho:"pequena",
    funcao: tomarCafe();
}

## Estruturas Condicionais

São instruções para realizar determinadas tarefas a partir de uma condição ,seja de repetição ou decisão;

- if , else
- if ternario : faz uma verificação em uma única linha : [condição]?[instrução1]:[instrução2]

## Estruturas de repetição

São estruturas condicioanis que repetem uma instrução até atingir determinada condição:

- for: Funciona como uma repetição de instrução até que a condição seja falsa
- For/in : Funciona como uma repetição a partir de uma propriedade
ex: for([indice] in[object ou array]){
    declaração;
}
- for/of : funciona como uma repetição a partir de um valor, for/of não funciona com objects , mais podemos acessar os objetos por propriedade
for([indice] of[array]){
    declaração
}
- while : executa uma instrução "enquanto" determinada condição for verdadeira, a verificação é feita antes da execução;

- do/While: executa uma instrução "enquanto" determinada condição for verdadeira, a verificação é feita depois da execução;

## Funções e suas particularidades

O que são funções? são blocos de comandos e instruções para a exeecução de terminadas tarefas


Ex: function nomeDaFuncao(){

    ${instrucao};
}

nomedaFuncao();

- () : indica que é um objeto do tipo function
- {} : indica que é um bloco do tipo instrução


## Funções com parâmetros

A s funções podem receber em suas declaraçãoes, parâmetros, que servem como variáveis, onde sua atribuição pode ser feita durante a chamada da função

ex: function nomeDafUncao(parametro){
    ${instrucao};
}

nomeDaFuncao(valorDoParametro);


## Se aprofundando em funções

- **Funções declarativas:** são aquelas que possuem o uso mais comum, deve ser declarada usando a palavra reservada "function seguida do nome da função, parentese "()" e chaves"{}", nome da função é obrigatório;

Ex: function nomeDaFuncao(){
    ${instrucao};
}


- **Expressões de Funções:** são funções atribuídas á expressões. A nomeação das funções por expressão é opcional:

ex1: var funcao = function nomeDaFuncao(){
    ${instrucao};
}


ex2: var funcao = function(){
    ${instrucao};
}


- **Arrow Function:** são funções de expressão de sintaxe curta. Arrow Functions sempre serão anonimas, e portanto não podem ser nomeadas. deve ser declarada com parênteses "()" , seguido de "=>" e depois chaves "{}"

ex: 1: var funcao = ()=> {
    ${instrucao};
}
## Referencias

- [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)




