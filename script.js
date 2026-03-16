let botonAgregar = document.getElementById('boton-añadir');
let botonLimpiar = document.getElementById('boton-limpiar');
let tarea = document.getElementById('tarea');
let lista = document.getElementById('lista-tareas');

function agregarTarea(){
    let texto = tarea.value;

    if(texto === ""){
        alert("Escribe una tarea");
        return;
    }

    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = texto;
    nuevaTarea.style.textAlign = 'center';
    nuevaTarea.style.fontFamily = 'cursive';
    nuevaTarea.style.fontSize = '35px';
    nuevaTarea.style.backgroundColor = 'orange';

    lista.appendChild(nuevaTarea);
    tarea.value = "";
}

function limpiarLista(){
    lista.innerHTML = "";
}

botonAgregar.addEventListener('click',agregarTarea);
botonLimpiar.addEventListener('click', limpiarLista);