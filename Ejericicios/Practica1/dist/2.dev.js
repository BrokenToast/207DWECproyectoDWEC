"use strict";

var num = prompt("Introduce un numero");
var cant = 0;

if (isNaN(num)) {
  alert("No es un numero, ni es primo y no es impar");
} else {
  if (num % 2 != 0) {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        ++cant;
      }
    }

    if (cant == 0) {
      alert("Si es un numero, tambien es primo y no es impar");
    } else {
      alert("Si es un numero,no es primo y no es impar");
    }
  } else {
    alert("Si es un numero,no es primo y si es impar");
  }
}