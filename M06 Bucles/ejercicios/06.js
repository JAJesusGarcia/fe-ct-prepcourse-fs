function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:


  if (num.toString().length === 3) return true;
  else return false;


}

module.exports = tieneTresDigitos;

//como puedo saber si un numero tiene tres digitos?
// toString es un método de objeto string
// .length calcula la longitud