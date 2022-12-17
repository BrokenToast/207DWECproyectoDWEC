let exp=/^((5[0-2])|([0-4][0-9]))[0-9]{3}$/;
let codigo=prompt('Introduce el codigo postal');
while (!exp.test(codigo)) {
    alert('El codigo postal es erroneo');
    codigo=prompt('Introduce el codigo postal');
}
document.write(`Tu codigo postal es ${codigo}`);
