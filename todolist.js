let tarea = document.getElementById ('input');
//tarea trae todo el nodo de tipo input//
let lista = document.getElementById ('listas_de_tareas');
//lista genera una lista donde se ubican todas las tareas ingresadas//

function agregarTarea () {
  let elementosHtml = `<li class="tarea" id="tarea"> ${tarea.value}
<button id="btnEliminar" class="boton" onclick="eliminarTarea(event)">Eliminar</button>
</li>`;
  lista.innerHTML += elementosHtml;
}

function eliminarTarea (event) {
  let botonSeleccionado = event.target;
  botonSeleccionado.parentElement.remove ();
}

//aplicar contador para probar eliminar taria(boton del input)//
