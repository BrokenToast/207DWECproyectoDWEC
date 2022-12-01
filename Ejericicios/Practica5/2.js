function cleanWord(word) {
    word=word.replace(/[áàä]/ig,"a");
    word=word.replace(/[éèë]/ig,"e");
    word=word.replace(/[íìï]/ig,"i");
    word=word.replace(/[óòö]/ig,"o");
    word=word.replace(/[ùúü]/ig,"u");
    word=word.replace(/\s/ig,"");
    return word;
}
function comparadorAngrama(word1,word2) {
    var aLetras=word1.split("");
    var acheck=word2.split("");
        for (const letra of aLetras) {
            if(acheck.indexOf(letra)==-1){
                return false;    
            }else{
                acheck.splice(acheck.indexOf(letra),1);
            }
        }
    return  true;
}
function anagrama(word1="hola",word2="hola") {
    word1=cleanWord(word1);
    word2=cleanWord(word2);
    if(word1.length!=word2.length){
        var es=false;
    }else{
        var es=comparadorAngrama(word1,word2);
    }
    (es)?document.write("Es un anagrama"):document.write("No es un anagrama");
}
var word1=prompt("Introduce un palabra");
var word2=prompt("Introduce otra palabra");
var aPalabras=[];
while(word1!="" && word1!=null){
    aPalabras.push([word1,word2]);
    word1=prompt("Introduce un palabra");
    word2=prompt("Introduce otra palabra");
}
for (const [palabra1,palabra2] of aPalabras) {
    document.write(`${palabra1}/${palabra2} <br>`);
    anagrama(palabra1,palabra2);
    document.write("<br>")
}

