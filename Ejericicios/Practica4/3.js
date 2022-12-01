function comprobacionRandom(cantidad=1000) {
    const mNUMEROS=new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0]]);
    for (let index =0; index <cantidad; index++) {
        let numeroRandom=parseInt(Math.random()*10+1);
        mNUMEROS.set(numeroRandom,mNUMEROS.get(numeroRandom)+1);    
    }
    return mNUMEROS;
}
function rankingRandom(cantidadTest) {
    const mNUMEROSRANKING=new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0]]);    
    for (let index = 0; index < cantidadTest; index++) {
        const mNUMEROS=comprobacionRandom(1000000);
        let maxKey=0;
        let maxValue=0;
        for (const [key,value] of mNUMEROS) {
            if(value>maxValue){
                maxValue=value;
                maxKey=key;
            }
        }
        mNUMEROSRANKING.set(maxKey,mNUMEROSRANKING.get(maxKey)+1);
    }
    return mNUMEROSRANKING
}
console.log(rankingRandom(100));