let imagenes = [
    {
        "url": "/Trabajo_Pagina/vista/imagenes/sede.jpg",
        "nombre": "Tecnologia en Programacion",
        "descripcion": "Busca formar profesionales capaces de diseñar, desarrollar, implementar y mantener aplicaciones de software. El plan de estudios suele abarcar una amplia gama de conocimientos y habilidades."

    },
    {
        "url": "/Trabajo_Pagina/vista/imagenes/Programacion.jpg",
        "nombre": "Destacando el Futuro de la Tecnología",
        "descripcion": "Sé parte de la revolución tecnológica. Forma parte de una carrera en constante evolución y aprende las habilidades necesarias para construir el futuro de la programación."

    },
    {
        "url": "/Trabajo_Pagina/vista/imagenes/sedeP.jpg",
        "nombre": "Un mundo de posibilidades",
        "descripcion": " La programación te abre las puertas a un sinfín de oportunidades. Desde el desarrollo web hasta la inteligencia artificial, las posibilidades son infinitas."

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0  // Índice de la imagen actualmente mostrada
posicionCarrusel()

// Agregamos un evento de clic al botón "Atrás"
atras.addEventListener('click', function(){
    // Decrementamos el índice de la imagen actual
    actual -=1
 // Si el índice es negativo, lo ajustamos al final del arreglo
    if (actual == -1){
        actual = imagenes.length - 1
    }
     // Actualizamos la imagen y el texto
    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}
