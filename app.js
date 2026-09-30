// Paso 2: Recopilación de datos
const nombre = prompt("Ingresa tu nombre completo:");
let edadInput = prompt("Ingresa tu edad:");
const ocupacion = prompt("Ingresa tu ocupación:");

// Paso 3: Conversión de tipos y validación

// 1. Convertimos el string a número entero
const edad = parseInt(edadInput, 10);

// 2. Comprobamos si la entrada es un número válido y si es mayor o igual a 18
if (isNaN(edad)) {
    alert("Por favor, ingresa un número válido para la edad.");
    throw new Error("El valor de edad ingresado no es un número válido.");
} else if (edad < 18) {
    alert("Acceso denegado: Debes ser mayor de 18 años para crear un perfil.");
    // 'throw new Error' detiene la ejecución del script inmediatamente
    throw new Error("El usuario es menor de edad.");
} else {
    console.log(`Usuario validado con éxito: ${nombre}, ${edad} años, ${ocupacion}.`);
}