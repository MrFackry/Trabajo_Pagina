// Obtener los elementos del formulario
const nombre = document.getElementById("primer_nombre");
const segundoNombre = document.getElementById("segundo_nombre");
const apellido = document.getElementById("primer_apellido");
const segundoApellido = document.getElementById("segundo_apellido");
const correo = document.getElementById("correo");
const numero = document.getElementById("numero");
const programa = document.getElementById("programa");
const grupo = document.getElementById("grupo_Investigacion");

// Expresiones regulares
const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    segundoNombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    segundoApellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    numero: /^\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
};

// Eventos input para validación en tiempo real
nombre.addEventListener('input', validarNombre);
segundoNombre.addEventListener('input', validarSegundoNombre);
apellido.addEventListener('input', validarApellido);
segundoApellido.addEventListener('input', validarSegundoApellido);
correo.addEventListener('input', validarCorreo);
numero.addEventListener('input', validarNumero);
programa.addEventListener('input', validarPrograma);
grupo.addEventListener('input', validarGrupo);

// Funciones de validaciOn individual
function validarNombre() {
    if (!expresiones.nombre.test(nombre.value)) {
        nombre.style.border = "3px solid red";
    } else {
        nombre.style.border = "3px solid green";
    }
}

function validarSegundoNombre() {
    if (!expresiones.segundoNombre.test(segundoNombre.value)) {
        segundoNombre.style.border = "3px solid red";
    } else {
        segundoNombre.style.border = "3px solid green";
    }
}

function validarApellido() {
    if (!expresiones.apellido.test(apellido.value)) {
        apellido.style.border = "3px solid red";
    } else {
        apellido.style.border = "3px solid green";
    }
}

function validarSegundoApellido() {
    if (!expresiones.segundoApellido.test(segundoApellido.value)) {
        segundoApellido.style.border = "3px solid red";
    } else {
        segundoApellido.style.border = "3px solid green";
    }
}

function validarCorreo() {
    if (!expresiones.correo.test(correo.value)) {
        correo.style.border = "3px solid red";
    } else {
        correo.style.border = "3px solid green";
    }
}

function validarNumero() {
    if (!expresiones.numero.test(numero.value)) {
        numero.style.border = "3px solid red";
    } else {
        numero.style.border = "3px solid green";
    }
}

function validarPrograma() {
    if (programa.value === "none") {
        programa.style.border = "3px solid red";
    } else {
        programa.style.border = "3px solid green";
    }
}

function validarGrupo() {
    if (grupo.value === "none") {
        grupo.style.border = "3px solid red";
    } else {
        grupo.style.border = "3px solid green";
    }
}

// Evento de envIo del formulario
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el envIo por defecto del formulario

    if (!validar()) {
        alert("Hay campos faltantes o mal diligenciados");
    } else {
        // Capturar los datos del formulario
        const data = {
            primer_nombre_estudiante: nombre.value,
            segundo_nombre_estudiante: segundoNombre.value,
            primer_apellido_estudiante: apellido.value,
            segundo_apellido_estudiante: segundoApellido.value,
            correo_estudiante: correo.value,
            telefono_estudiante: numero.value,
            id_programa_estudiante: programa.value,
            id_grupo_estudiante: grupo.value
        };

        console.log('Datos capturados:', {
            primer_nombre_estudiante: nombre.value,
            segundo_nombre_estudiante: segundoNombre.value,
            primer_apellido_estudiante: apellido.value,
            segundo_apellido_estudiante: segundoApellido.value,
            correo_estudiante: correo.value,
            telefono_estudiante: numero.value,
            id_programa_estudiante: programa.value,
            id_grupo_estudiante: grupo.value
        });

        // Enviar los datos al backend
        fetch('/api/estudiantes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert('Formulario enviado exitosamente');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el formulario');
        });
    }
});

// Función de validaciOn final para el envío del formulario
function validar() {
    let esValido = true;
    if (!expresiones.nombre.test(nombre.value)) esValido = false;
    if (!expresiones.segundoNombre.test(segundoNombre.value)) esValido = false;
    if (!expresiones.apellido.test(apellido.value)) esValido = false;
    if (!expresiones.segundoApellido.test(segundoApellido.value)) esValido = false;
    if (!expresiones.correo.test(correo.value)) esValido = false;
    if (!expresiones.numero.test(numero.value)) esValido = false;
    if (programa.value === "none") esValido = false;
    if (grupo.value === "none") esValido = false;
    return esValido;
}
