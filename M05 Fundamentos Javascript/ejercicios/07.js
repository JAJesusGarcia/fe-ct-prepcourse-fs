function esTipoDato(valor) {
  // La función recibe un argumento "valor".
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:


 var tipoDeDato = typeof valor

  console.log(esTipoDato);
  return tipoDeDato;

  // return typeof valor;
  // es exactamente lo mismo pero se va mas bonito




}

module.exports = esTipoDato;