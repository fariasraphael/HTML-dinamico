let divButton = document.getElementById("buttom-submit");
divButton.style.display = "flex";
divButton.style.justifyContent = "end";
divButton.style.padding = "16px"

let form = document.forms[0];

form.onsubmit = function (e) {
   if (e instanceof SubmitEvent) {
      e.preventDefault();
      
      let itemName = new FormData(form).get("item");
      
      let content = document.querySelector("body div");
      
      let item = document.createElement("div");
      item.classList.add("shop-list-item");
      item.style.display = "flex";
      item.style.justifyContent = "space-between"
      
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.onclick = e => {
         e.target.disabled = "true";
         h6.style.textDecoration = "line-through";
         h6.style.color = "rgb(170, 170, 170)"
      }

      let h6 = document.createElement("h6");
      h6.textContent = itemName;
      h6.style.margin = "0";
      h6.style.fontSize = "16px";

      let div = document.createElement("div");
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.append(checkbox);
      div.append(h6);
      
      let button = document.createElement("button");
      button.textContent = "Excluir";
      button.style.borderRadius = "8px";
      button.style.backgroundColor = "var(--error-color)";
      button.style.border = "none";
      button.style.color = "#ffffff";
      button.style.padding = "8px 16px";
      button.style.cursor = "pointer";
      button.onclick = e => {
         if (e instanceof PointerEvent) {
           content.removeChild(item)
         }

      }
      item.append(div);
      item.append(button);
      item.style.margin = "8px 0"

      content.appendChild(item);
   }

   document.getElementById("item").value = '';

};