function comprobarFecha(fecha) {
    var exp=/[0-9]{4}-[01][0-9]/;
    return exp.test(fecha);
}
var fecha=prompt("Introduce año y mes (YYYY-MM)");
while (!comprobarFecha(fecha)) {
    alert("Error de formato de año y mes");
    fecha=prompt("Introduce el año y el mes (YYYY-MM)");
}
var oFecha=new Date(fecha);
var ames=[["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]];
let aSemana=[null,null,null,null,null,null,null];
var mes=oFecha.getMonth()+1;
while(oFecha.getMonth()<mes){
    aSemana[(oFecha.getDay())]=(oFecha.getDate());
    oFecha.setDate(oFecha.getDate()+1);
    if((oFecha.getDay())==0 || oFecha.getMonth()==mes) {
        console.log(aSemana);
        ames.push(aSemana);
        aSemana=[null,null,null,null,null,null,null];
    }
}
console.log(ames)
document.write("<table>");
for (const semana of ames) {
    document.write("<tr>");
    for (const dia of semana) {
        document.write(`<td>${dia}</td>`);
    }
    document.write("</tr>");
}
document.write("</table>");
