/*Botones*/
let boton1 = document.getElementById("tabla1_boton")
let boton2 = document.getElementById("tabla2_boton")
let boton3 = document.getElementById("tabla3_boton")
let boton4 = document.getElementById("tabla4_boton")
let boton5 = document.getElementById("tabla5_boton")
let boton6 = document.getElementById("tabla6_boton")
/*Tablas*/
let tabla1 = document.getElementById("tabla1")
let tabla2 = document.getElementById("tabla2")
let tabla3 = document.getElementById("tabla3")
let tabla4 = document.getElementById("tabla4")
let tabla5 = document.getElementById("tabla5")
let tabla6 = document.getElementById("tabla6")
/*evento botones tablas*/
boton1.addEventListener('click', function(){
    tabla1.style.display = 'block';
    tabla2.style.display = 'none';
    tabla3.style.display = 'none';
    tabla4.style.display = 'none';
    tabla5.style.display = 'none';
    tabla6.style.display = 'none';
})
boton2.addEventListener('click', function(){
    tabla1.style.display = 'none';
    tabla2.style.display = 'block';
    tabla3.style.display = 'none';
    tabla4.style.display = 'none';
    tabla5.style.display = 'none';
    tabla6.style.display = 'none';
    })
boton3.addEventListener('click', function(){
    tabla1.style.display = 'none';
    tabla2.style.display = 'none';
    tabla3.style.display = 'block';
    tabla4.style.display = 'none';
    tabla5.style.display = 'none';
    tabla6.style.display = 'none';
})    
boton4.addEventListener('click', function(){
    tabla1.style.display = 'none';
    tabla2.style.display = 'none';
    tabla3.style.display = 'none';
    tabla4.style.display = 'block';
    tabla5.style.display = 'none';
    tabla6.style.display = 'none';
    })
boton5.addEventListener('click', function(){
    tabla1.style.display = 'none';
    tabla2.style.display = 'none';
    tabla3.style.display = 'none';
    tabla4.style.display = 'none';
    tabla5.style.display = 'block';
    tabla6.style.display = 'none';
})
boton6.addEventListener('click', function(){
    tabla1.style.display = 'none';
    tabla2.style.display = 'none';
    tabla3.style.display = 'none';
    tabla4.style.display = 'none';
    tabla5.style.display = 'none';
    tabla6.style.display = 'block';
    })