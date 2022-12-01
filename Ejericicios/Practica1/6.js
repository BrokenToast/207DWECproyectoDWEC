function inNum(mensaje) {
    let num=parseInt(prompt(mensaje));
    while(isNaN(num)){
        alert("No es un numero");
        num=parseInt(prompt(mensaje));
    }
    return num;
}
function numRange(mensaje,min,max) {
    let num=inNum(`${mensaje} ${min} - ${max}`);
    while(num<min || num>max){
        alert("Esta fuera del rango");
        num=inNum(`${mensaje} ${min} - ${max}`);
    }
    return num;
}
var cantAlum=inNum("Introduce la cantidad de alumnos");
var nombre,numExpe,notaPra,notaTeo,notaAct,alumno;
for(var i=1; i<=cantAlum;i++){
    nombre=prompt(`Introduce el nombre del alumno ${i}`);
    numExpe=prompt("Introduce el numbre del expediente");
    while((numExpe.length!=5) && ((isNaN(numExpe[0]) && isNaN(numExpe[1]) && isNaN(numExpe[2]) && isNaN(numExpe[3])) || (!(isNaN(numExpe[4]))))){
        alert("Numero de Expediente incorrecto")
        numExpe=prompt("Introduce el numbre del expediente");
    }
    notaPra=numRange("Nota parte practica",1,10);
    notaTeo=numRange("Nota parte teorica",1,10);
    notaAct=numRange("Nota de su Actitud",1,10);
    (i==1)?(alumno=`${nombre}:${numExpe}:${notaPra}:${notaTeo}:${notaAct}:${(notaPra*0.50)+(notaTeo*0.40)+(notaAct*0.10)}|`):(alumno=`${alumno}${nombre}:${numExpe}:${notaPra}:${notaTeo}:${notaAct}:${(notaPra*0.50)+(notaTeo*0.40)+(notaAct*0.10)}|`);
}
alert(alumno);