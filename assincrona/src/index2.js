function promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 1 resolvida");
        }, 1000);
    });
}

function promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2 resolvida");
        }, 1000);
    });
}


async function callPromises() {
    let startDate = new Date().getTime();
    console.log(startDate);
    
    
    let aux = await promise1();
    let aux2 = await promise2();

    let endDate = new Date().getTime();
    console.log(endDate);

    console.log("promises resolvidas");
}

/* continua em 1:51:51 */