import {Granja} from '../controlador/granja.js';
let cantidad;
let granjaManolo=new Granja("1234567891A");
let opcion=prompt("1. info. Granja\n 2. Comprar Vacas \n 3. Comprar Gallinas\n 4.Vender Vacas\n 5. Vender Gallinas \n 6. Dar de comer vacas \n 7. Dar de comer gallinas \n 8. Ordeñar \n 9. Ver animaes enfermos\n 10.Curar\n 0. Salir");
while(opcion!="0"){
    switch (opcion) {
        case "1":
            alert(granjaManolo.toString());
            break;
        case "2":
            cantidad=prompt("¿Cuantas vacas quieres comprar?");
            granjaManolo.comprarVacas(cantidad);
            break;
        case "3":
            cantidad=prompt("¿Cuantas gallinas quieres comprar?");
            granjaManolo.comprarGallinas(cantidad);
            break;
        case "4":
            cantidad=prompt("¿Cuantas vacas quieres vender?");
            try{
                granjaManolo.venderVacas(cantidad);
            } catch (error) {
                alert(error.message);   
            }
            break;
        case "5":
            cantidad=prompt("¿Cuantas gallinas quieres vender?");
            try {
                granjaManolo.venderVacas;
            } catch (error) {
                alert(error.message);   
            }
            break;
        case "6":
            cantidad=prompt("¿Cuanto le quieres dar de comer a las vacas?")
            try {
                granjaManolo.darComerVacas(cantidad);
            } catch (error) {
                alert(error.message);   
            }
            break;
        case "7":
            cantidad=prompt("¿Cuanto le quieres dar de comer a las gallina?")
            try {
                granjaManolo.darComerGallinas(cantidad);
            } catch (error) {
                alert(error.message);   
            }
            break;
        case "8":
            granjaManolo.ordeyarVacas();
            break;
        case "9":
            granjaManolo.verAnimalesEnfermos();
            break;
        case "10":
            granjaManolo.curar();
            break;
        default:
            alert("La opcion no existe");
            break;
    }
    opcion=prompt("1. info. Granja\n 2. Comprar Vacas \n 3. Comprar Gallinas\n 4.Vender Vacas\n 5. Vender Gallinas \n 6. Dar de comer vacas \n 7. Dar de comer gallinas \n 8. Ordeñar \n 9. Ver animaes enfermos\n 10.Curar\n 0. Salir");
}