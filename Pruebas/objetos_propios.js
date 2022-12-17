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
//Primera forma
persona2.peso="80kg";
console.log(persona2.peso);
//Segunda Forma (Se lo añadimos al constructora)
Persona.prototype.color="rojo";//Puedes modificar la funcion constructora en cualquier momento.
Persona.prototype.color2;
console.log(persona2.color);

// Eliminar una propiedad(Atributo)
delete persona2.peso;
console.log(persona2.peso);

delete persona2.color;// Si el prototype tiene un valor por defecto no funciona;
delete persona2.color2;// Si el prototype no tiene un valor por defecto si funciona;
console.log(persona2.color);
console.log(persona2.colo2);

delete persona;
delete persona2;


//metodos 
//  primera forma (Usar esta);
var perro={
    raza:"pitbull",
    peso:"30kg",
    getraza:function() {
         return this.raza;
    }
};
//  segundo forma(Se recomienda no usar)(new)
var persona= new Object();
persona.nombre="Luis";
persona.apellido="Pérez";
persona.fechaNacimiento="11-02-2002";
persona.getNacimiento=function(){
    console.log("Naci en "+this.fechaNacimiento);
}
// tercera forma(Se recomienda no usar)(Constructor)
function Persona(nom,ape,feNa) {
    this.nombre=nom;
    this.apellido=ape;
    this.fechaNacimiento=feNa;
    this.getNombreCompleto=function(){
        console.log(this.nombre+" "+this.apellido);
    }
}

//Lammar a los metodos de un objeto
perro.getraza // Si no ponemos parentesis se llamo como un parametro. Devolviendo el codigo de la función
console.log(perro.getraza());
persona.getNacimiento();
var persona2=new Persona("Pepe","jjghf","10/02/2000");
persona2.getNombreCompleto();

//Añadir funciones al prototype;

// A un objeto predefinido
var aDatos=[1,23,34,4,5,5,6,6];
Array.prototype.suma=function(){
    let sum=0;
    for (const x of this) {
        sum+=x;
    }
    return sum;
}
console.log(aDatos.suma());



