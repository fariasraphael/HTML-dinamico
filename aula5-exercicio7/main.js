function estaEntre(numero, minimo, maximo, inclusivo) {

    if (inclusivo) {
        return (numero >= minimo && numero <= maximo)
    }
    return (numero > minimo && numero < maximo)
}



function verifica() {
    let number = Number(document.getElementById("num1").value);
    let min = Number(document.getElementById("num2").value);
    let max = Number(document.getElementById("num3").value);
    let check = Boolean(document.getElementById("inclusivo").checked);

    if (min > max) {
        let buf = max; 
        max = min;
        min = buf;
    }
    let aux = estaEntre(number, min, max, check);
    let p = document.createElement('p');
    p.textContent = aux;
    document.body.appendChild(p);
}