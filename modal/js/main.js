
let content = document.querySelector("body");
content.style.display = "flex";
content.style.flexDirection = "column";


let h1 = document.createElement("h1")
h1.textContent = "TESTE MODAL";
h1.style.alignSelf = "center";
content.append(h1);


let buttonAbreModal = document.createElement("button");
buttonAbreModal.type = "button";
buttonAbreModal.textContent = "Abrir Modal";
buttonAbreModal.style.borderRadius = "8px";
buttonAbreModal.style.padding = "8px 16px";
buttonAbreModal.style.height = "56px";
buttonAbreModal.style.width = "112px";
buttonAbreModal.style.alignSelf = "center";
buttonAbreModal.style.cursor = "pointer"
content.append(buttonAbreModal);

let divModalContainer = document.createElement("div");
divModalContainer.style.width = "100%";
divModalContainer.style.height = "100%";
divModalContainer.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
divModalContainer.style.position = "absolute";
divModalContainer.style.top = "0";
divModalContainer.style.left = "0";
divModalContainer.style.display = "none"
content.append(divModalContainer);


let divModal = document.createElement("div");
divModal.style.width = "80%";
divModal.style.backgroundColor = "#ffffff";
divModal.style.borderRadius = "8px";
divModal.style.padding = "16px";
divModal.style.margin = "auto";
divModal.style.marginTop = "10%";
divModalContainer.append(divModal);

let headerModal = document.createElement("header");
let buttonFechaModal = document.createElement("button");
buttonFechaModal.type = "button";
buttonFechaModal.textContent = "X";

divModal.append(headerModal);
headerModal.append(buttonFechaModal);

let h2Modal = document.createElement("h2");
h2Modal.textContent = "Modal header";
headerModal.append(h2Modal);

let pModal = document.createElement("p");
pModal.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
divModal.append(pModal);

buttonAbreModal.onclick = e => divModalContainer.style.display = "";

buttonFechaModal.onclick = e => divModalContainer.style.display = "none";
divModalContainer.onclick = e => {
    if (e.target === divModalContainer)
    divModalContainer.style.display = "none";
}

