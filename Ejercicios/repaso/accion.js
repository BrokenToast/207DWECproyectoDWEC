/*Funciones para validar*/
function validarAlfabetico(texto) {
    let patron=/^[a-zñáéíóúàèìòù\s]+$/gi;
    return patron.test(texto)
}
function validarEmail(email) {
    let patron=/^[a-zñáéíóúàèìòù]+@[a-zñáéíóúàèìòù]+\.[a-zñáéíóúàèìòù]+$/gi;
    return patron.test(email);
}
function validarNIF(nif="T00000000T") {
    let expNif=/^(([XYZ])|([0-9]))[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/g;
    if(!expNif.test(nif)){
        return false;
    }
    switch (nif[0]) {
        case 'X':
            nif=nif.replace(/^X/,'0');
            break;
        case 'Y':
            nif=nif.replace(/^Y/,'1');
        break;
        case 'Z':
            nif=nif.replace(/^Z/,'2');
            break;
    }
    let cadena='TRWAGMYFPDXBNJZSQVHLCKE';
    let letra=nif[8];
    nif=parseInt(nif.replace(/[TRWAGMYFPDXBNJZSQVHLCKE]/,''));
    if(cadena.charAt((nif%23))==letra ){
        return true;
    }else{
        return false;
    }
}
/*Funciones Eventos*/
var  formulario=document.forms[0];
let  btenviar=formulario.elements.namedItem("enviar");
let cNombre=formulario.elements.namedItem('nombre');
let cApellido=formulario.elements.namedItem('apellidos');
let cEmail=formulario.elements.namedItem('email');
let cNif=formulario.elements.namedItem('NIF');
function validarcNombre(event) {
    if(validarAlfabetico(event.target.value)){
        event.target.classList.add('verde');
        todoOk();
    }else{
        event.target.classList.remove('verde');
    }
}
function validarcApellidos(event) {
    if(validarAlfabetico(event.target.value)){
        event.target.classList.add('verde');
        todoOk();
    }else{
        event.target.classList.remove('verde');
    }
}
function validarcCorreo(event) {
    if(validarEmail(event.target.value)){
        event.target.classList.add('verde');
        todoOk();
    }else{
        event.target.classList.remove('verde');
    }
}
function validarcNif(event) {
    if(validarNIF(event.target.value)){
        event.target.classList.add('verde');
        todoOk();
    }else{
        event.target.classList.remove('verde');
    }
}
function todoOk() {
    if(cNombre.classList.contains("verde") && cNif.classList.contains("verde") && cEmail.classList.contains("verde") && cNif.classList.contains("verde")){
        btenviar.removeAttribute("disabled");
    }
}
function enviar(event) {
    event.preventDefault();
    document.getElementById("mensaje").style.display="block";
    setTimeout(()=>{
        document.getElementById("mensaje").style.display="none";
        cNombre.classList.remove("verde");
        cApellido.classList.remove("verde");
        cEmail.classList.remove("verde");
        cNif.classList.remove("verde");
        cNombre.value="";
        cApellido.value="";
        cEmail.value="";
        cNif.value="";
        btenviar.setAttribute("disabled");
    },4000)
}
cNombre.addEventListener("keyup",validarcNombre);
cApellido.addEventListener("keyup",validarcApellidos);
cEmail.addEventListener("keyup",validarcCorreo);
cNif.addEventListener("keyup",validarcNif);
btenviar.addEventListener("click",enviar);

