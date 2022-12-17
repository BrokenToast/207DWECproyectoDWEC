function RankingWord(aPalabras) {
    let mPalabras=new Map();
    for (const palabra of aPalabras) {
        if(mPalabras.has(palabra)){
            mPalabras.set(palabra,mPalabras.get(palabra)+1);    
        }else{
            mPalabras.set(palabra,1);
        }
    }
    return mPalabras;
}
function mostrarRanking(mtable) {
    document.write("<table>");
    for (const [palabra,cantidad]  of mtable) {
        document.write("<tr>");
            document.write(`<td>${palabra}</td>`);
            document.write(`<td>${cantidad}</td>`);
        document.write("</tr>");
    }
    document.write("</table>");
}
function introducirPalabras() {
    const aPalabras=[];
    word=prompt("Introduce una palabra");
    while(word!=null && word!=""){
        aPalabras.push(word);
        word=prompt("Introduce una palabra");
    }
    return aPalabras;
}
mostrarRanking(RankingWord(introducirPalabras()));





