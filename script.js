// Aguarde o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
  console.log("INIT force-input-required.js")
  var forms = document.getElementsByTagName("form");
  for (var i = 0; i < forms.length; i++) {
    var form = forms[i];
    var inputs = form.getElementsByTagName("input");
    for (var j = 0; j < inputs.length; j++) {
      var input = inputs[j];
      console.log("inpt", input);
      input.setAttribute("required", "true");
    }
  }
});
