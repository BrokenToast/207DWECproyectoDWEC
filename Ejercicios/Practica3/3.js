function patronUser(texto){
    let char=true, num=false;
    for (const key of texto) {
        if(key==key.toUpperCase() && isNaN(key)){
            return false;
            break;
        }else if(!(isNaN(key))){
            num=true;
        }
    }
    return char && num;
}
function patronPassword(texto){
    let num=false,may=false,min=false,carctRa=false;
    if(texto.length>=8){
        for (const key of texto) {
            if (!(isNaN(key))){
                num=true;
            }else if(key==key.toUpperCase() && key==key.toLowerCase()){
                carctRa=true;
            }else{
                if(key==key.toUpperCase()){
                    may=true;
                }else if (key==key.toLowerCase()) {
                    min=true;
                }
            }     
        }
    }
    return num&&may&&min&&carctRa;
}
let user=prompt("Introduce un el usuario","nombre1234");
while(!(patronUser(user))){
    alert("Patron incorrecto \n Tres letras minusculas minimo \n Tres numeros minimos ");
    user=prompt("Introduce un el usuario","nombre1234");
}
let password=prompt("Introduce la contraseña");
console.log(patronPassword(password));
while(!(patronPassword(password))){
    alert("Patron incorrecto \n Una letra Mayusculas minimo\n Una letra minuscora minimo\ Un numero minimo\n Un carracter especial minimo \n Una longitud minima de 8");
    password=prompt("Introduce la contraseña");
}
document.write("Tu contraseña y usuario han sido guardados");