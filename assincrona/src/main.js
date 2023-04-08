class User{
    name;
    age;
    weight;
}

function getData (callback1) {
    setTimeout ( () => {
        callback1 ("callback 1");
    }, 2000); 
}

function callback1(callback2) {
    setTimeout ( () => {
        callback2 ("callback 2");
    }, 2000);
}

function callback2 (aux){
    console.log(aux);
}