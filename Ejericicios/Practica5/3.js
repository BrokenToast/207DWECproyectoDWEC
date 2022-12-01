function comprobarFecha(fecha) {
    var exp=/((3[01])|([0-2][0-9]))-[01][0-2]-[0-9]{4}/;
    return exp.test(fecha);
}
function compareFecha(fecha1,fecha2=new Date()) {
    if (fecha1.getFullYear()>fecha2.getFullYear()) {
        return 1;
    }else if(fecha1.getFullYear()<fecha2.getFullYear()){
        return -1;
    }else{
        if (fecha1.getMonth()>fecha2.getMonth()) {
            return 1;
        }else if(fecha1.getMonth()<fecha2.getMonth()){
            return -1;
        }else{
            if (fecha1.getDate()>fecha2.getDate()) {
                return 1;
            }else if(fecha1.getDate()<fecha2.getDate()){
                return -1;
            }else{
                return 0;
            }
        }   
    }
}
function diaSemana(dia) {
    switch (dia) {
        case 0:
            return  "Domingo";
        case 1:
            return "Lunes";
        case 2:
            return  "Martes";
        case 3:
            return  "Miercoles";
        case 4:
            return  "Jueves";
        case 5:
            return  "Viernes";
        case 6:
            return  "Sabado";
    }
}
var fechaNacimiento=prompt("Introduce la fecha (DD-MM-YYYY)");
while (!comprobarFecha(fechaNacimiento) || compareFecha(new Date(fechaNacimiento.split('-').reverse().join("-")))==1) {
    alert("Error de formato de fecha o es mayor a la actual");
    fechaNacimiento=prompt("Introduce la fecha (DD-MM-YYYY)");
}
var oFechaNac=new Date(fechaNacimiento.split('-').reverse().join("-"));
console.log(oFechaNac.toString());
var ofechaAhora=new Date(Date.now())
for (let year = oFechaNac.getFullYear(); year <=ofechaAhora.getFullYear(); year++) {
    document.write(diaSemana(oFechaNac.getDay())+" "+year+"<br>");
    oFechaNac.setFullYear(oFechaNac.getFullYear()+1);
}

