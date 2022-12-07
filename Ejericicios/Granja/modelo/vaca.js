import Animal from './Animal.js';
export default class Vaca extends Animal{
    litrosLeche=1;
    constructor(nombre){
        super(nombre,4);
    }
    comer(comidaKG){
        for(comidaKG;comidaKG>=0; comidaKG--){
            this.litrosLeche+=0.5;
            if(this.litrosLeche==18){
                alert(this.nombre+"/"+this.numID+". Tiene que ser ordeñada.");
            } 
            if(this.litrosLeche<=28){
                this.enfermo=true;
                alert(this.nombre+"/"+this.numID+".Mal, ahora la pobre esta enferma.");
                break;
            }
        }
    }
    ordeyar(){
        if(this.enfermo){
            alert(this.nombre+"/"+this.numID+".Esta enferma no puede ser ordeñada");
        }else{
            this.litrosLeche=1;
            alert(this.nombre+"/"+this.numID+`.Se a ordeñado ${this.litrosLeche-1}`);
        }
    }
    curar(){
        if(this.enfermo){
            alert(this.nombre+"/"+this.numID+`.Esta Sana`);
        }else{
            this.litrosLeche=1;
            alert(this.nombre+"/"+this.numID+`.A sido curada con exito.`);
            alert("Pero as perdido toda la leche");
        }

    }
}