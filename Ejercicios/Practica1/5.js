alert("Estas en el ejercicio 5");
function inNum(mensaje) {
    let num=parseInt(prompt(mensaje));
    while(isNaN(num)){
        alert("No es un numero");
        num=parseInt(prompt(mensaje));
    }
    return num;
}
var num=inNum("Introuduce la contraseña");
for(var i=1;i<2;i++){
    if(num==123456){
        alert("Felicidades has entrado");
        break;
    }else{
        alert(`Contraseña Incorrecto ${3-i}`);
        num=parseInt(prompt("Introuduce la contraseña"));
    }
}