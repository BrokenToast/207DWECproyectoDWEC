function dniValido(nif="T00000000T") {
    let expNif=/^(([XYZ])|([0-9]))[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/g;
    if(!expNif.test(nif)){
        return false;
    }
    switch (nif[0]) {
        case 'X':
            nif=nif.replace(/^X/,'0');
            break;
        case 'Y':
            nif=nif.replace(/^Y/,'1');
        break;
        case 'Z':
            nif=nif.replace(/^Z/,'2');
            break;
    }
    let cadena='TRWAGMYFPDXBNJZSQVHLCKE';
    let letra=nif[8];
    nif=parseInt(nif.replace(/[TRWAGMYFPDXBNJZSQVHLCKE]/,''));
    if(cadena.charAt((nif%23))==letra ){
        return true;
    }else{
        alert(nif);
        return false;
    }
}
let nif=prompt('Introduce el NIF');
while (!dniValido(nif)) {
    alert('Formato incorrector de NIF');
    nif=prompt('Introduce el NIF');
}
document.write(`El ${nif} es valido`);
