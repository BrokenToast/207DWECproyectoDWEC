function Fibonacci(actual,anterior) {
    return parseInt(actual)+parseInt(anterior);
}
function CantidadNumeroFibonacci(cantidad) {
    if(!isNaN(cantidad)){
        const aNumeros=[0,1];
        for (let i = 0; i <= cantidad-3; i++) {
            aNumeros.push(Fibonacci(aNumeros[i+1],aNumeros[i]));
        }
        return aNumeros;
    }else{
        return "Error, no es un numero";
    }
}
function CantidadNumeroFibonacciRecursiva(cantidad,almacen=[0,1]){
        if(!isNaN(cantidad)){
            if(cantidad>=4){
                almacen=CantidadNumeroFibonacciRecursiva(cantidad-1,almacen);
            }
            almacen.push(Fibonacci(almacen[almacen.length-1],almacen[almacen.length-2]));
            return almacen;
        }
}
console.log(CantidadNumeroFibonacci(10));
console.log(CantidadNumeroFibonacciRecursiva(10));