function comprobarFecha(fecha) {
    var exp=/((3[01])|([0-2][0-9]))-[01][0-2]-[0-9]{4}/;
    return exp.test(fecha);
}
function comprobarHora(hora) {
    var exp=/[0-2][0-9]:[0-5][0-9]:[0-5][0-9]/;
    return exp.test(hora);
}
var dia=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
var mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var fechaInput=prompt("Introduce la fecha (DD-MM-YYYY)");
if(fechaInput==null || fechaInput==""){
    var ofechaAhora=new Date(Date.now());
    document.write(`Hoy es ${dia[ofechaAhora.getDay()] }, ${ofechaAhora.getDate()} de ${mes[ofechaAhora.getMonth()]} de ${ofechaAhora.getFullYear()} y son las ${ofechaAhora.getHours()} horas, ${ofechaAhora.getMinutes()} minutos y ${ofechaAhora.getSeconds()} segundos`);
}else{
    while (!comprobarFecha(fechaInput)) {
        alert("Error de formato de fecha");
        fechaInput=prompt("Introduce la fecha (DD-MM-YYYY)");
    }
    var inputHora=prompt("Introduce la hora (HH:MM:SS)");
    while (!comprobarHora(inputHora)) {
        alert("Error de formato de hora");
        var inputHora=prompt("Introduce la hora (DD-MM-YYYY)");
    }
    var ofechaInput=new Date(fechaInput.split('-').reverse().join("-")+"T"+inputHora);
    document.write(`Es ${dia[ofechaInput.getDay()]}, ${ofechaInput.getDate()} de ${mes[ofechaInput.getMonth()]} de ${ofechaInput.getFullYear()} y son las ${ofechaInput.getHours()} horas, ${ofechaInput.getMinutes()} minutos y ${ofechaInput.getSeconds()} segundos`);
}

