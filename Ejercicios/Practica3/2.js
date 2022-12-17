var text=prompt("Introduce el texto a cifrar");
var post=parseInt(prompt("Introduce las posiciones del cifrado"));
var cifrado="";
while(isNaN(post)){
    alert("Nos es un numero");
    var post=parseInt(prompt("Introduce las posiciones del cifrado"));
}
for (const key in text) {
    var cifrado=cifrado+String.fromCodePoint(key.charCodeAt()+post);
}
document.write(cifrado);