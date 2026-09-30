// 2: Recopilación de Datos y Tipos de Variables

// 1. Pedimos el nombre (usamos 'const' porque el nombre no va a cambiar)
const nombre = prompt("Ingresa tu nombre completo:");

// 2. Pedimos la edad (usamos 'let' porque su valor va a cambiar/reasignarse)
let edad = prompt("Ingresa tu edad:");

// 3. Pedimos la ocupación (usamos 'const' porque no cambiará en esta sesión)
const ocupacion = prompt("Ingresa tu ocupación:");

// 4. Reasignación: Pedimos confirmar la edad sobreescribiendo la variable 'edad'
edad = prompt("Ingresa de nuevo tu edad para confirmarla:");

// Comprobación en la consola
console.log("Nombre:", nombre);
console.log("Edad reasignada:", edad);
console.log("Ocupación:", ocupacion);