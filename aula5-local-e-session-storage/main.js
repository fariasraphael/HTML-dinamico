let form = document.forms[0];
form.addEventListener("input", (e) => {
    let formData = new FormData(form);

    /* sessionStorage.setItem("name", formData.get("name"));
    sessionStorage.setItem("email", formData.get("email"));
    sessionStorage.setItem("password", formData.get("password")); */

let user_form_data = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
};

console.log('dados para string:', JSON.stringify(user_form_data));

sessionStorage.setItem("user_form_data", JSON.stringify(user_form_data));

});


document.onmouseenter = (e) => {
    let data_form = JSON.parse(sessionStorage.getItem("user_form_data"));
    
    console.log(data_form);

    let inputName = document.getElementById("name")
    let inputEmail = document.getElementById("email")
    let inputPassword = document.getElementById("password")

    inputName.value = data_form.name;
    inputEmail.value = data_form.email;
    inputPassword.value = data_form.password;
    
    /* inputName.value = sessionStorage.getItem("name")
    inputEmail.value = sessionStorage.getItem("email")
    inputPassword.value = sessionStorage.getItem("password") */
}
