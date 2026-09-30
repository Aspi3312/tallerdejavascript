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
function crearPerfil(nombreUsuario, edadUsuario, ocupacionUsuario) {
    if (nombreUsuario === "" || nombreUsuario === null) {
        return "Error: El nombre no puede estar vacío.";
    }
    return `Hola, ${nombreUsuario}. Tienes ${edadUsuario} años y eres un/a ${ocupacionUsuario}.`;
}

const mensajePerfil = crearPerfil(nombre, edad, ocupacion);
console.log(mensajePerfil);

// Paso 5: 

// 1. Creamos un Array vacío
const hobbies = [];

// 2. Usamos un bucle 'for' para pedir 3 hobbies y agregarlos con .push()
for (let i = 1; i <= 3; i++) {
    const hobby = prompt(`Ingresa tu hobby #${i}:`);
    if (hobby) {
        hobbies.push(hobby);
    }
}

// 3. Recorremos el Array con el método forEach() y mostramos cada uno en consola
console.log("Lista de Hobbies:");
hobbies.forEach((hobby, indice) => {
    console.log(`${indice + 1}. ${hobby}`);
});