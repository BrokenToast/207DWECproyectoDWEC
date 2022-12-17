document.write(`
<style>
.falso{
    width: 40px;
    height: 40px;
    background-color: aqua;
}
.verdadero{
    width: 40px;
    height: 40px;
    background-color: black;
}
</style>
`);
const X=10;
const Y=10;
var dif;
function barco(barco,tablero){   
    let ok=true;
    do {
        var lista=[];
        let index=-1;
        okCant=0 ;
        var postX=parseInt(Math.random()*X);
        var postY=parseInt(Math.random()*Y);   
    switch (parseInt(Math.random()*4)) {//
        case 0:
            //norte
            dif=postY-barco;
            //Comprobaciones de si alrededor hay un barco.
            for(let y=1+postY;y>dif-1;y--){
                for(let x=postX-1;x<=postX+1;x++){
                    if(y<0 || y>=10){
                        continue;
                    }
                    if(tablero[y][x]){
                        dif=11;
                        break;
                    }
                }
            }
            //Seudopinta el barco, inserta las cordenadas en una lista.
            if(dif>=0 && dif<10 ){
                for (let n=postY;n>dif;n--){
                    if(tablero[n][postX]!=false){
                        break;
                    }else{
                        lista[++index]=n+""+postX;
                    }
                }
                ok=false;
            }
            break;
        case 1:
            //este
            dif=postX+barco;
            for(let x=postX-1;x<dif+1;x++){
                for(let y=postY-1;y<=postY+1;y++){
                    if(y<0 || y>=10){
                        continue;
                    }
                    if(tablero[y][x]){
                        dif=11;
                    }
                }
            }
            if(dif>=0 && dif<10){
                for (let e=postX;e<dif;e++){
                    if(tablero[postY][e]!=false){
                        break;
                    }else{
                        lista[++index]=postY+""+e;
                    }
                }
                ok=false;
            }
            break;
        case 2:
            //sur
            dif=postY+barco;
            for(let y=postY-1;y<dif+1;y++){
                for(let x=postX-1;x<=postX+1;x++){
                    if(y<0 || y>=10){
                        continue;
                    }
                    if(tablero[y][x]){
                        dif=11;
                    }
                }
            }
            if(dif>=0 && dif<10){
                for (let s=postY;s<dif;s++){
                    if(tablero[s][postX]!=false){
                        break;
                    }else{
                        lista[++index]=s+""+postX;
                    }
                }
                ok=false;
            }
            break;
        case 3:
            //oeste
            dif=postX-barco;
            for(let x=postX+1;x>dif-1;x--){
                for(let y=postY-1;y<=postY+1;y++){
                    
                    if(y<0 || y>=10){
                        continue;
                    }
                    if(tablero[y][x]){
                        dif=11;
                    }
                }
            }
            if(dif>=0 && dif<10){
                for (let o=postX;o>dif;o--){
                    if(tablero[postY][o]!=false){
                        break;
                    }else{
                        lista[++index]=postY+""+o;
                    }
                }
                ok=false;
            }
            break;
    }
    } while (ok);
    for (const pos of lista) {
        tablero[pos[0]][pos[1]]=true;
    }
}

function pintarTablero(tabla) {
    document.write("<table><tbody>")
    for (let k = 0; k < tabla.length; k++) {
        document.write("<tr>")
        for (let l = 0; l < tabla.length; l++) {
            if (tabla[k][l] == false) {
                document.write("<th class='falso'></th>");
            } else {
                document.write("<th class='verdadero'></th>");
            }
        }
        document.write("</tr>")
    }
    document.write("</tbody></table>")
}

var tablero=new Array(Y);
for(let y=0;y<Y;y++){
    tablero[y]=new Array(X);
    for(let x=0;x<X;x++){
        tablero[y][x]=false;
    }
}

barco(4,tablero);
barco(4,tablero);

barco(3,tablero);
barco(3,tablero);

barco(2,tablero);
barco(2,tablero);

barco(1,tablero);
barco(1,tablero);
pintarTablero(tablero);