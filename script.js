// Aguarde o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
  // Obtenha todos os elementos de entrada (input e select)
  var inputElements = document.querySelectorAll("input, select");

  // Percorra todos os elementos de entrada
  for (var i = 0; i < inputElements.length; i++) {
    var element = inputElements[i];

    // Defina o atributo "required" como verdadeiro
    element.setAttribute("required", "true");

    // Defina o atributo "processed-validator" como verdadeiro
    element.setAttribute("processed-validator", "true");
  }
});
