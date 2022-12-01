function inNum() {
    num=parseInt(prompt("Introduce un numero"));
    while(isNaN(num)){
        alert("No es un numero");
        num=parseInt(prompt("Introduce un numero"));
    }
}
var num;
var cant=0;
var media=0;
inNum();
var min=num;
var max=num;
while(num!=0){
    media+=num;
    if(num<min){
        min=num;
    }else if(num>max){
        max=num;
    }
    ++cant;
    inNum();
}
alert(`Has instroducido ${cant} numeros, el maximo es ${max} y el minimo es ${min}. La medias es ${media/cant}`);

