class Granja{
    aVacas=[];
    aGallinas=[];
    #codigoGranja
    constructor(codigoGranja){
        this.#codigoGranja=codigoGranja;
    }
    darComerVacas(){

    }
    ordeyarVacas(){

    }
    darComerGallinas(){

    }
    comprarVacas(){

    }
    comprarGallinas(){

    }
    venderVacas(){

    }
    venderGallinas(){

    }
    toString(){

    }
    #comprobarCodigoGranja(codigo){
        exp=/[0-9]{10}[a-z]/gi;
        return exp.test(codigo);
    }
}