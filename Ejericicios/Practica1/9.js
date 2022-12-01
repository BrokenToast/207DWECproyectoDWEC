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
if((min%2)!=0){
    impar+=min;
    i=min+1;
}else{
    i=min;
}
for(i;i<max;i+=2){
    if(i<max){
        impar+=i+1;
    }
    par+=i;
}
alert(`Impar:${impar}| par:${par}`);