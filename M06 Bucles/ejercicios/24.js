function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  let resultado = ""

  resultado = texto.split("").reverse().join("");

  return resultado;


}

module.exports = invertirTexto;