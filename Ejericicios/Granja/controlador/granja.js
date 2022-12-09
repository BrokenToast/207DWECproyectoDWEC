import {Vaca} from "../modelo/vaca.js";
import {Gallina} from "../modelo/gallina.js";
export class Granja{
    aVacas=[];
    aGallinas=[];
    #codigoGranja;

    constructor(codigoGranja){
        if(!this.#comprobarCodigoGranja(codigoGranja)){
            throw new Error("El codigo es incorecto");
        }else{
            this.#codigoGranja=codigoGranja;
        }
    }
    darComerVacas(cantidadComida){
        if(this.aVacas.length==0){
            throw new Error("No hay vacas");
        }
        let comen=parseInt(cantidadComida/this.aVacas.length);
        let sobrante=cantidadComida%this.aVacas.length;
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
        if(this.aGallinas.length==0){
            throw new Error("No hay gallinas");
        }
        let comen=parseInt(cantidadComida/this.aGallinas.length);
        let sobrante=cantidadComida%this.aGallinas.length;
        for (const gallina of this.aGallinas) {
            gallina.comer(comen);    
        }
        console.log(sobrante);
        console.log(this.aGallinas);S
    }
    comprarVacas(cantidad){
        for (let i= 0;  i<cantidad; i++) {
            let nombre=prompt("¿Como quieres llamar a la vaca?");
            let vaca=new Vaca(nombre)
            while(this.#buscarAnimal(vaca.numID,this.aVacas)!=-1){
                vaca.cambiarID();
            }
            this.aVacas.push(vaca);
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
        if((this.aVacas.length-cantidad)<0){
            throw new Error("No hay suficientes vascas");
        }
        this.aVacas.splice(0,cantidad);
    }
    venderGallinas(cantidad){
        if((this.aGallinas.length-cantidad)<0){
            throw new Error("No hay suficientes gallinas");
        }
        this.aGallinas.splice(0,cantidad);
    }
    toString(){
        return (`${this.#codigoGranja} tiene ${this.aVacas.length} vacas y ${this.aGallinas.length} gallinas`);
    }
    verAnimalesEnfermos(){
        let cadenaVacas=[];
        for (const vaca of this.aVacas) {
            if(vaca.enfermo){
                cadenaVacas.push(`/( ${vaca.nombre} | ${vaca.numID})`);
            }
        }
        alert(cadenaVacas.join(""));
    }
    curar(){
        for (const vaca of this.aVacas) {
            vaca.curar();    
        }
    }
    #comprobarCodigoGranja(codigo){
        let exp=/[0-9]{10}[a-z]/gi;
        return exp.test(codigo);
    }
    #buscarAnimal(id,aAnimal){
        for (let i=0;i<aAnimal.length;i++) {
            if(aAnimal[i].numID==id){
                return i;
            }
        }
        return -1;
    }
}