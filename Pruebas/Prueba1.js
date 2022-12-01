console.log("Hola desde fichero externo");
// Tres tipos de datos: texto(Stribng), numeros,buleanos.
// Tipos complejos como objetos
var x=20;
function f(){
    let x=10;
}
console.log(x);
const O=20;
f();

//En hexadecimal
var k=0xAB12;
console.log(k);
//En octal
var k=0o23145;
console.log(k);
//En Binario
var k=0b10101010101010;
console.log(k);

var k="hola"*3;
console.log(k);
var k="Rodolfo";

console.log("Hola mi nombre es "+k);
console.log(`Hola mi nombre es ${k}`);
console.log("Hola mi nombre es \"Luis\" ");
console.log("Hola mi nombre es \nLuis\" ");
console.log("Hola mi nombre es \u{0F48B}Luis\" ");

/*
0 (false)
1 o mas(true)
"" (False)
"gfgfg" (True) 
null (flase)
Infinity
NaN (flase)
undefined
*/


/*Operadores: +,-,*,/,%,** .
Operadores relacionales: >,<,==,<=,>=,!=, ===(Comparacion estricta, solo puede comparar valores del mismo tipo), !==(Comparacion estricta). 
Operadores de encadenamiento: +.
Operadores logicos: &&(AND), ||(OR),!(NOT).
Operadores binarios: ~(Not),&(and),|(or),^(Xor), <<(Movimiento de bits),>>(Movimiento de bits).
Operadores de Asignación: =,+=,-=,/=,%=,*=,**=,valor++, valor--, ++valor, --valor.
Operadores condicionales: ? :
(5==4)?(console.log("Verdadero")):(console.log("Falso"));

Ejemplo:
> (undefined=null)
true
--------
> (undefined=false)
false


> NaN==NaN
false
> isNaN(NaN)
true
*/

/* Conversores de tipo de datos
Number()
BigInt()
String()
parseInt(numero,base(2=Binario,16=Hexadecimal,8=Ocatal))
> parseInt("12ddddee3456")
12
> parseInt("a12ddddee3456")
NaN
> parseFloat("12.10ddddee3456")
12.1

*/

inter