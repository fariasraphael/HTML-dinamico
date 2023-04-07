function getValueFromInput(id) {
    let input = document.getElementById(id);
    return input
}


let button = document.querySelector("[calculateValuePerHours]");

button.onclick = function (e) {
    let valorPorHora = getValueFromInput("hour").value;
    let horasDeTrabalho = getValueFromInput("valor").value;

    let inputHours = getValueFromInput("hour");
    let inputValuePerHours = getValueFromInput("valor");

    let p = document.createElement('p');
    p.textContent = `Salário igual a ${calculateSalary(horasDeTrabalho, valorPorHora)}`;
    document.body.appendChild(p);

    inputHours.value = "";
    inputValuePerHours.value = "";

}


function calculateSalary(horasDeTrabalho, valorPorHora) {
    return horasDeTrabalho * valorPorHora;
};