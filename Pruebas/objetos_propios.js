// Objeto simple primera forma (Usar esta);
var perro={
    raza:"pitbull",
    peso:"30kg",
};
// Objetos simples segundo forma(Se recomienda no usar)(new)
var persona= new Object();
persona.nombre="Luis";
persona.apellido="Pérez";
persona.fechaNacimiento="11-02-2002";
// Objetos simples tercera forma(Se recomienda no usar)(Constructor)
function Persona(nom,ape,feNa) {
    this.nombre=nom;
    this.apellido=ape;
    this.fechaNacimiento=feNa;
}

var persona2= new Persona("Luis","Pérez","11-02-2002");
console.log(persona2);

/*Formas de acceder a los datos*/
/*Forma 1*/
console.log(persona.nombre);
/*Forma 2*/
console.log(perro['peso']);
/*Forma 3*/
var variable="raza";
console.log(perro[variable]);


//Añador una propiedad(atributo)
persona2.peso="80kg";
console.log(persona2.peso);