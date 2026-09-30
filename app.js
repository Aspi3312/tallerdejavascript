// Paso 2: Recopilación de datos
const nombre = prompt("Ingresa tu nombre completo:");
let edadInput = prompt("Ingresa tu edad:");
const ocupacion = prompt("Ingresa tu ocupación:");

// Paso 3: 
const edad = parseInt(edadInput, 10);

if (isNaN(edad)) {
    alert("Por favor, ingresa un número válido para la edad.");
    throw new Error("El valor de edad ingresado no es un número válido.");
} else if (edad < 18) {
    alert("Acceso denegado: Debes ser mayor de 18 años para crear un perfil.");
    throw new Error("El usuario es menor de edad.");
}

// Paso 4: 

// 1. Definimos la función que recibe tres parámetros
function crearPerfil(nombreUsuario, edadUsuario, ocupacionUsuario) {
    // Verificamos con === que el nombre no esté vacío o sea nulo
    if (nombreUsuario === "" || nombreUsuario === null) {
        return "Error: El nombre no puede estar vacío.";
    }

    
    return `Hola, ${nombreUsuario}. Tienes ${edadUsuario} años y eres un/a ${ocupacionUsuario}.`;
}

// 2. Llamamos a la función guardando su retorno en una variable
const mensajePerfil = crearPerfil(nombre, edad, ocupacion);

// 3. Mostramos el resultado en la consola
console.log(mensajePerfil);