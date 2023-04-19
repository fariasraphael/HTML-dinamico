/* function calculadora(var1, var2, operacao) {
    let resultado;
    switch (operacao) {
        case "+":
            resultado = var1 + var2;
            break;

        case "-":
            resultado = var1 - var2;
            break;

        case "*":
            resultado = var1 * var2;
            break;

            case "/":
                if (var2===0){
                    console.log("div 0");
                    break;
                }
                resultado = var1 /var2;
                break;

                default:
                    console.log("operação invalida!");
                    break;
    }

   return resultado;
}
let aux = calculadora(10, 0, "/")
console.log(aux) */

function calcular(num1, num2, op) {
    if (op == "+") {
        console.log(num1, op, num2 + " = " + (num1 + num2));
    }
    if (op == "-") {
        console.log(num1, op, num2 + " = " + (num1 - num2));
    }
    if (op == "*") {
        console.log(num1, op, num2 + " = " + (num1 * num2));
    }
    if (op == "/" && num2 != 0) {
        console.log(num1, op, num2 + " = " + (num1 / num2));
    } else {
        console.log("divisão por zero");
    }

}
calcular(11, 0, "/");