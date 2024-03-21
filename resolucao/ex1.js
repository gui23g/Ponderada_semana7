//variaveis
let x = 17
let y = 5
let z = 8

//teste logico booleano que compara se y e maior que x e z e maior que x ou x-y e maior que z, 
// no primeiro caso e falso, pois y nao e maior que x, logo a segunda ja e falsa por conta do &
// no segundo caso e verdadeiro, logo, a operacao booleana e verdadeira por conta do ou
resultadoBooleano =  (x < y) && (z > x) || (x - y > z)
console.log(resultadoBooleano);

// declara uma lista (array) com 5 numeros, de 1 a 5
const listaDeNumeros = [1, 2, 3, 4, 5];
// declara a variavel soma
let soma = 0;

// loop for que soma todos os numeros dentro da lista
for (let i = 0; i < listaDeNumeros.length; i++) {
    soma += listaDeNumeros[i];
  }

  console.log("A soma dos números é:", soma);