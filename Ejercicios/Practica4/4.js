document.write(`
<style>
body{
    display: flex;
    justify-content: center;
    font-family: sans-serif;
}
h1{
    text-align: center;
}
table,tr,td{
    border: 3px solid black;
    border-collapse: collapse;
    font-size: 1.2em;
    text-align: center;
}
td{
    width: 40px;
    height: 40px;
}
.mina{
    background-color: rgb(34, 132, 212);
}
img{
    width: 40px;
    height: 40px;
}
.uno{
    color: blue;
}
.dos{
    color: green;
}
.tres{
    color: rgb(126, 0, 151);
}
.cuatro{
    color: brown;
}
.cinco{
    color: red;
}
.seis{
    color: pink;
}
.siete{
    color: purple;
}
.ocho{
    color: orangered;
}
</style>
`);
let FILAS=parseInt(prompt("Introduce el numero de filas"));
while(isNaN(FILAS)){
    alert("No es un numero");
    FILAS=parseInt(prompt("Introduce el numero de filas"));
}

let COLUMNAS=parseInt(prompt("Introduce el numero de columnas"));
while(isNaN(COLUMNAS)){
    alert("No es un numero");
    COLUMNAS=parseInt(prompt("Introduce el numero de columnas"));
}
function createTable() {
    const aTablero=new Array(FILAS);
    for (let y = 0; y < FILAS; y++) {
        aTablero[y]=new Array(COLUMNAS);
        for (let x = 0; x < COLUMNAS; x++) {
            aTablero[y][x]=false;
        }   
    }
    return aTablero;    
}
function putMine(cantidad,tablero){ 
    for (let mina = 0; mina <=cantidad;) {
        let posicionX=parseInt(Math.random()*COLUMNAS);
        let posicionY=parseInt(Math.random()*FILAS);
        if(tablero[posicionY][posicionX]!="mina"){
            tablero[posicionY][posicionX]="mina";
            ++mina;
        }
    }
    return tablero;
}
function calcularCasilla(table){
    for (let y = 0; y < table.length; y++) {
        for (let x = 0; x < table[0].length; x++) {
            //Calcular la casilla
            let cantidadMinas=0;
            if(table[y][x]=="mina"){
                continue;
            }
            for (let ycasilla = -1; ycasilla <=1; ycasilla++) {
                var yposicion=y-ycasilla;
                if(yposicion>=FILAS || yposicion<0){
                    continue;
                }else{
                    for (let xcasilla = -1; xcasilla <=1; xcasilla++) {
                        var xposicion=x-xcasilla;
                        if(xposicion>COLUMNAS || xposicion<0){
                            continue;
                        }else if(table[yposicion][xposicion]=="mina"){
                            ++cantidadMinas;
                        }
                    }
                }
            }
            table[y][x]=cantidadMinas;
        }
    }
    return table;
}
function pintarTablero(tablero){
    document.write("<table>");
    for (const x of tablero) {
        document.write("<tr>");
        for (const celda of x) {
            if(celda=="mina"){
                document.write(`<td class="mina"><img src="./Mina-submarina-04.gif"></td>`);    
            }else if(celda==0){
                document.write(`<td> </td>`);
            }else{
                switch (celda) {
                    case 1:
                        document.write(`<td class="uno">${celda}</td>`); 
                        break;
                    case 2:
                        document.write(`<td class="dos">${celda}</td>`); 
                        break;
                    case 3:
                        document.write(`<td class="tres">${celda}</td>`); 
                        break;
                    case 4:
                        document.write(`<td class="cuatro">${celda}</td>`); 
                        break;
                    case 5:
                        document.write(`<td class="cinco">${celda}</td>`); 
                        break;
                    case 6:
                        document.write(`<td class="seis">${celda}</td>`); 
                        break;
                    case 7:
                        document.write(`<td class="siete">${celda}</td>`); 
                        break;
                    case 8:
                        document.write(`<td class="ocho">${celda}</td>`); 
                        break;
                }
            }
        }
        document.write("</tr>");
    }
    document.write("<table>");
}
var atablero=createTable();
atablero=putMine(((COLUMNAS*FILAS)*0.15),atablero);
atablero=calcularCasilla(atablero);
console.log(atablero);
pintarTablero(atablero);
// console.log(calcularCasilla(atablero));