function getFactCats(amount, animal_type) {
    return fetch(`https://cat-fact.herokuapp.com/facts/random?amount=${amount}&animal_type=${animal_type}`)
        .then(resp => resp.json()
        );
}

async function submitForm() {
    let amount = document.getElementById("amount").value;
    let animal_type = document.getElementById("type").value;

    getFactCats(amount, animal_type)
        .then((resp) => {
            console.log(resp);
            let pre = document.createElement('pre');
            let code = document.createElement('code');
            code.innerText = JSON.stringify(resp, undefined, 2);
            pre.append(code);
            document.body.appendChild(pre);
        });


    /* console.log(amount, animal_type);

    let result = await getFactCats(amount, animal_type);

    console.log(result); */
}
/* continua em 1:44 */