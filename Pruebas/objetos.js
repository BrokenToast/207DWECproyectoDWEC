// Objetos predefinidos(nativos(No estan predefinidos por el navegador)).
var expresionRegular=/h/;
// No utilizar los objetos String, Boolean,Number(Duede llevar a confuciones y fallos)


var cadena="hola que tal";
var exp=/^o/i;
console.log(exp.test(cadena));

var exp=/^[0-9]{6,12}$/i;//Ran gando dice que teien que ver cualquier numero , y tiene que haver entre 6 y 12 numeros
var exp=/^[0-9]{6,}$/i;//Ran gando dice que teien que ver cualquier numero , y tiene que haver entre 6 y N numeros

