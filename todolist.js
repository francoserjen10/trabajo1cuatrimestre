let tarea = document.getElementById ('input');
//tarea trae todo el nodo de tipo input//
let lista = document.getElementById ('listas_de_tareas');
//lista genera una lista donde se ubican todas las tareas ingresadas//
let check = document.getElementById ('checkbox');
//check genera una lista donde se ubican los checks seleccionados//

function agregarTarea () {
  let tareaTexto = tarea.value.trim ();

  if (tareaTexto !== '') {
    let elementosHtml = `<li class="tarea"><input type="checkbox" class="checkbox">${tareaTexto}<button class="boton" onclick="eliminarTarea(event)">Eliminar</button></li>`;
    lista.innerHTML += elementosHtml;
    tarea.value = ''; // Limpiar el input después de agregar la tarea
  }
}

function eliminarTarea (event) {
  let botonSeleccionado = event.target;
  botonSeleccionado.parentElement.remove ();
}
