function maiorNumero(num1, num2) {
    return num1 >= num2;
}



function compara() {

    let numUm = document.getElementById("num1").value;
    let numDois = document.getElementById("num2").value;

    let aux = maiorNumero(numUm, numDois);

    let p = document.createElement('p');

    if (aux) {
        p.textContent = `${numUm} é maior que ${numDois}`;
    }

    if (!aux) {
        p.textContent = `${numDois} é maior que ${numUm}`;
    }

    document.body.appendChild(p);
}
