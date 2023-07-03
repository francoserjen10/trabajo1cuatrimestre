const formulario = document.getElementById ('formulario');
formulario.addEventListener ('submit', function enviar (e) {
  e.preventDefault ();
  let formData = new FormData (formulario); //FormData es una forma de recopilar y enviar datos de un formulario HTML mediante JavaScript
  let nombreApellido = formData.get ('nombreApellido'); //obtener el valor de un campo específico en el formulario.
  let email = formData.get ('email');
  let nuevaContrasena = formData.get ('contrasena');
  let contrasena = formData.get ('contrasenaRepetida');
  console.log ('nombre y apellido', nombreApellido);
  console.log ('email', email);
  console.log ('nueva contraseña', nuevaContrasena);
  console.log ('repite contraseña', contrasena);

  validarEmail (email);
  compararContraseñas (nuevaContrasena, contrasena);
});

const validarEmail = email => {
  if (email.length === 0) {
    document.getElementById ('erroresMail').innerHTML =
      '*El email es requerido';
  } else if (existeEsteCaracter (email, '@') == false) {
    document.getElementById ('erroresMail').innerHTML =
      '*Falta el caracter "@"';
  } else {
    document.getElementById ('erroresMail').innerHTML = '';
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

function compararContraseñas (nuevaContrasena, contrasena) {
  if (!nuevaContrasena && !contrasena) {
    document.getElementById ('erroresContrasena').innerHTML =
      '*Escriba contraseña';
    return false;
  }
  if (nuevaContrasena !== contrasena) {
    document.getElementById ('erroresContrasena').innerHTML =
      '*Contraseña inválida';
    return false;
  } else {
    document.getElementById ('erroresContrasena').innerHTML = '';
  }
}
