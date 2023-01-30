function mensaje(e) {
    alert("click en el boton")
}
let capa=document.querySelector("div");
let parafo=document.querySelector("p");
let boton=document.querySelector("button");
/*Primera forma de añadir un elementi*/
//boton.onclick= ()=>alert("hola");
/*Segunda forma*/
boton.addEventListener("click",mensaje);//Añadir Evento
boton.removeEventListener("click",mensaje);//Eliminar evento
boton.addEventListener("click",()=>alert("click en el boton"));//Añadir Evento
parafo.addEventListener("click",()=>alert("click en el parrafo"),false); // le cercer atributo es si siguen el metodo de propagacion de pompa(Tienen que se todos false para desactivalo)
capa.addEventListener("click",()=>alert("click en el div"),false);
/*La propagacion es del hijo o niesto hacia el padre*/

/*Objeto events*/
function mensajeEvent(oEvent) {
    alert(oEvent);// Es un objeto que puede ser pasado a la funcuio;
    alert(oEvent.target);// Es una propiedad que nos devuelve el elemento que a producicido el evento;
    oEvent.target.style.backgroundColor="red";
    //Podemos ver las cordenadas del evento(Coje las cordenadar del raton respecto al border superior izquierdo de la ventana del navegador)
    alert(`Ventana: X=${oEvent.clientX} | Y=${oEvent.clientY}`);
    // Es como el anterior pero respecto a la pantalla
    alert(`Pantalla: X=${oEvent.screenX} | Y=${oEvent.screenY}`);
    // Es como el anterior pero respecto a la pagina(Es util cuanto tenemos escroll)
    alert(`Pagina: X=${oEvent.pageX} | Y=${oEvent.pageY}`);

}
boton.addEventListener("click",mensajeEvent);//Añadir Evento

//teclado 
document.body.addEventListener("keyup",tecla);
function tecla(params) {
    //alert(params.key);// nos dice que tecla hemos pulsado.
    //alert(params.altKey);//Porpiedad, que alamcena true si hemos pulsado el alt
    //alert(params.ctrlKey);//Porpiedad, que alamcena true si hemos pulsado el ctrl
    //alert(params.metaKey);//Porpiedad, que alamcena true si hemos pulsado la tecla de casa(Windwos)
    //alert(params.shiftKey);//Porpiedad, que alamcena true si hemos pulsado el shift
    alert(`Tecla:${params.key} | alt:${params.altKey} | ctrl:${params.ctrlKey} | Home:${params.metaKey} | shift:${params.shiftKey}`)
}
// Seguimiento del raton
var mmm=document.createElement("p");
mmm.setAttribute("id","cursor");
document.body.addEventListener("mousemove",aaaa);
function aaaa(par) {
    mmm.textContent=par.pageX+" "+ par.pageY;
    document.body.appendChild(mmm)
}
// Boton del raton
// 0 es click izquierdo
// 1 es click central
// 2 es click derecho
// Tambien depende de la configuración del raton
// El evento del raton tien tambien las propiedades del ctrl, alt, shift y home(Meta o Windows)
// Para ver el boton que se a ulsado lo hacemos con la propiedad button.
document.getElementById("prueba").addEventListener("mousedown",buttom);
function buttom(evento) {
    alert("Has pulsado el boton:"+evento.button);
}

// Eventos por defecto
// Desactivar un evento por defecto
// Lo Eliminamos con preventDefault()
document.getElementById("enlace").addEventListener("click",defecto);
document.getElementById("enlace").addEventListener("contextmenu",deleteContexMenu);
function deleteContexMenu(evento) {
    evento.preventDefault();
}
function defecto(evento) {
    if(!confirm("¿Quieres ir a google?")){
        evento.preventDefault();
    }
}
/*Frenar la propagiacion*/
//para parar la propagación deun evento lo hacemo con stopPropagation()
capa.addEventListener("mousedown",propagacion);
parafo.addEventListener("mousedown",propagacion);
boton.addEventListener("mousedown",propagacion);
function propagacion(evento) {
    alert("holiiiiiii"); // solo mostrara holiiiiiii una vez porque se para la propagación
    evento.stopPropagation();
}
/*Lanzar eventos*/
//Crear un evente propio
let mievento=new Event("click"/*Esto es el tipo de evento*/);
//Para lanzar lo hacemos con dispatchEvent()(Por ejemplo queremos que cuando le hagamos click en un boton haga click en otro sitio);
document.getElementById("clickdiv").addEventListener("click",lanzar);
function lanzar(params) {
    capa.dispatchEvent(mievento);//Ahora con hacemos click en el boton hace tambien click en el div
}

/*Tipo de eventos*/
/*





*/
