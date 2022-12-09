import {Animal} from './animal.js';
export class Gallina extends Animal{
    estadoHuevo=0;
    constructor(nombre){
        super(nombre,2);
    }
    comer(comidaKG){
        for(comidaKG;comidaKG>=0;comidaKG--){
            this.estadoHuevo+=20;
            if(this.estadoHuevo==100){
                this.ponerHuevo;      
            }
        }
    }
    ponerHuevo(){
        if(this.enfermo){
            alert(`${this.nombre}/${this.numID}.No puede poner un huevo esta enferma.`);
        }else{
            this.estadoHuevo=0;
            alert(`${this.nombre}/${this.numID}.A puesto un huevo.`);
        }
    }
}