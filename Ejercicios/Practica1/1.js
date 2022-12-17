alert("Estas en el ejercicio 1");
var rojo=parseInt(Math.random()*256);
var verde=parseInt(Math.random()*256);
var azul=parseInt(Math.random()*256);
document.write(`<div id="fondo" style="background-color:rgb(${rojo+","+verde+","+azul})"></div>`);
document.write(`
<style>
#fondo{
    position: fixed;
    top:0%;
    left: 0%;
    width: 100%;
    height: 100%;
}
</style>
`);