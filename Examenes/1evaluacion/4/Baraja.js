import {Cartas} from "./Cartas.js";
export class Baraja{
    #baraja=[];
    constructor(){
        for (let i = 1; i <=4; i++) {
            for (let x = 1; x <=10; x++) {
               this.#baraja.push(new Cartas(i,x)); 
            }
        }
    }
    barajar(){
        for (let index = 1; index <= 40; index++) {
            let numPosi=parseInt(Math.random()*40);
            this.#baraja[numPosi]=[this.#baraja[index]];
        }
    }
    toString(){
        for (const carta of this.#baraja) {
            console.log(carta.toString());
        }
    }
}