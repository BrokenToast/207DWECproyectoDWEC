function inNum(mensaje) {
    let num=parseInt(prompt(mensaje));
    while(isNaN(num)){
        alert("No es un numero");
        num=parseInt(prompt(mensaje));
    }
    return num;
}
var min=(inNum("Introduce el numero minimo")+1),max=inNum("Introduce el maximo");
var list,par=0,impar=0;
for(i=min;i<max;i++){
    if((i%2)==0){
        par+=i;
    }else{
        impar+=i;
    }
}
alert(`Impar:${impar}| par:${par}`);