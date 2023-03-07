window.addEventListener("load",examen);
function examen(){
    let provincias=new Map();
    provincias.set("GA",["La Coruña","Lugo","Orense","Pontevedra"]);
    provincias.set("CL",["Ávila","Burgos","León","Palencia","Salamanca","Segovia","Soria","Valladolid","Zamora"]);
    provincias.set("EX",["Badajoz","Cáceres"]);
    provincias.set("PV",["Álava","Vizcaya","Guipúzcoa"]);
    
    let nombre=document.getElementById("nombre");
    let apellidos=document.getElementById("apellidos");
    let edad=document.getElementById("edad");
    let comunidades=document.getElementById("ccaa");
    let provincia=document.getElementById("provincia");
    let destinoArrastrable=document.querySelector(".resultado");
    let num1=document.getElementById("num1");
    let num2=document.getElementById("num2");
    let sol1=document.getElementById("sol1");
    let sol2=document.getElementById("sol2");
    let sol3=document.getElementById("sol3");
    let resultado=document.getElementById("resultado");
    let botonEnviar=document.getElementById("enviar");
    let botonLimpiar=document.getElementById("limpiar")
    let captcha=document.getElementById("captcha");
    let formulario=document.getElementById("formulario");
    let botonWeb=document.getElementById("btnweb");
    let botonDOM=document.getElementById("btndom");
    let botonInformacion=document.getElementById("btninfo");
    let cuadroDOM=document.getElementById("DOM");
    let cuadroInformacion=document.getElementById("informacion");
    let pie=document.getElementById("pie");

    let validarNombre=/^\w{3}/;
    let validarApellidos=/^\w{2,}\s\w{2,}/;
    let validarEdad=/^(10\d|110)|^(\d{1,2})$/;

    /*Capchat*/
    var cuadroDrag;
    function numeroAletaroioCaptchaFalsos() {
        resultado=parseInt(num1.textContent)+parseInt(num2.textContent);
        do{
            var num=parseInt(Math.random()*18+1);
        }while(num==resultado);
        return num;
    }
    function captchaCreate() {
        num1.textContent=parseInt(Math.random()*9+1);
        num2.textContent=parseInt(Math.random()*9+1);
        switch (parseInt(Math.random()*2+1)) {
            case 0:
                sol1.textContent=parseInt(num1.textContent)+parseInt(num2.textContent);
                sol2.textContent=numeroAletaroioCaptchaFalsos();
                sol3.textContent=numeroAletaroioCaptchaFalsos();
                break;
            case 1:
                sol1.textContent=numeroAletaroioCaptchaFalsos();
                sol2.textContent=parseInt(num1.textContent)+parseInt(num2.textContent);
                sol3.textContent=numeroAletaroioCaptchaFalsos();
                break;
            case 2:
                sol1.textContent=numeroAletaroioCaptchaFalsos();
                sol2.textContent=numeroAletaroioCaptchaFalsos();
                sol3.textContent=parseInt(num1.textContent)+parseInt(num2.textContent);
                break;
        }    
    }
    sol1.addEventListener("drag",(event)=>{
        event.preventDefault();
        cuadroDrag=event.target;
    });
    sol2.addEventListener("drag",(event)=>{
        event.preventDefault();
        cuadroDrag=event.target;
    });
    sol3.addEventListener("drag",(event)=>{
        event.preventDefault();
        cuadroDrag=event.target;
    });
    resultado.addEventListener("dragover",(event)=>{
        event.preventDefault();
    });
    resultado.addEventListener("drop",(event)=>{
        event.preventDefault();
        if((parseInt(num1.textContent)+parseInt(num2.textContent))==parseInt(cuadroDrag.textContent)){
            event.target.classList.add("correcto");
            event.target.textContent="OK"
            event.target.classList.remove("error");
            sol1.attributes.removeNamedItem("draggable");
            sol2.attributes.removeNamedItem("draggable");
            sol3.attributes.removeNamedItem("draggable");
            setTimeout(()=>{
                let mensaje=document.createElement("h3");
                mensaje.textContent="ENHORABUENA, NO ERES UN ROBOT";
                sol1.parentElement.appendChild(mensaje);
                setTimeout(()=>document.forms[0].submit(),2000);
            },2000);
            
        }else{
            event.target.classList.remove("correcto");
            event.target.classList.add("error");
            event.target.textContent="NO";
        }
    });
    /*Formulario*/
    function validarCampo(event,patronValidar){
        if(patronValidar.test(event.target.value)){
            event.target.classList.remove("error");
            event.target.classList.add("correcto");
        }else{
            event.target.classList.add("error");
            event.target.classList.remove("correcto");
        }
    }
    nombre.addEventListener("keyup",(event)=>{
        validarCampo(event,validarNombre);
    });
    apellidos.addEventListener("keyup",(event)=>{
        validarCampo(event,validarApellidos);
    });
    edad.addEventListener("keyup",(event)=>{
        validarCampo(event,validarEdad);
    });
    comunidades.addEventListener("change",(event)=>{
        if(event.target.value!="0"){
            for (const provin of provincias.get(event.target.value)) {
                provincia.innerHTML+=`<option value="${provin}">${provin}</option>`;
            }
        }else{
            provincia.innerHTML=`<option value="0" selected="selected">Seleccione Provincia</option>`;
        }
    });
    botonEnviar.addEventListener("click",(event)=>{
        event.preventDefault();
        if(nombre.classList.contains("correcto") && apellidos.classList.contains("correcto") && edad.classList.contains("correcto")){
            if(provincia.value!=0){
                captcha.style.display="block";
                captchaCreate();
            }else{
                alert("No se a selecionado Provincia o Comunidad");
            }
        }
    });
    botonLimpiar.addEventListener("click",()=>{
        for (const campo of [edad,nombre,apellidos]) {
            campo.classList.add("error");
            campo.classList.remove("correcto");   
        }

    })
    /*botones pie*/
    function botonesCerrar(mensaje) {
        let boton=document.createElement("button");
        boton.textContent=mensaje;
        boton.classList.add("cerrar");
        pie.appendChild(boton);
        return boton;
    }
    botonWeb.addEventListener("click",(event)=>{
        if(document.getElementById("cerrarWeb")==undefined){
            let ventana=window.open();
            ventana.location="http://daw207.ieslossauces.es/";
            /*Crear boton cerrar*/
            let cerrar=botonesCerrar("Cerrar web");
            cerrar.setAttribute("id","cerrarWeb");
            cerrar.addEventListener("click",(event)=>{
                ventana.close;
                pie.removeChild(event.target);
            });
        }else{
            "hola";
        }
    });
    botonDOM.addEventListener("click",(event)=>{
        if(document.getElementById("cerrarDOM")==undefined){
            cuadroDOM.style.display="block";
            cuadroDOM.textContent=document.head.innerHTML;
            cuadroDOM.textContent+=document.body.innerHTML;
            /*Crear boton cerrar*/
            let cerrar=botonesCerrar("Cerrar DOM");
            cerrar.setAttribute("id","cerrarDOM");
            cerrar.addEventListener("click",(event)=>{
                cuadroDOM.style.display="none";
                pie.removeChild(event.target);
            });
        }
    });
    botonInformacion.addEventListener("click",(event)=>{
        if(document.getElementById("cerrarInfo")==undefined){
            cuadroInformacion.style.display="block";
            cuadroInformacion.innerHTML=`<p><strong>Número de parafos ${document.getElementsByTagName("p").length}<p>`;
            cuadroInformacion.innerHTML+=`<p><strong>Numeros de Botones</strong> ${document.getElementsByTagName("button").length}<p>`;
            cuadroInformacion.innerHTML+=`<p><strong>Numero de divs</strong> ${document.getElementsByTagName("div").length}<p>`;
            cuadroInformacion.innerHTML+=`<p><strong>Ancho Ventana</strong> ${window.screenX}<p>`;
            cuadroInformacion.innerHTML+=`<p><strong>Alto ventana</strong> ${window.screenY}<p>`;
            cuadroInformacion.innerHTML+=`<p><strong>Numero de paginas en el historial</strong> ${history.length}<p>`;
            cuadroInformacion.innerHTML+=`<p><strong>Version del navegador</strong> ${navigator.userAgent}<p>`;
            cuadroInformacion.innerHTML+=`<p><strong>Motor del navegador</strong> ${navigator.product}<p>`;
            cuadroInformacion.innerHTML+=`<p><strong>Idioma de navegador</strong> ${navigator.language}<p>`;
            /*Crear boton cerrar*/
            let cerrar=botonesCerrar("Cerrar Información");
            cerrar.setAttribute("id","cerrarInfo");
            cerrar.addEventListener("click",(event)=>{
                cuadroInformacion.style.display="none";
                pie.removeChild(event.target);
                cuadroInformacion.innerHTML="";
            });
        }
    });

}