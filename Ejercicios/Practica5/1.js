var text=prompt("Introduce una palabra").toLocaleLowerCase();
while(!isNaN(text)){
    document.write("No es una palabra");
    text=prompt("Introduce una palabra");
}
text=text.replace(/[áàä]/ig,"a");
text=text.replace(/[éèë]/ig,"e");
text=text.replace(/[íìï]/ig,"i");
text=text.replace(/[óòö]/ig,"o");
text=text.replace(/[ùúü]/ig,"u");
text=text.replace(/[,\-\"\.\$%&=\?¿ç\+\*:;\s]/ig,"");

var aFrase=text.split("");
var aFraseInvertida=aFrase.slice();
aFraseInvertida.reverse();
if(aFraseInvertida.join("")==aFrase.join("")){
    document.write("Es palindromo");
}else{
    document.write("No es palindromo");
}