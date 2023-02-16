// Comenzamos todo el proceso cuando la página se haya cargado completamente
window.addEventListener("load",comienzo);

// Función contenedora de todos los procedimientos
function comienzo() {
	//Selección de algunos de los elementos del DOM que necesitaremos
	var listadoTemas; //variable que podéis utilizar para almacenar el archivo json
	let botonDescargar = document.getElementById("descargar_temas");//boton para descargar los temas
	let botonQueDibujo = document.getElementById("que_dibujo");//botón ¿Qué dibujo?
	let selector = document.getElementById("temas");//Desplegable con los temas
	let dibAle = document.getElementById("dibujo_aleatorio");//Celda donde escribiremos el dibujo aleatorio

	let tamLienzo = document.getElementById("tam_lienzo");//Input donde ponemos el tamaño del lienzo
	let botonCrearLienzo = document.getElementById("crear_lienzo");//Botón Crear Lienzo
	let botonBorrar = document.getElementById("borrar");//Botón borrar
	let zonaDibujo = document.getElementById("dibujo");//Tabla en la que vamos a crear el lienzo
	let pincel = document.getElementById("pincel");//Celda donde pondremos el estado del pincel: ACTIVADO O DESACTIVADO
	let paleta = document.getElementById("paleta");//Fila que tiene la paleta de colores. Un color en cada
	var pincelActivo = false;//Variable booleana que guarda el estado del pincel 
	var colorSelecionado=paleta.children[0];
	
	function selectColor(event) {
		colorSelecionado.classList.remove("seleccionado");
		colorSelecionado=event.target;
		colorSelecionado.classList.add("seleccionado");
	}
	function crearLienzo() {
		for (let x = 0; x < tamLienzo.value; x++) {
			var fila=document.createElement("tr");
			fila.classList.add("fila");
			for (let y = 0; y < tamLienzo.value; y++) {
				let columna = document.createElement("td");
				columna.classList.add("celda");
				columna.addEventListener("mouseover",pintar);
				fila.appendChild(columna);
			}
			zonaDibujo.appendChild(fila);
		}
		botonCrearLienzo.removeEventListener("click",crearLienzo)
	}
	botonCrearLienzo.addEventListener("click",crearLienzo);
	for (const color of paleta.children) {
		color.addEventListener("click",selectColor);
	}
	function pincelActivado() {
		if(pincelActivo){
			pincelActivo=false;
			pincel.innerHTML="Pincel desactivado";
		}else{
			pincelActivo=true;
			pincel.innerHTML="Pincel activado";
		}
	}
	function pintar(event) {
		if(pincelActivo){
			event.target.setAttribute("class", `celda ${colorSelecionado.classList[0]}`);
		}	
	}
	zonaDibujo.addEventListener("click",pincelActivado);
	function borar() {
		for (const element of zonaDibujo.querySelectorAll(".color1,.color2,.color3,.color4,.color5")) {
			element.classList.remove("color1");
			element.classList.remove("color2");
			element.classList.remove("color3");
			element.classList.remove("color4");
			element.classList.remove("color5");
		}
	}
	botonBorrar.addEventListener("click",borar);
}

