// Podemos selecionar con get o con query
let section1=document.getElementById('s1');
console.log(section1.getElementsByTagName('p')[0]);
let titulo=document.getElementsByClassName("titulo");
//selectores css
// La direfencia enetre SelectorAll  y s
let parafo=document.querySelectorAll("section>p")[0];
console.log(section1.getAttribute("id"));
parafo.setAttribute("class","parrafos");
console.log(parafo.getAttribute("class"));
parafo.setAttribute("class","holi");
console.log(parafo.getAttribute("class"));
parafo.toggleAttribute("autor")//Este metodo que si el atributo existe lo elimina y si no existe lo añade. Lo unico es que no añade valor de atributo.
console.log(parafo.hasAttribute("autor"));
let listaAtributos= parafo.attributes;
for (const atributo of listaAtributos) {
    console.log(atributo.nodeName+" | "+atributo.nodeValue);
}
parafo.removeAttribute("class");
parafo.textContent="<strong>holiiiiiiiiiiii</strong>"; // Cambiar conteniedo de una un elemento no interpresa etiquetas HTML
parafo.innerHTML="<strong>adiosss</strong>"; // Cambiar conteniedo de una un elemento, interpreta las etiquetas HTML(Solo esta en manipulación de documentos HTML)
console.log(parafo.firstChild);

//modifcar CSS de elementos.
parafo.style.color="red";
parafo.style['color']="green";
