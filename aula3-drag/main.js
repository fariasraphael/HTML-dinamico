let item = document.getElementById("el");
item.style.position = "absolute";
item.onmousemove = (e) => {
    if (e instanceof MouseEvent) {
        console.log(e)
        
        let target = e.target;

        if (e.buttons) {
            target.style.top = `${e.clientY - target.clientHeight / 2}px`;
            target.style.left = `${e.clientX - target.clientWidth / 2}px`;
        }
    }
};