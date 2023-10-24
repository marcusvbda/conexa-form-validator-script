document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    console.log("INIT force-input-required.js");
    let forms = document.getElementsByTagName("form");
    console.log("forms", forms);
    for (var i = 0; i < forms.length; i++) {
      let form = forms[i];
      let inputs = form.getElementsByTagName("input");
      console.log("inputs", forms);
      for (var j = 0; j < inputs.length; j++) {
        let input = inputs[j];
        input.setAttribute("required", "true");
        input.setAttribute("processed-validator-script", "true");
      }
    }
  }, 3000);
});
