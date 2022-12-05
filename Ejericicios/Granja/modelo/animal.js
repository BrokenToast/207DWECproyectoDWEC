class Animal{
    numIdentificacion;
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
        return id;
    }
    toString(){
        return this.nombre+"/"+this.numID;
    }
    curar(){
        if(this.enfermo){
            return this.nombre+" esta sano";
        }else{
            this.enfermo=true;
            return this.nombre+" ya esta curada :D";
        }
    }
}