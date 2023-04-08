function func1(value) {
    if (value == "true" || value == "false") {
        return value == "true" ? false : true;
        
        
    }    if (parseInt(value) ){
        return value * (-1);
    }
    return "Booleano ou numero esperados, mas o parâmetro é do tipo " + typeof value;
}

function dizOParametro (){
    let parametro = document.getElementById("numOuBool").value;

    let aux = func1(parametro);

    let p = document.createElement('p');
    p.textContent = aux;
    document.body.appendChild(p);
}