import Vaca from "../modelo/vaca.js";
import Gallina from "../modelo/gallina.js";
export class Granja{
    aVacas=[];
    aGallinas=[];
    #codigoGranja
    constructor(codigoGranja){
        exp=/[0-9]{10}[a-z]/gi;
        if(!(exp.test(codigo))){
            throw new Error("El codigo es incorecto");
        }else{
            this.#codigoGranja=codigoGranja;
        }
    }
    darComerVacas(cantidadComida){
        comen=parseInt(cantidadComida/this.aVacasacas.length());
        sobrante=cantidadComida%this.aVacass.length();
        for (const vaca of this.aVacas) {
            vaca.comer(comen);    
        }
        console.log(sobrante);
    }
    ordeyarVacas(){
        for (const vaca of this.aVacas) {
            vaca.ordeyar();    
        }
    }
    darComerGallinas(cantidadComida){
        comen=parseInt(cantidadComida/this.aGallinas.length());
        sobrante=cantidadComida%this.aGallinas.length();
        for (const gallina of this.aGallinas) {
            gallina.comer(comen);    
        }
        console.log(sobrante);
    }
    comprarVacas(cantidad){
        for (let i= 0;  i<cantidad; i++) {
            let nombre=prompt("¿Como quieres llamar a la vaca?");
            let gallina=new Gallina(nombre)
            while(this.#buscarAnimal(gallina.numID,this.aGallinas)!=-1){
                gallina.cambiarID();
            }
            this.aGallinas.push(gallina);
        }
    }
    comprarGallinas(cantidad){
        for (let i= 0;  i<cantidad; i++) {
            let nombre=prompt("¿Como quieres llamar a la gallina?");
            let gallina=new Gallina(nombre)
            while(this.#buscarAnimal(gallina.numID,this.aGallinas)!=-1){
                gallina.cambiarID();
            }
            this.aGallinas.push(gallina);

        }
    }
    venderVacas(cantidad){
        this.aVacas.splice(0,cantidad);
    }
    venderGallinas(cantidad){
        this.aGallinas.splice(0,cantidad);
    }
    toString(){
        alert(`${this.#codigoGranja} tiene ${this.aVacas.length()} vacas y ${this.aGallinas.length()} gallinas`);
    }
    verAnimalesEnfermos(){
        let cadenaVacas="";
        for (const vaca of this.aVacas) {
            if(vaca.enfermo){
                cadenaVacas+="|"+vaca.numID;
            }
        }
        alert(cadenaVacas);
    }
    curar(){
        for (const vaca of this.aVacas) {
            vaca.curar();    
        }
    }
    #buscarAnimal(id,aAnimal){
        for (i=0;i<aAnimal.length();i++) {
            if(aAnimal[i].numID==id){
                return i;
            }
        }
        return -1;
    }
}