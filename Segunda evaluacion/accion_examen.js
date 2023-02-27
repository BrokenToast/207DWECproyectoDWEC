window.addEventListener("load",examen);
function examen(){
    var provincias=new Map();
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
    let botonEnviar=document.getElementById("enviar");
    let captcha=document.getElementById("captcha");
    let formulario=document.getElementById("formulario");
    let botonWeb=document.getElementById("btnweb");
    let botonDOM=document.getElementById("btndom");
    let botonInformacion=document.getElementById("btninfo");
    let cuadroDOM=document.getElementById("DOM");
    let cuadroInformacion=document.getElementById("informacion");
    let pie=document.getElementById("pie");

    var validarNombre=/^\w{3,}/;
    var validarApellidos=/^\w{2,}\s\w{2,}/;
    var validarEdad=/^(10\d|110)|^(\d{1,2})$/;

   
    function vNombre(event) {
        if(validarNombre.test(event.target.value)){
                event.target.classList.remove("error");
                event.target.classList.add("correcto");
        }else{
                event.target.classList.remove("correcto");
                event.target.classList.add("error");
        }
    }
    function vApellidos(event) {
        if(validarApellidos.test(event.target.value)){
            event.target.classList.add("correcto");
            event.target.classList.remove("error");
        }else{
            event.target.classList.remove("correcto");
            event.target.classList.add("error");
        }
    }
    function vEdad(event) {
        if(validarEdad.test(event.target.value)){
            event.target.classList.add("correcto");
            event.target.classList.remove("error");
        }else{
            event.target.classList.remove("correcto");
            event.target.classList.add("error");
        }
    }
    function selecionarProvincias(event) {
        if(comunidades.value!=0){
            let aProviencias=provincias.get(comunidades.value);
            for (const provin of aProviencias) {
                provincia.innerHTML+=`<option value="${provin}" >${provin}</option>`;
            }
        }
    }
    function enviar(event) {
        event.preventDefault()
        if(nombre.classList.contains("correcto") && apellidos.classList.contains("correcto") && edad.classList.contains("correcto")){
            if(comunidades.value!=0 && provincia.value!=0){
                captcha.style.display="block"
            }else{
                alert("Provincia o comunidad no selecionada");
            }
        }else{
            alert("Algun apartado es erronero(Error de formato)");
        }
    }
    nombre.addEventListener("keyup",vNombre);
    apellidos.addEventListener("keyup",vApellidos);
    edad.addEventListener("keyup",vEdad);
    comunidades.addEventListener("change",selecionarProvincias);
    botonEnviar.addEventListener("click",enviar);

    botonWeb.addEventListener("click",()=>{
        ventanaMiaaa=window.open("","",'width=1000,height="500"')
        ventanaMiaaa.location="http://daw207.ieslossauces.es/";
        cerrarWeb=document.createElement("button");
        cerrarWeb.classList.add("cerrar");
        cerrarWeb.textContent="Cerrar Web";
        cerrarWeb.addEventListener("click",(event)=>{
            ventanaMiaaa.close();
            pie.removeChild(event.target);
        });
        pie.appendChild(cerrarWeb);
    })

    botonDOM.addEventListener("click",()=>{
            cuadroDOM.style.display="block";
            cuadroDOM.textContent=document.head.innerHTML;
            cuadroDOM.textContent+=document.body.innerHTML;
            cerrarDom=document.createElement("button");
            cerrarDom.classList.add("cerrar");
            cerrarDom.textContent="Cerrar DOM";
            cerrarDom.addEventListener("click",(event)=>{
                cuadroDOM.style.display="none";
                pie.removeChild(event.target);
            });
            pie.appendChild(cerrarDom);
    })
    botonInformacion.addEventListener("click",()=>{
            cuadroInformacion.style.display="block";
            cuadroInformacion.innerHTML=`<p>Número de parafos ${document.getElementsByTagName("p").length}<p>`;
            cuadroInformacion.innerHTML+=`<p>Numeros de Botones ${document.getElementsByTagName("button").length}<p>`;
            cuadroInformacion.innerHTML+=`<p>Numero de divs ${document.getElementsByTagName("div").length}<p>`;
            cuadroInformacion.innerHTML+=`<p>Ancho Ventana ${window.screenX}<p>`;
            cuadroInformacion.innerHTML+=`<p>Alto ventana ${window.screenY}<p>`;
            cuadroInformacion.innerHTML+=`<p>Numero de paginas en el historial ${history.length}<p>`;
            cuadroInformacion.innerHTML+=`<p>Version del navegador ${navigator.userAgent}<p>`;
            cuadroInformacion.innerHTML+=`<p>Motor del navegador ${navigator.product}<p>`;
            cuadroInformacion.innerHTML+=`<p>Idioma de navegador ${navigator.language}<p>`;
            cerrarInfo=document.createElement("button");
            cerrarInfo.classList.add("cerrar");
            cerrarInfo.textContent="Cerrar DOM";
            cerrarInfo.addEventListener("click",(event)=>{
                cuadroInformacion.style.display="none";
                pie.removeChild(event.target);
            });
            pie.appendChild(cerrarInfo);
    })
    let objetoArastrado;
    sol1.addEventListener("drag",(event)=>{
        objetoArastrado=event.target;
        
    });
    sol2.addEventListener("drag",(event)=>{
        objetoArastrado=event.target;
    });
    sol3.addEventListener("drag",(event)=>{
        objetoArastrado=event.target;
    });

}