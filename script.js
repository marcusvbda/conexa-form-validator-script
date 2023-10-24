document.addEventListener("DOMContentLoaded",  () => {
    console.log("INIT force-input-required.js");
    let forms = document.getElementsByTagName("form");
    console.log("forms", forms);
    for (var i = 0; i < forms.length; i++) {
      let form = forms[i];
      let inputs = form.getElementsByTagName("input");
      for (var j = 0; j < inputs.length; j++) {
        let input = inputs[j];
        input.setAttribute("required", "true");
      }
    }
});
