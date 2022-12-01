function inNum(mensaje) {
    let num=parseInt(prompt(mensaje));
    while(isNaN(num)){
        alert("No es un numero");
        num=parseInt(prompt(mensaje));
    }
    return num;
}
var min=inNum("Introduce el numero minimo"),max=inNum("Introduce el maximo");
var list;
if((min%2)!=0){
    var i=min+1;
}else{
    var i=min;
}
for(i;i<=max;i+=2){
    (list==undefined)?(list=`${i},`):(list=`${list}${i},`);
}
alert(list);