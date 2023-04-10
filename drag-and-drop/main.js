let itens = document.querySelectorAll("[wm-dropzone] .item")


let right = document.querySelector(".right");
let left = document.querySelector(".left");
console.log(right, left);
console.log(itens);

itens.forEach((item, index) => {
    if (item instanceof HTMLDivElement) {
        item.draggable = true;
        item.id = item.id || `draggable-item${index}`;

        item.ondragstart = e =>{
            e.dataTransfer.setData("")
        }
    }
});

/* 2:20:00 */