const palabra=["Ñu","Aguila",'Boa',"Heraclio","Elefante"];
palabra.sort((a,b)=>{
    if(a>b){
        return 1;
    }else if(a<b){
        return -1;
    }else{
        return 0;
    }
});
console.log(palabra);

palabra.sort((a,b)=>{
    if(a>b)
        return 1;
    else if(a<b)
        return -1;
    else;
        return 0;
});

//palabra.sort((a,b)=>a.localeCompare(b,es));

//forEach
palabra.forEach((valor,indice)=>console.log(valor));


// Map generea una copia de la array y le podemos pasar una funcion callback.
const numeros=[1,45,5,3,2,6,7,8,9,04,3,2]
const copyNum=numeros.map((valor)=>valor*2);
console.log(copyNum);

//Reduce nos permite declarar una valor constante a lo largo de la ejecución del reduce.
const copyNumReduce=numeros.reduce((acumulador,valor)=>acumulador+=valor);
console.log(copyNumReduce);

//Filter nos permite filtrar valores de una array(Nos devuelve una copia),
const copyNumFilter=numeros.filter((valor)=> valor>5);
console.log(copyNumFilter);