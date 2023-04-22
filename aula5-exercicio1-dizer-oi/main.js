function sayHi (name) {
    /* return `Olá ${name}!`;*/
    return "olá "+ name + "!"; 
    /* let greeting = `Olá ${name}!`;
    return greeting; */
}   

let button = document.getElementsByTagName("button")[0];

button.onclick = (e) => {
    let name = document.getElementById("name").value;
    let p = document.createElement("p");
    p.textContent = sayHi(name);

    document.body.appendChild(p);
}