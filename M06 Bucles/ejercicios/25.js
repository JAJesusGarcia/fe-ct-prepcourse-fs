function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

    // Eliminamos los espacios en blanco y convertimos el string a minúsculas para evitar problemas de comparación
    var stringProcesado = string.toLowerCase().replace(/\s/g, '');

    // Invertimos el string para luego compararlo con el original y ver si son iguales
    var stringInvertido = stringProcesado.split('').reverse().join('');
  
    // Comparamos el string original con el invertido
    return stringProcesado === stringInvertido;

}

module.exports = esPalindromo;
