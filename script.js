const hasErros = (field) => {
    const value = field.value;
    const name = field.name;
    if (!value) true;
    return false;
}

const validateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const fields = form.querySelectorAll('input');
    let errors = [];
    fields.forEach((field) => {
		console.log(field);
        const fieldError = hasErrors(field);
        if (fieldError) {
            errors.push(field);
        }
    });
//     if (errors.length === 0) {
//         form.submit();
//     } else {
        alert("Por favor preencha o formulário corretamente");
//     }
}

document.addEventListener("DOMContentLoaded", () => {
	console.log("Init form validator");
    document.addEventListener("submit", validateForm);
});
