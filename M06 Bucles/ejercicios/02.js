function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:


  if(booleano1 === true && booleano2 === true) {
    return true;
  } else return false;

// otra forma de resolverlo en una sola linea de codigo
// return booleano1 && booleano2;


}

module.exports = esVerdaderoYFalso;
