function existeEsteCaracter (cadenaAnalizar, caracterIngresado) {
  for (let i = 0; i < cadenaAnalizar.length; i++) {
    let caracter = cadenaAnalizar.charAt (i);
    if (caracter == caracterIngresado) {
      return true;
    }
  }

  return false;
}
