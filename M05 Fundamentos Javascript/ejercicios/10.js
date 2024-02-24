function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  // if (fecha) {
  //   // Si la fecha no es un valor válido, retornamos false
  //   return false;
  // } else {
  //   // Si la fecha es un valor válido, retornamos true
  //   return true;
  // }

  if (Object.prototype.toString.call(fecha) === "[object Date]" && !isNaN(fecha)) {
    // Si la fecha es un objeto Date y no es NaN, entonces es válida
    return true;
  } else {
    // Si no cumple con las condiciones anteriores, la fecha no es válida
    return false;
  }

}

module.exports = esFechaValida;