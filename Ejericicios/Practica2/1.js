function inNum(mensaje) {
    let num=parseInt(prompt(mensaje));
    while(isNaN(num)){
        alert("No es un numero");
        num=parseInt(prompt(mensaje));
    }
    return num;
}
var numRam=parseInt(Math.random()*100+1);
var ok,cont=0;
do{
    ++cont;
    alert("Nueva partida");
    var numUse=inNum("Introduce un numero del 0 al 100");
    for(var i=0;i<5 && numRam!=numUse;i++){
        alert(`Error, te quedan ${5-i} intentos`);
        if(numUse>numRam){
            alert("Es menor");
        }else{
            alert("Es mayor ");
        }
        numUse=inNum("Introduce un numero del 0 al 100");
    }
    if(i==5){
        document.write(`<h1>${cont}. Fin de partida el numero era ${numRam}</h1>`);
    }else{
        document.write(`
        <h1>${cont}.¡¡¡¡Has ganado!!!!</h1>
        <h2>Numero de intentos ${i}</h2>
        `);
    }
    ok=confirm("Quieres seguir jugando")
}while(ok);