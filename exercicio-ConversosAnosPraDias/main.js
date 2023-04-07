/* let button = document.getElementsByTagName("button")[0]; */
document.getElementsByTagName("button")[0].onclick = (e) => {
    let anos = document.getElementById("age").value;

    let dias = anos * 365;

    let p = document.createElement('p');
    
    p.textContent = `${anos} ano(s) equivalem a ${dias} dias`;

    document.body.appendChild(p);
}