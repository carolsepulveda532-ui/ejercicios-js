let nombre = "Carol"
let edad = 27;
let esEstudiante = true;



console.log("Hola, mi nombre es " + nombre + ", tengo " + edad + " años y soy estudiante: " + esEstudiante);
console.log("edad", edad ) ;
console.log("Es estudiante:", esEstudiante);

let sinValor;
let valorNulo = null;
 
console.log("Sin valor:", sinValor);   // undefined
console.log("Valor nulo:", valorNulo); // null


//INGRESO DE DATOS POR TECLADO


// Ejercicio 1
let anioNacimiento = prompt("¿En qué año naciste?");
let edadCalculada = 2025 - Number(anioNacimiento);
console.log("Tu edad es:", edadCalculada);
 
// Ejercicio 2
let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let suma = num1 + num2;
console.log("La suma es:", suma);
 

//CONDICIONAL IF



// Ejercicio 1
let edadUsuario = Number(prompt("¿Cuántos años tienes?"));
 
if (edadUsuario >= 18) {
  console.log("Puedes entrar");
} else {
  console.log("No puedes entrar");
}
 
// Ejercicio 2
let numero = Number(prompt("Ingresa un número:"));
 
if (numero > 0) {
  console.log("Es positivo");
} else if (numero < 0) {
  console.log("Es negativo");
} else {
  console.log("Es cero");
}
 


//BUCLE WHILE



//Ejercicio 1
let limite = Number(prompt("Ingresa un número:"));
let contador = 1;
 
while (contador <= limite) {
  console.log(contador);
  contador++;
}
 
// Ejercicio 2
let contrasena = prompt("Ingresa la contraseña:");
 
while (contrasena !== "1234") {
  contrasena = prompt("Contraseña incorrecta. Intenta de nuevo:");
}
 
console.log("Contraseña correcta");



//BUCLE FOR



//Ejercicio 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
 
// Ejercicio 2
let numeroTabla = Number(prompt("¿De qué número quieres la tabla de multiplicar?"));
 
for (let i = 1; i <= 10; i++) {
  console.log(numeroTabla + " x " + i + " = " + (numeroTabla * i));
}

