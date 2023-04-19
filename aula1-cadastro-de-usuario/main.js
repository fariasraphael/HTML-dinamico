let form = document.querySelector("form");
let buttonSubmit = document.getElementById("button-submit");

function addAndRemoveClass(element, classToAdd, ClassToRemove) {
    element.classList.add(classToAdd);
    element.classList.remove(ClassToRemove);
}

function formSubmited(evt) {
    evt.preventDefault();
    console.log(evt);

    let name = evt.target[0];
    let age = evt.target[1];
    let email = evt.target[2];

    console.log(name);
    console.dir(name);
    console.log(age);
    console.log(email);

    let errorMesseges = document.getElementsByClassName("text-danger");

    if (name.value === "") {
        name.className = "input-error";
        addAndRemoveClass(errorMesseges[0], "d-block", "d-none");
    }
    if (age.value === "") {
        age.className = "input-error";
        addAndRemoveClass(errorMesseges[1], "d-block", "d-none");
    }
    if (email.value === "") {
        email.className = "input-error";
        addAndRemoveClass(errorMesseges[2], "d-block", "d-none");
    }

}

form.addEventListener("submit", formSubmited);