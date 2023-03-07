<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="./doc/logo_tostada.ico" type="image/x-icon">
    <link rel="stylesheet" href="./webroot/style/reset.css">
    <link rel="stylesheet" href="./webroot/style/style.css">
    <title>JavaScript</title>
</head>
<body>
    <header>
        <h1>Desarrollo Web en Entorno Cliente</h1>
    </header>
    <nav>
        <label for="open">Menu</label>
        <input type="radio" name="menu" id="open">
        <input type="radio" name="menu" id="close" checked>
        <input type="radio" name="submenu" id="openPractica1" checked>
        <input type="radio" name="submenu" id="openPractica2">
        <input type="radio" name="submenu" id="openPractica3">
        <input type="radio" name="submenu" id="openPractica4">
        <input type="radio" name="submenu" id="openPractica5">
        <input type="radio" name="submenu" id="openPractica6">
        <input type="radio" name="submenu" id="openPractica7">
        <input type="radio" name="submenu" id="openPractica8">
        <input type="radio" name="submenu" id="openPractica9">
        <input type="radio" name="submenu" id="openPractica10">
        <input type="radio" name="submenu" id="openGranja">
        <input type="radio" name="submenu" id="openExamen">
        <ul>
            <li>
                <label for="close">Salir</label>
            </li>
            <hr>
            <li>
                <label for="openPractica1">Practica 1</label>
            </li>
            <li>
                <label for="openPractica2">Practica 2</label>
            </li>
            <li>
                <label for="openPractica3">Practica 3</label>
            </li>
            <li>
                <label for="openPractica4">Practica 4</label>
            </li>
            <li>
                <label for="openPractica5">Practica 5</label>
            </li>
            <li>
                <label for="openPractica6">Practica 6</label>
            </li>
            <li>
                <label for="openPractica7">Practica 7</label>
            </li>
            <li>
                <label for="openPractica8">Practica 8</label>
            </li>
            <li>
                <label for="openPractica9">Practica 9</label>
            </li>
            <li>
                <label for="openPractica10">Practica 10</label>
            </li>
            <li>
                <a href="./Ejercicios/Granja/vista/index.html">Granaja</a>
            </li>
            <li>
                <label for="openExamen">Examen</label>
            </li>
        </ul>
        <?php
            $aEjercicios=[
                [
                    ["1.Crea una página web que muestre un color de fondo aleatorio cada vez que entremos en ella.","Ejercicios/Practica1/1.html","Ejercicios/Practica1/mostrar1.php"],
                    ["2.Crea un script, que pida al usuario un número. Indicar al usuario si lo que ha introducido, es un número o no, y si es un número, decir si es par o no y si es primo o no.","Ejercicios/Practica1/2.html","Ejercicios/Practica1/mostrar2.php"],
                    ["3.Crea un script que pida la edad y el sexo de 10 personas y muestre por pantalla finalmente informaciónde cada persona en un único mensaje.","Ejercicios/Practica1/3.html","Ejercicios/Practica1/mostrar3.php"],
                    ["4.Crea un script que lea números enteros hasta que el usuario introduzca un número 0. Finalmente debe mostrar el número máximo, el mínimo y la media de todos ellos. Debes de controlar que introduzca números y no cualquier otro carácter.","Ejercicios/Practica1/4.html","Ejercicios/Practica1/mostrar4.php"],
                    ["5.Crea un script que permita validar una clave introducida por el usuario y tenga 3 intentos para introducirla bien. Si no la introduce bien, le da error y se sale del programa. La clave debe ser un número de 6 dígitos","Ejercicios/Practica1/5.html","Ejercicios/Practica1/mostrar5.php"],
                    ["6.Crea un script que calcule las calificaciones de un grupo de alumnos. El profesor tendrá que introducir el número de alumnos que va a gestionar el script.","Ejercicios/Practica1/6.html","Ejercicios/Practica1/mostrar6.php"],
                    ["7.Escribe un script que muestre por pantalla los múltiplos de 2 que hay entre dos números que pides al usuario. El segundo número tiene que ser mayor o igual que el primer número.","Ejercicios/Practica1/7.html","Ejercicios/Practica1/mostrar7.php"],
                    ["8.Escribe un script que calcule la suma de los números pares y los números impares de los números comprendidos entre 1 y 100. El 1 y el 100 no se tienen en cuenta.","Ejercicios/Practica1/8.html","Ejercicios/Practica1/mostrar8.php"],
                    ["9.Escribe un script que calcule la suma de los números pares y la suma de los números impares comprendidos entre dos números que le pides al usuario. Es decir, el usuario introduce por ejemplo el 45 y el 89 y debes de mostrar la suma de los números pares comprendidos entre el 45 y el 89 y por otro lado la suma de los números impares. No contar extremos, es decir, el 45 y el 89 en este caso no se tienen en cuenta.","Ejercicios/Practica1/9.html","Ejercicios/Practica1/mostrar9.php"]
                ],
                [
                    ["1.Realiza un script que implemente un juego de encontrar un número aleatorio bajo las siguientes condiciones","Ejercicios/Practica2/1.html","Ejercicios/Practica2/mostrar1.php"],
                    ["2.Crea una aplicación web que pida al usuario un número entero positivo y dibuje triángulos con tantos asteriscos como haya indicado el usuario con el número introducido. Un ejemplo de ejecución sería el siguiente:","Ejercicios/Practica2/2.html","Ejercicios/Practica2/mostrar2.php"],
                    ["3.Crea una página web que pida al usuario números hasta que el usuario pulse el botón cancelar. Se debe comprobar si lo que inserta el usuario es un número o no. Al finalizar se debe mostrarla suma de todos los números introducidos y en el caso de que se hayan insertado caracteres no numéricos, mostrar también todos los caracteres que se han introducido.","Ejercicios/Practica2/3.html","Ejercicios/Practica2/mostrar3.php"],
                    ["4.Crea una página que muestre los primeros 10000 símbolos de la tabla Unicode. Se mostrará en una tabla en la que en cada fila se indica el número de código, seguido del carácter de ese código. En cada fila se mostrarán 10 símbolos. Un posible ejemplo de ejecución sería","Ejercicios/Practica2/4.html","Ejercicios/Practica2/mostrar4.php"],
                    ["5.Crea una aplicación web que muestre 2000 cuadrados de color aleatorio de 50x50 píxeles. Su posición en la pantalla será también aleatoria. Ejemplo de resultado","Ejercicios/Practica2/5.html","Ejercicios/Practica2/mostrar5.php"],
                ],
                [
                    ["1.Crea un script que pida una frase al usuario y se la muestre con la primera letra de cada palabra en mayúsculas.","Ejercicios/Practica3/1.html","Ejercicios/Practica3/mostrar1.php"],
                    ["2.Crea un script para cifrar mensajes al estilo César. Este cifrado consiste en desplazar cada letra del mensaje tantas posiciones como nos diga una clave. Por ejemplo, la letra A desplazada con clave 2, se convertiría en C. La aplicación pedirá al usuario un mensaje y una clave y a continuación mostrará al usuario el mensaje cifrado el cual se generará desplazando los caracteres de la tabla Unicode el número que indique la clave.","Ejercicios/Practica3/2.html","Ejercicios/Practica3/mostrar2.php"],
                    ["3.Queremos realizar una aplicación web que pida al usuario un nombre y una contraseña. El nombre de usuario solo puede estar formado por letras minúsculas y números, de otro modo, indicaremos el error y pediremos de nuevo el nombre. Loque validaremos de la contraseña es que al menos tenga un elemento de los siguientes","Ejercicios/Practica3/3.html","Ejercicios/Practica3/mostrar3.php"],
                    ["4.Crea una aplicación que pida palabras al usuario hasta que pulse el botón cancelar. Después aparecerá un menú de opciones","Ejercicios/Practica3/4.html","Ejercicios/Practica3/mostrar4.php"],
                    ["5.Crear una aplicación que dibuje en pantalla el tablero del juego hundir la flota. Tiene que dibujaraleatoriamente en el tablero","Ejercicios/Practica3/5.html","Ejercicios/Practica3/mostrar5.php"],
                ],
                [
                    ["1.Crea una función que muestre números de la serie de Fibonacci. La función recibirá como parámetro el número de elementos de la serie que queremos que muestre. Este dato se lo solicitaremos al usuario. Debes crear dos funciones para resolver este problema, una recursiva y otra iterativa.","Ejercicios/Practica4/1.html","Ejercicios/Practica4/mostrar1.php"],
                    ["2.Crea una función que reciba un array de palabras. La función devolverá un mapa que contenga como clave cada palabra y el valor es el número de veces que esa palabra aparece en el array. Haremos una página web que lea palabras hasta que el usuario cancele o deje el cuadro vacío y mostraremos las repeticiones de las palabras.","Ejercicios/Practica4/2.html","Ejercicios/Practica4/mostrar2.php"],
                    ["3.Crear una función para comprobar hasta que punto la función Math.random() es realmente aleatoria. La función recibirá un parámetro que por defecto será 10000. Ese, será el número de veces que generaremos números aleatorios del 1 al 10. Aunque el ejercicio se puede resolver con arrays, utiliza un mapa donde las claves serán los números del 1 al 10 y los valores, el número de veces que aparece.","Ejercicios/Practica4/3.html","Ejercicios/Practica4/mostrar3.php"],
                    ["4.Crear una aplicación web que muestre un mapa del popular juegos buscaminas en el que aparezcan las minas dibujadas y también que se indique en las Casillas sin minas, las minas que hay alrededor. Hacerlo de forma modular de manera que dividamos la aplicación en una serie de funciones. Concretamente recomendaremos","Ejercicios/Practica4/4.html","Ejercicios/Practica4/mostrar4.php"],
                ],
                [
                    ["1.Crea una función para detectar palíndromos. La función recibirá un texto y devolverá verdadero o falso en función de si el texto es o no es palíndromo. Hay que tener en cuenta que se deben ignorar los signos de puntuación, espacios, interrogaciones, paréntesis, etc., también se ignoran tildes y diéresis y no se distingue entre mayúsculas y minúsculas.","Ejercicios/Practica5/1.html","Ejercicios/Practica5/mostrar1.php"],
                    ["2.Crea una función para detectar anagramas. Un anagrama es una palabra que resulta de transponer las letras de otra, por ejemplo: “SENTIDO” y “DESTINO”. La función recibirá como mínimo dos palabras, aunque puede recibir más y devolverá verdadero o falso en función de si las palabras son anagramas de las mismas letras.","Ejercicios/Practica5/2.html","Ejercicios/Practica5/mostrar2.php"],
                    ["3Crea un script que pida al usuario su fecha de nacimiento y le diga el día de la semana en que nació y el día de la semana de todos sus cumpleaños hasta este año..","Ejercicios/Practica5/3.html","Ejercicios/Practica5/mostrar3.php"],
                    ["4.Crea una función que reciba como parámetros: día, mes, año, hora, minutos y segundos y cree una fecha con esos datos. Si la función no recibe ningún parámetro creará la fecha actual. La función mostrará un alert con la información en el siguiente formato:","Ejercicios/Practica5/4.html","Ejercicios/Practica5/mostrar4.php"],
                    ["5.Crea un script que pida al usuario un mes y un año y muestre un calendario de ese mes.","Ejercicios/Practica5/5.html","Ejercicios/Practica5/mostrar5.php"],
                    ["6.Crea un script que pida al usuario un mes y devuelva todas las personas que cumplan años en ese mes. Los datos de las personas las tendremos en un mapa que generaremos de forma aleatoria. El mapa contendrá 100 pares clave valor, donde las claves serán números consecutivos y los valores fechas de nacimiento generadas aleatoriamente entre el 01/01/1980 y el 31/12/2020.","Ejercicios/Practica5/6.html","Ejercicios/Practica5/mostrar6.php"],
                    ["7.Crea un script que valide un código postal (formado por 5 números del 00000 al 52999).","Ejercicios/Practica5/7.html","Ejercicios/Practica5/mostrar7.php"],
                    ["8.Crea un script para validar que un documento recibido tenga formato pdf o docx.","Ejercicios/Practica5/8.html","Ejercicios/Practica5/mostrar8.php"],
                    ["9.Crea una aplicación web que sirva para validar NIFs indicando si es correcto o no. Un NIF consta de una posible primera letra que puede ser X, Y o Z. Si no tiene letra llevará un número. A continuación, habrá 7 números más.","Ejercicios/Practica5/9.html","Ejercicios/Practica5/mostrar9.php"],
                ],
                [
                    ["1.aaa","Ejercicios/Practica6/1.html","Ejercicios/Practica6/mostrar1.php"],
                    ["2.aaa","Ejercicios/Practica6/2.html","Ejercicios/Practica6/mostrar2.php"],
                ],
                [
                    ["1.En editores como Visual Studio Code, que tienen el módulo Emmetincorporado, se pueden crear párrafos con  el  texto  clásico  de  pruebas “Lorem ipsum...”.  Si  estando  en  el  bodyde  una  nueva  página  web escribimos ol>li*9>loremy luego pulsamos el tabulador, se crearán 9 párrafos numerados con el texto en cuestión. Una vez creados los párrafos, el ejercicio consistirá en pedir al usuario un texto y un número del 1 al 10 para la posición de ese texto. El texto introducido se mostrará en negrita y en la posición indicada sin eliminar ninguno de los párrafos anteriores. Se debe controlar que el usuario introduzca datos válidos. Si el usuario cancela, la aplicación no hace nada.","Ejercicios/Practica7/1.html","Ejercicios/Practica7/mostrar1.php"],
                    ["2.Genera  una  página  con  mucho  contenido.  Por  ejemplo,  con p*50>lorem600seguido  de  tabulador. Preguntaremos al usuario que velocidad de scroll desea hacerentre suave, normal o rápido y dependiendo de la elección delusuario se hará scroll en la página a una velocidad más rápida o más lenta.","Ejercicios/Practica7/2.html","Ejercicios/Practica7/mostrar2.php"],
                    ["3.Crea una web  con contenido. Crea una  aplicación que pida una palabra  al usuario y marque dentro del texto, todas lasapariciones de esa palabra.Para ello se aconseja la creación de dos funciones.","Ejercicios/Practica7/3.html","Ejercicios/Practica7/mostrar3.php"],
                    ["4.Creauna páginaque muestre una lista de palabras(unas 10).Laspalabras irán apareciendo de una en una cadasegundo.Pasados 3 segundos, le preguntaremos al usuario si quiere que la lista de palabras aparezca ordenadaalfabéticamente. Si acepta la sugerencia, reordena las palabras.","Ejercicios/Practica7/4.html","Ejercicios/Practica7/mostrar4.php"],
                    ["5.Crear dentro de vuestra aplicación final,un reloj con la hora actualdonde los números serán imágenes o gifssacados de internet.","Ejercicios/Practica7/5.html","Ejercicios/Practica7/mostrar5.php"],
                ],
                [
                    ["1.Crea una página web con bastantes párrafos. Haz que en cada movimiento de ratón sobre la página, un pequeño cartel con fondo amarillo y el texto “TE SIGO”, siga al cursor del usuario.","Ejercicios/Practica8/1.html","Ejercicios/Practica8/mostrar1.php"],
                    ["2.Crea una página web que tenga un texto que indique que al pulsar alt+F12, podremos colocar una imagen de fondo. El texto tiene que salir centrado. La idea es qué inicialmente aparezca una pantalla negra con el texto y hasta que el usuario no pulse la tecla, la imagen no se muestre.","Ejercicios/Practica8/2.html","Ejercicios/Practica8/mostrar2.php"],
                    ["3.Crear una aplicación web que muestre una capa centrada que ocupe el 50% del ancho y el alto de la ventana.","Ejercicios/Practica8/3.html","Ejercicios/Practica8/mostrar3.php"],
                    ["4.Crea una aplicación web que muestre el texto: velocidad 0. Si pulsamos la tecla de la flecha hacia arriba del teclado, la velocidad se incremente en 1. Si es la flecha hacia abajo, la velocidad baja en 1. La velocidad no puede sobrepasar los 120 ni descender de cero. Experimenta con los eventos de teclado(keyup, keydown y keypress) para investigar cuál es el más apropiado en este caso.","Ejercicios/Practica8/4.html","Ejercicios/Practica8/mostrar4.php"],
                    ["5.Crea una capa que ocupe el 50% del ancho y el alto de la ventana y que en ella se muestre una gran cantidad de texto a la que podemos acceder mediante las barras de desplazamiento. Cuando hayamos conseguido llegar al final del desplazamiento, se mostrará un botón con el texto “Cerrar”. Haciendo clic en él, se elimina la capa anterior.","Ejercicios/Practica8/5.html","Ejercicios/Practica8/mostrar5.php"],
                    ["6.Crea una aplicación que muestre dos capas del mismo tamaño concretamente 200 píxeles de ancho por 100 de alto. La primera capa mostrará el texto “Soy arrastrable” y tendrá fondo amarillo y la segunda muestra “Soy el destino” y tiene fondo blanco. Ambas dejan un borde de un píxel negro. la aplicación permite arrastrar la primera sobre la segunda. Durante el arrastre, la primera capa se mostrará con una opacidad del 50%. Al arrastrar sobre la segunda, esta (el destino) se muestra con fondo rojo. Al soltar en esa segunda capa, la primera desaparece y en la segunda aparecerá el texto “¡Lo has logrado!”.","Ejercicios/Practica8/6.html","Ejercicios/Practica8/mostrar6.php"],
                    ["7.Crea una aplicación con esta apariencia inicial:","Ejercicios/Practica8/7.html","Ejercicios/Practica8/mostrar7.php"],
                    ["8.Crea una aplicación web con esta apariencia aproximada:","Ejercicios/Practica8/8.html","Ejercicios/Practica8/mostrar8.php"],
                    ["9.Crea una aplicación web con la apariencia siguiente","Ejercicios/Practica8/9.html","Ejercicios/Practica8/mostrar9.php"],
                ],
                [
                    ["Catalogo de musica","Ejercicios/Practica9/catalogoMusica.html","Ejercicios/Practica9/mostrar1.php"],
                ],
                [
                    ["Uso de una api rest","Ejercicios/Practica10/index_repaso.html","Ejercicios/Practica10/mostrar1.php"],
                ],
                [
                    ["1.aaaa","Examenes/1evaluacion/1.html","Examenes/1evaluacion/mostrar1.php"],
                    ["2.aaaa","Examenes/1evaluacion/2.html","Examenes/1evaluacion/mostrar2.php"],
                    ["3.aaaa","Examenes/1evaluacion/3.html","Examenes/1evaluacion/mostrar3.php"],
                    ["4.aaaa","Examenes/1evaluacion/4/main.html","Examenes/1evaluacion/mostrar4.php"],
                    ["5.aaaa","Examenes/1evaluacion/5.html","Examenes/1evaluacion/mostrar5.php"],
                ],
            ];
            foreach($aEjercicios as $aEjercicio){
                ?><table class="submenu">
                    <tr>
                        <th>Enunciado</th>
                        <th>Pagina</th>
                        <th>Ver codigo</th>
                    </tr>    
                <?php
                foreach($aEjercicio as $aEnunciado){
                    ?> 
                    <tr>
                        <td><?php print $aEnunciado[0];?></td>
                        <td><a href="<?php print $aEnunciado[1];?>"><img src="./doc/play.png"></a></td>
                        <td><a href="<?php print $aEnunciado[2];?>"><img src="./doc/mostrar_codigo.png"></a></td>
                    </tr>
                    <?php
                }
                ?> 
                </table> 
                <?php
            }
        ?>
    </nav>
    <main>
        <div>
            <h2>Documentacion JavaScript</h2>
            <iframe src="./doc/JavaScript.html" title="Iframe Example"></iframe>
            <a href="https://es.javascript.info/">Documentacion Oficial</a>
        </div>
    </main>
    <footer>
        <p>Luis Pérez Astorga® 2022-2023</p>
        <a href="../index.html"><img src="./doc/logo_tostada.png" alt="Web Creador" width="50" height="50"></a>
        <a href="https://github.com/BrokenToast/207DWECproyectoDWEC"><img src="./doc/git.png" alt="Github del proyecto" width="50" height="50"></a>
    </footer>
</body>
</html>