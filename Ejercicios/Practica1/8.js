var impar=1,par=0;
for(var i=2;i<100;i+=2){
    par+=i;
    impar+=(i+1);
}
alert(`Impar:${impar} | par:${par}`);