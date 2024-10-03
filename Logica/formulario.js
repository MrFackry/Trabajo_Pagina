// Obtener los elementos del formulario
let nombre = document.getElementById("primer_nombre");
let segundoNombre = document.getElementById("segundo_nombre");
let apellido = document.getElementById("primer_apellido");
let segundoApellido = document.getElementById("segundo_apellido");
let correo = document.getElementById("correo");
let numero = document.getElementById("numero"); 
let programa = document.getElementById("programa");

// Expresiones regulares
const expreciones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    segundoNombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
    segundoApellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    numero: /^\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/ 
};

// Eventos input para validacion en tiempo real
nombre.addEventListener('input', validarNombre);
segundoNombre.addEventListener('input', validarSegundoNombre);
apellido.addEventListener('input', validarApellido);
segundoApellido.addEventListener('input', validarSegundoApellido);
correo.addEventListener('input', validarCorreo);
numero.addEventListener('input', validarNumero);

// Funciones de validacion individual
function validarNombre() {
    if (!expreciones.nombre.test(nombre.value)) {
        nombre.style.border = "3px solid red";
    } else {
        nombre.style.border = "3px solid green";
    }
}

function validarSegundoNombre() {
    if (!expreciones.segundoNombre.test(segundoNombre.value)) {
        segundoNombre.style.border = "3px solid red";
    } else {
        segundoNombre.style.border = "3px solid green";
    }
}

function validarApellido() {
    if (!expreciones.apellido.test(apellido.value)) {
        apellido.style.border = "3px solid red";
    } else {
        apellido.style.border = "3px solid green";
    }
}

function validarSegundoApellido() {
    if (!expreciones.segundoApellido.test(segundoApellido.value)) {
        segundoApellido.style.border = "3px solid red";
    } else {
        segundoApellido.style.border = "3px solid green";
    }
}

function validarCorreo() {
    if (!expreciones.correo.test(correo.value)) {
        correo.style.border = "3px solid red";
    } else {
        correo.style.border = "3px solid green";
    }
}

function validarNumero() {
    if (!expreciones.numero.test(numero.value)) {
        numero.style.border = "3px solid red";
    } else {
        numero.style.border = "3px solid green";
    }
}

// Evento de envio del formulario
document.querySelector('form').addEventListener('submit', function(event) {
    if (!validar()) {
        event.preventDefault();  // Evita el envio del formulario si hay errores
        alert("hay campos faltantes o mal dligenciados")
    } else {
        alert('Formulario enviado exitosamente');
    }
});

// Función de validacion final para el envio del formulario
function validar() {
    let esValido = true;
    if (!expreciones.nombre.test(nombre.value)) esValido = false;
    if (!expreciones.segundoNombre.test(segundoNombre.value)) esValido = false;
    if (!expreciones.apellido.test(apellido.value)) esValido = false;
    if (!expreciones.segundoApellido.test(segundoApellido.value)) esValido = false;
    if (!expreciones.correo.test(correo.value)) esValido = false;
    if (!expreciones.numero.test(numero.value)) esValido = false;
    if (programa.value === "none") esValido = false;

    return esValido;
}

