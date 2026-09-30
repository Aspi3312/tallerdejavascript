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

// Paso 5: Arrays y Bucles
const hobbies = [];

for (let i = 1; i <= 3; i++) {
    const hobby = prompt(`Ingresa tu hobby #${i}:`);
    if (hobby) {
        hobbies.push(hobby);
    }
}

// Paso 6: Objetos y Renderizado en el DOM

// 1. Agrupamos toda la información en un objeto
const perfilUsuario = {
    nombre: nombre,
    edad: edad,
    ocupacion: ocupacion,
    hobbies: hobbies
};

// 2. Seleccionamos el elemento objetivo en el HTML por su ID
const contenedorPerfil = document.getElementById("perfil-container");

// 3. Convertimos la lista de hobbies a etiquetas <li> de HTML
const listaHobbiesHTML = perfilUsuario.hobbies
    .map(hobby => `<li>${hobby}</li>`)
    .join("");

// 4. Inyectamos la estructura visual dentro del elemento usando innerHTML
contenedorPerfil.innerHTML = `
    <div style="border: 2px solid #4A90E2; padding: 20px; border-radius: 8px; max-width: 400px; font-family: sans-serif; background-color: #f9f9f9; margin-top: 15px;">
        <h2 style="color: #333; margin-top: 0;">Perfil del Usuario</h2>
        <p><strong>Nombre:</strong> ${perfilUsuario.nombre}</p>
        <p><strong>Edad:</strong> ${perfilUsuario.edad} años</p>
        <p><strong>Ocupación:</strong> ${perfilUsuario.ocupacion}</p>
        <h3 style="color: #555;">Hobbies:</h3>
        <ul>
            ${listaHobbiesHTML}
        </ul>
    </div>
`;