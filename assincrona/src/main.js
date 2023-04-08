class User {
    name;
    age;
    weight;
    login;
    password;

    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
}

async function getCats() {
    const resp = await fetch("https://cat-fact.herokuapp.com/facts");
    return await resp.json();
}

async function getCatsData() {
    let aux = getCats();
    console.log(aux);
}

function getUser(login, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (login === "raphael@gmail.com" && password === "123") {
                resolve(new User("Raphael", 25, 80));
            } else {
                reject("Login ou senha inválidos")
            }
        }, 1000);
    });
}

async function getUserInfo(login, password) {
    /* getUser(login, password)
        .then(resp => {
            let el = document.createElement('p');
            el.textContent = JSON.stringify(resp);
            document.body.appendChild(el);
        }).catch( error => {
            let el = document.createElement('p');
            el.textContent = error;
            el.style.color = "red";
            document.body.appendChild(el);
        }) */

    try {
        let resp = await getUser(login, password);

        let el = document.createElement('p');
        el.textContent = JSON.stringify(resp);
        document.body.appendChild(el);
    } catch (error) {
        let el = document.createElement('p');
        el.textContent = error;
        el.style.color = "red";
        document.body.appendChild(el);

    }

    /* let user = await getUser();
    let el = document.createElement('p');
    el.textContent = JSON.stringify(user);
    document.body.appendChild(el); */
}