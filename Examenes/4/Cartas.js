export class Cartas{
    constructor(palo,valor){
        this.palo=palo;
        this.valor=valor;
    }
    darValor(palo,valor){
        if(palo>=1 && palo<=4 && valor>=1 && valor<=10){
            this.palo=palo;
            this.valor=valor;
        }
        
    }
    toString(){
        return Cartas.traducirValor(this.valor)+" de "+Cartas.traducirPalo(this.palo);
    }
    static traducirPalo(palo){
        switch (palo) {
            case 1:
                return "oros";
                break;
            case 2:
                return "copas";
                break;
            case 3:
                return "espadas";    
                break;
            case 4:
                return "bastos";
                break;
        }
    }
    static traducirValor(valor){
        switch (valor) {
            case 1:
                return "as";
            case 2:
                return "dos";
            case 3:
                return "tres";
            case 4:
                return "cuatro";
            case 5:
                return "cinco";    
            case 6:
                return "seis";
            case 7:
                return "siete";
            case 8:
                return "sota";
            case 9:
                return "caballo";
            case 10:
                return "rey";
        }
    }
}