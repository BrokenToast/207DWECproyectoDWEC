function comprobarMes(fecha) {
    var exp=/([1][0-2])|([0][0-9])/;
    return exp.test(fecha);
}
var mUsuarios=new Map();
for (let index = 0; index < 100; index++) {
    let dia=parseInt(Math.random()*31+1);
    let mes=parseInt(Math.random()*12);
    let year=parseInt(Math.random()*41+1980);
    mUsuarios.set(index+1,new Date(year+"-"+mes+"-"+dia));
}
var mesInput=prompt("Introduce el mes (MM)");
while(!comprobarMes(mesInput)){
    alert("Error de formato");
    mesInput=prompt("Introduce el mes (MM)");
}
var mResultado=new Map();
for (const [name,fecha] of mUsuarios) {
    if((fecha.getMonth())==mesInput-1){
        mResultado.set(name,fecha);
    }
}
for (const [name,fecha] of mResultado) {
    document.write(name+"=="+fecha+"<br>");
}
