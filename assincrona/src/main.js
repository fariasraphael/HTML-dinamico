class User {
    name;
    age;
    weight;

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

function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new User("Raphael", 25, 80));
        }, 1000);
    });
}

async function getUserInfo(params) {
    getUser()
        .then(resp => {
            let el = document.createElement('p');
            el.textContent = JSON.stringify(resp);
            document.body.appendChild(el);
        })
    /* let user = await getUser();
    let el = document.createElement('p');
    el.textContent = JSON.stringify(user);
    document.body.appendChild(el); */
}

/* continua em 37:37 */