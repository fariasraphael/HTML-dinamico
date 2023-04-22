let a = document.querySelector('[esperar5SegundosDepoisRedirecionar');
a.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
        window.location.href = a.href;
    }, 5000);
    console.log("Esperando 5 segundos");

})
