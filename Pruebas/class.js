// Clases Moldes para hacer objetos.
// Propiedades compotadas, son porpiedades que dependen de otras propiedades o variables para definirse.
class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    nombreCompleto(){
        return this.nombre+" "+this.apellido;
    }
}
var persona1=new Persona("Luis","Pérez");
console.log(persona1.nombre);
console.log(persona1.nombreCompleto());