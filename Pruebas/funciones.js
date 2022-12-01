function holafunciones(mensaje) {
    console.log(mensaje);
}
holafunciones("hola pepito");

function triple(n) {
    return n*3;
}
var x=10;
console.log(triple(x+x));
console.log(triple(x+triple(9)));

//Funcion anonima
const ftriple2=function (n) {
    return n*3;
}
ftriple2()
console.log(ftriple2(x+x+x+x));

//funciones flecha
const triple3=(num)=> num*3;//Aqui automaticamente devuelve el el dato.
console.log(triple3(12));

const triple6=()=> 10*3;//No recibe parametros.

//function flecha sin devolución
const triple4=(num)=> { //Poner las llaves nos permite escribir condigo en multilinea o definir un bloque de función
    num*3};//Si queremos que devuelva tenemos que poner un return num*3;
    
const triple5=(num)=> {
    return num*3;
};

//Ambito de variables
function f() {
    const a=1;
    let b=2;
    var c=3;
    console.log("Sof y la función f");
}
f();
//console.log(a);
//console.log(b);
//console.log(c);
//Cuando llamamos a la funcion se crean las vairables a,b,c pero cuando se termina la función se auto destruyen

//funcion que paso por valor. No modifica la variable que le pasamos por parametro 
var pepe=19;
function suma(pepe) {
    ++pepe;
}
suma(pepe);
console.log(pepe);
//funcion que paso por Referencia. Nos permite modificar la variable que le pasamos por parametro;
// El nombre del los parametros no pueden ser nombres de variables ya declaradas.
function sumaRefe(n) {
    ++pepe;
}
sumaRefe(pepe);
console.log(pepe);

//Tipos simples se pasan por valor
//Tipos complejos(objetos) se pasan por referencia

//Funciones con parametros por defecnto
function saludo(nombre="pepe") {
    console.log("hola "+nombre);
}
saludo("Luis");
saludo();

//funcuion que recibe varios parametros y los recoje en una array de propagación
function media(x,y){
    console.log(x+y);
}
media(2,4,4,78,56,45);//solo cogera los dos primeros
//mas
// Paso de nº de parametros indefinidos a una funcion
function media2(...otros){
    var acu=0;
    for (const valor of otros) {
        acu+=valor;
    }
    console.log(`La media es de ${acu/otros.length}`)
}
media2(2,4,4,78,56,45)//Aqui se cogen todos

//pila de funciones (Funciones que llaman a funciones)
//Hay que tener cuidado porque puedes crear un bucle infinito.
function f1() {
    console.log("Inicio f1");
    f2();
    console.log("Fin f1");
}
function f2() {
    console.log("Inicio f2");
    f3();
    console.log("Fin f2");
}
function f3() {
    console.log("Estoy en f3");
    console.log("Fin f3");
}
f1();
// vvvvv
//recursibidad
// Es cuando una función que se llama asi misma
function facrecursivo(n){
    if(n<=1) return 1;
    else return n*facrecursivo(n-1);
}
console.log(facrecursivo(5));
// Pila de codigo


// Funciones call back
// Son funciones que les puedes pasar por parametro otras funciones
function hola(nombre,fuc) {
    fuc(nombre);
}
hola("luis",console.log);

hola("luis",function(dato){console.log("hola que tal "+dato)});

hola("luis",(dato)=>console.log("hola que tal "+dato+".Estoy en una funcion flecha"));

