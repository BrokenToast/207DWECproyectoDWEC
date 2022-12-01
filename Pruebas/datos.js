console.log(String.fromCharCode(2034));//Le das el codigo en unicode y te devuelve el caracter



//Arrays
// La arrais son heterogeneas y dinamicas.
// Lo que alamacena cuando declaramos una array el la posicción de memoria [ miArray= |Enlace|------->|1|2|3|4|5|] por eso cuando decimos que
// miArray=miArray2 [miArray2 copia el enelace de miArray]
let miArray=[1,2,3,34,,,4,45,5,6,8,,,];//De esta forma le podemos añadir elementos en blanco
let miArray2=new Array(2,234,4,5,5,456,56);//Aqui no se puede añadir elementos en blanco 
console.log(typeof(miArray));
console.log(miArray);
miArray[1]="Hola que tal";
console.log(miArray);
delete miArray[1];//No es lo mas recomendable porque deja espacios en blanco
console.log(`Eliminamos la posición 1${miArray}`);
console.log("¿Es un array?"+miArray instanceof Array);
console.log("Recorrido con un for normal");
for(let i=0;i<miArray.length;i++){
    console.log(miArray[i]);
}
console.log("Recorrido con un for in");
for (const key in miArray) {
    console.log("Elementos");
    console.log(miArray[key]);//Solo muestra las elementos que no sean undefined
}
for (const key2 in miArray) {
    console.log("Indices");
    console.log(key2)//Son las posiciones donde hay algo 
}
console.log("Recorrido con un for on");
for (const element of miArray) {
    console.log(element);
}
console.log("Recorrido con un forEach");
miArray.forEach(element2 => {
   console.log(element2);
});
miArray=miArray2;
//console.log(`Cambio de enlaces de los arrays [miArray]${miArray} | [miArray2]${miArray2} `);
//Metodos para trabajar con arrays
miArray.push("E añadido algo al final");
console.log(miArray);
miArray.pop();//Elimina el ultimo elemento de la array
console.log(miArray);
miArray.shift();//Elimina el primer elemento y los mueve todos a una posicion menos
console.log(miArray);
miArray.unshift("E añadido al principio");//Añade un elemento al principio y mueve el resto
console.log(miArray);
// Unir arrays
console.log(miArray.concat(miArray2));
// obtener subArrys(copia)
console.log(miArray.slice(3,6));//Son excluyentes y si no le pasamos parametros copia todos los elementos.
console.log(miArray.slice());
// splice() Lo quen hace es extraer de la array y lo pone en otra. Modifica el array originala
console.log(miArray.slice().splice(1,3)); //Extrallendo datos de una copia de miArray
console.log(miArray2.splice(1,3,"hola","adios")); //Extrae datos y los sustitullo por los datos que le allamos indicado
console.log(miArray2);
// Ccombertir una array en String
console.log(miArray.join("-"));
// buscar dentro de una array
console.log(miArray.indexOf(5));//Empieza a buscar por delante.
console.log(miArray.lastIndexOf(5));//Empieza a buscar por detras.
// Saber si esta dentro un dato con includes()
console.log(miArray.includes(5));
// Dar la vuelta a la array(modifica la array original);
miArray.reverse();
console.log(miArray);
// ordenar con sort()(No funciona si no tienes una funcion de ordenacion)(modifica array).
miArray.sort();
console.log(miArray);
//
// Desectucturar arrays
//
let [x,y,z]=[1,8,5];
console.log(x,y,z);
//tintencambiar valores
[x,y]=[y,x];
console.log(x,y);

// operadore de propagación(splint)

let [o,d,f]=[...miArray];
console.log(o,d,f);

[o,,f]=[...miArray];//se salta la segunda posición
console.log(o,f);

let otraArray
[o,f,...otraArray]=[...miArray];//El resto de valores se metren en otraArray(tambien se puede usar para copiar);
console.log(o,f,otraArray);