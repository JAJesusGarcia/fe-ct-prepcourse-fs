function deEuroAdolar(euro) {
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:

  // Definimos el valor de conversión de euro a dólar
  var tasaDeConversion = 1.20;
  
  // Calculamos el valor en dólares
  var dolares = euro * tasaDeConversion;
  
  // Retornamos el valor en dólares
  return dolares;

}

module.exports = deEuroAdolar;
