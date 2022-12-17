const words=[];
let long=0,wordsLong;
let min=20,wordMin;
let ok=true;
do{
    var palabra=null;
    palabra=prompt("Introduce una palabra");
    if(palabra!=null){
        words.push(palabra);
        if(palabra.length>long){
            long=palabra.length;
            wordsLong=palabra;
        }else if(palabra.length<long){
            min=palabra.length;
            wordMin=palabra;
        }
    }
}while(palabra!=null);
do{
switch (prompt('1)Ver primera palabra insertada\n2)Ver última palabra insertada\n3)Ver todas las palabras\n4)Ver la palabra más larga\n5)Ver la palabra más corta\n6)Número de palabras insertadas\n7)Buscar una palabra\n8)Borrar duplicados\n9)Salir',9)) {
    case "1":
        alert(words[0]);
        break;
    case "2":
        alert(words[words.length-1]);
        break;
    case "3":
        alert(words.toString());
        break;
    case "4":
        alert(wordLong);
        break;
    case "5":
        alert(wordMin);
        break;
    case "6":
        alert(`La cantidad de palabras insertadas es de ${words.length}`);
        break;
    case "7":
        let word=prompt("Introduce la palabra a buscar");
        alert(`La palabra esta en la posición ${words.indexOf(word)}`);
        break;
    case "8": 
        for (i=0;i<words.length;i++){
            if(i>words.lastIndexOf[words[i]]){
                words.pop(words[i]);
            }
        }
        break;
    case "9":
        alert("Adios");
        ok=false;
        break;
    default:
        alert("Esa opción no existe");
        break;
}
}while(ok);