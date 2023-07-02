const formulario = document.getElementById ('formulario');
formulario.addEventListener ('submit', function enviar (e) {
  e.preventDefault ();
  let formData = new FormData (formulario);
  let contraseña = formData.get ('contraseña');
  let email = formData.get ('email');
  console.log ('contraseña', contraseña);
  console.log ('email', email);
  validarEmail (email);
});

const validarEmail = email => {
  if (email.length === 0) {
    document.getElementById ('error_email').innerHTML =
      '*El email es requerido';
  } else if (existeEsteCaracter (email, '@') == false) {
    document.getElementById ('error_email').innerHTML =
      '*El email debe tener un caracter "@"';
  } else {
    document.getElementById ('error_email').innerHTML = '';
  }

  // ------>> Para redireccionarme al to do list si cumple los requisitos//
  window.location.href = 'todolist.html';
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
