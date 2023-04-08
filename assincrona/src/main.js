function getData () {
    console.log("entrou na função");
    setTimeout (()=> {console.log("entrou no setTimeout()");}, 2000);
    console.log("saiu da função");
}