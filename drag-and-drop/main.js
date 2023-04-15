let itens = document.querySelectorAll("[wm-dropzone] .item")

let right = document.querySelector(".right");
let left = document.querySelector(".left");

itens.forEach((item, index) => {
    if (item instanceof HTMLDivElement) {
        item.draggable = true;
        item.id = item.id || `draggable-item${index}`;

        item.ondragstart = e => {
            e.dataTransfer.setData("item-id", e.target.id);
            if (item.parentElement === right) {
                left.classList.add("avaliable-to-drop");
                right.classList.remove("avaliable-to-drop");
            } else {
                right.classList.add("avaliable-to-drop");
                left.classList.remove("avaliable-to-drop");
            }
        }
    }
});

let dropzones = document.querySelectorAll("[wm-dropzone]");

dropzones.forEach((dropzone) => {
    if (dropzone instanceof HTMLDivElement) {
        dropzone.ondragover = (e) => e.preventDefault();
        dropzone.ondrop = (e) => {
            let id = e.dataTransfer.getData("item-id");
            let item = document.getElementById(id);

            e.target.appendChild(item)
            //dropzone.appendChild(item);
            left.classList.remove("avaliable-to-drop");
            right.classList.remove("avaliable-to-drop");
        };
    }
});

