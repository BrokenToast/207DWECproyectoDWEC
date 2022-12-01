var impar=0,par=0;
for(var i=2;i<99;i+=2){
    par+=i;
    impar+=(i+1);
}
alert(`Impar:${impar} | par:${par}`);