// Clases Moldes para hacer objetos.
// Propiedades computadas, son porpiedades que dependen de otras propiedades o variables para definirse.
// La nomenglatura de las propiedades computadas es poner delante del nombre de la variable un _
class Persona{
    #edad;
    static(){

    }
    constructor(nombre,apellido,edad,num=10,num2=20){
        this.nombre=nombre;
        this.apellido=apellido;
        this.#edad=edad;// La almuadilla delante es igual al un atributo o propiedad privado
        this._num1=num;// Son propiedades computadas
        this._num2=num2;// Son propiedades computadas
    }
    get numero3(){
        return this._num1+this._num2;
    }
    set num1(num){
        this._num1=num;
    }
    get num1(){
        return this._num1;
    }
    nombreCompleto(){
        return this.nombre+" "+this.apellido;
    }
    getEdad(){
        return this.#edad;
    }
    static despedirme(){
        return "Adios";
    }
    #duplicarEdad(){
        let num=2;//Dentro de los metodos podemos declarar el ambito de una variable. Fuera no podemos declarar el ambito 
        return this.#edad*num;
    }
}
var persona1=new Persona("Luis","Pérez",18,20,40);
console.log(persona1.nombre);
console.log(persona1.nombreCompleto());
console.log(Persona.despedirme());
console.log(persona1.getEdad());
console.log(persona1.numero3); //Como funciona el get
persona1.num1=50; // Como funciona el set
console.log(persona1.num1); //Como funciona el get

class Empleado extends Persona{
    constructor(nombre,apellido,edad,puesto,salario){
        super(nombre,apellido,edad);// El super hace referencia a la clase padre
        this.puesto=puesto;
        this.salario=salario;
    }
}
var empleado1=new Empleado("Luis","Perez",20,"Camarero",1400);
console.log(empleado1.getEdad());
