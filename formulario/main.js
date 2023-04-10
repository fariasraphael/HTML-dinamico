let form = document.forms[0];

/* form.onsubmit = cadastrarUsuario; */
/* form.onsubmit = function (e) {} */
/* form.onsubmit = (e) =>{}; */

form.addEventListener("submit", cadastrarUsuario);

function cadastrarUsuario(e) {
    e.preventDefault()
    if (e instanceof SubmitEvent) {
        let form = e.target;
        let data = new FormData(form);
        let aluno = new Aluno(data.get("name"), data.get("age"), data.get("height"))
        console.log(aluno);
    }
}

class Aluno {
    name;
    age;
    height;

    constructor(name, age, height) {
        this.age = age;
        this.name = name;
        this.height = height;
    }
}