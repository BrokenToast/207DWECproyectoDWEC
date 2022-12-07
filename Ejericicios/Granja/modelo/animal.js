export default class Animal{
    enfermo=false;
    constructor(nombre,numPatas){
        this.nombre=nombre;
        this.numPatas=numPatas;
        this.numID=this.cambiarID();
    }
    cambiarID(){
        id="";
        for (let i = 1; i <= 5; i++) {
            id.concat("",Math.random()*9);
        }
        this.numID=id;
    }
    toString(){
        return this.nombre+"/"+this.numID;
    }
    curar(){
        if(this.enfermo){
            alert('Esta Sana');
        }else{
            this.enfermo=true;
            alert(this.nombre+"/"+this.numID+`.A sido curada con exito.`);
        }
    }
}