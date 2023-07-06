const formulario = document.getElementById ('formulario');
formulario.addEventListener ('submit', function enviar (e) {
  e.preventDefault ();
  let formData = new FormData (formulario); //FormData es una forma de recopilar y enviar datos de un formulario HTML mediante JavaScript
  let contraseña = formData.get ('contraseña'); //obtener el valor de un campo específico en el formulario.
  let email = formData.get ('email');
  console.log ('contraseña', contraseña);
  console.log ('email', email);
  validarEmail (email);
  window.location.href = 'todolist.html';
});

const validarEmail = email => {
  if (email.length === 0) {
    document.getElementById ('error_email').innerHTML =
      '*El email es requerido';
  } else if (existeEsteCaracter (email, '@') == false) {
    document.getElementById ('error_email').innerHTML =
      '*Falta el caracter "@"';
  } else {
    document.getElementById ('error_email').innerHTML = '';
  }
};

function existeEsteCaracter (cadenaAnalizar, caracterIngresado) {
  for (let i = 0; i < cadenaAnalizar.length; i++) {
    let caracter = cadenaAnalizar.charAt (i);
    if (caracter == caracterIngresado) {
      return true;
    }
  }

  return false;
}
