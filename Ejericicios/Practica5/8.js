let exp=/\.[(docx)(pdf)]$/;
let archivo=prompt('Introduce el nombre del archivo');
while (!exp.test(archivo)) {
    alert('El archivo no es formato pdf o docx');
    archivo=prompt('Introduce el nombre del archivo');
}
document.write(`Tu archivo es ${archivo}`);