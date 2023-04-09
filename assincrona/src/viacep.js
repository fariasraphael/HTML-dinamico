function getAddress(cep) {
    return fetch(`https://viacep.com.br/ws/${cep}/json/`).then(resp => resp.json());
}



async function serachAddressByCEP() {
    let cep = document.getElementById("cep").value;

    try {
        let address = await getAddress(cep);

        document.querySelector('#logradouro').value = address.logradouro;
        document.querySelector('#bairro').value = address.bairro;
        document.querySelector('#uf').value = address.uf;

    } catch (e) {
        let span = document.createElement('span');
        span.style.display = "block";
        span.style.color = 'red';
        span.style.fontSize = '8px';
        span.innerHTML = "cep não encontrado"
        document.querySelector('.search').appendChild(span);

        console.error(e);
    }
}

// async function serachAddressByCEP() {
//     let cep = document.getElementById("cep").value;

//     try {
//         let address = await getAddress(cep);

//         let form = document.getElementsByTagName("form")[0];

//         let formData = new FormData(form);
//         formData.set("logradouro", address.logradouro);
//         formData.set("bairro", address.bairro);
//         formData.set("uf", address.uf);

//     } catch (e) {
//         console.error(e);
//     }
// }



// async function serachAddressByCEP() {
//     let cep = document.getElementById("cep").value;

//     let address = await getAddress(cep);

//     let pre = document.createElement('pre');
//     let code = document.createElement('code');
//     code.innerText = JSON.stringify(address, undefined, 2);
//     pre.append(code);
//     document.body.appendChild(pre);
// }








// function serachAddressByCEP() {
//     let cep = document.getElementById("cep").value;



    // getAddress(cep).then((resp => {
    //     let pre = document.createElement('pre');
    //     let code = document.createElement('code');
    //     code.innerText = JSON.stringify(resp, undefined, 2);
    //     pre.append(code);
    //     document.body.appendChild(pre);
    // }));  com o then, onde dentro da estrutura then mostra o 
    //que será feito depois que o servidor retorna com os dados do cep
    //a função nao precisa ser async
//}