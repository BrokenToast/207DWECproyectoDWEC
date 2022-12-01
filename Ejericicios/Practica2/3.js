let num,cont=0,caract="",acu=0,ok=true;
while(ok){
    num=prompt("Introduce un numero");
    if(num!=null){
        if(!(isNaN(num))){
            acu+=parseInt(num);
        }else{
            ++cont;
            caract=caract+num+",";
            alert("No es un numero"); 
        }
    }else{
        ok=false;
    }
}
if(caract==null){
    alert(`Media:${acu}`);
}else{
    alert(`Media:${acu}|| Caracteres:${caract}`);
}
