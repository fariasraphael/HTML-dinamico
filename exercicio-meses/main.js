function converteNumeroEmMeses(numero) {
    let months = {
        1: "jan",
        2: "fev",
        3: "mar",
        4: "abr",
        5: "mai",
        6: "jun",
        7: "jul",
        8: "ago",
        9: "set",
        10: "out",
        11: "nov",
        12: "dez",
    };
        return months[numero];
    }

    let button = document.querySelector("[converteNumeroEmMeses]");

    button.onclick = (e) =>{
        let numeroDoMes = document.getElementById("mes").value;

        let p = document.createElement('p');
        p.textContent = `O mes de número ${numeroDoMes} é ${converteNumeroEmMeses(numeroDoMes)}`
        document.body.appendChild(p);
    }