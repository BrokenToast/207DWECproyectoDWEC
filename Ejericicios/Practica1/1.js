var rojo=parseInt(Math.random()*256);
var verde=parseInt(Math.random()*256);
var azul=parseInt(Math.random()*256);
document.write(`<div id="fondo" style="background-color:rgb(${rojo+","+verde+","+azul})"></div>`);