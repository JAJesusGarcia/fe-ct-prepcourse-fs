function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:

  // Eliminamos los espacios en blanco y convertimos los strings a minúsculas para evitar problemas de comparación
  var str1Procesado = str1.toLowerCase().replace(/\s/g, '');
  var str2Procesado = str2.toLowerCase().replace(/\s/g, '');

  // Verificamos si la longitud de los strings es la misma
  if (str1Procesado.length !== str2Procesado.length) {
    return false;
  }

  // Convertimos los strings en arrays de caracteres, los ordenamos y los convertimos nuevamente a strings
  var str1Ordenado = str1Procesado.split('').sort().join('');
  var str2Ordenado = str2Procesado.split('').sort().join('');

  // Comparamos los strings ordenados
  return str1Ordenado === str2Ordenado;

}

module.exports = esAnagrama;
