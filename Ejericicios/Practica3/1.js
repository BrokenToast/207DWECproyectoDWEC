//Sin arrays
var frase=prompt("Introduce una frase");
var copiFrase;
copiFrase=frase[0].toUpperCase();
for (let i=1;i<frase.length;i++) {
    if(frase[i]==" "&&frase[i+1]!=" "){
        copiFrase+=frase[i];
        copiFrase+=frase[i+1].toUpperCase();
        i++;
    }else{
        copiFrase+=frase[i];
    }
}
document.write(`<p>${copiFrase}</p>`);
