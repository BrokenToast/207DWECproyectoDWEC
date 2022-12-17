function comprobacionRandom(cantidad=1000) {
    const mNumeros=new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0]]);
    for (let index =0; index <cantidad; index++) {
        let numeroRandom=parseInt(Math.random()*10+1);
        mNumeros.set(numeroRandom,mNumeros.get(numeroRandom)+1);    
    }
    return mNumeros;
}
for (const [numero,cantidad] of comprobacionRandom(10000)) {
    document.write(`${numero}|${cantidad}<br>`);
}
    