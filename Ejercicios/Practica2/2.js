function inNum(mensaje) {
    let num=parseInt(prompt(mensaje));
    while(isNaN(num) || num<=0){
        alert("No es un numero");
        num=parseInt(prompt(mensaje));
    }
    return num;
}
var numAs=inNum("Introduce un numero");
var aster;
for(let y=1;y<=numAs;y++){
    (y==1)?(aster="*"):(aster=aster+"*")
    document.write(`<p>${aster}</p>`);
}

document.write("<br>");
for(let x,y=numAs;y>=1;y--){
    aster=" ";
    for(x=1;x<=y;x++){
        if(y==1){
            aster="*";
            break;
        }else{
            aster=aster+"*";
        }  
    }
    document.write(`<p>${aster}</p>`);
}

document.write("<br>");
for(let y=1; y<=numAs ;y++){
    aster=" ";
    for(let b=1;b<=(numAs-y);b++){
        if(b==1){
            aster="&nbsp";
        }else{
            aster=aster+"&nbsp";
        }  
    }
    for(let x=1;x<=y;x++){
        aster=aster+"*"; 
    }
    document.write(`<p>${aster}</p>`);
}

document.write("<br>");
for(let y=numAs; y>=1 ;y--){
    aster=" ";
    for(let b=1;b<=(numAs-y);b++){
        if(b==1){
            aster="&nbsp";
        }else{
            aster=aster+"&nbsp";
        }   
    }
    for(let x=1;x<=y;x++){
        aster=aster+"*"; 
    }
    document.write(`<p>${aster}</p>`);
}