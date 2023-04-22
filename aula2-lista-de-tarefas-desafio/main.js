let form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", createTask);

let ul = document.getElementsByTagName("ul")[0];


function createTask(evt) {
    evt.preventDefault();

    console.log(evt);


    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;


    let li = document.createElement("li");
    li.innerHTML = `
    <div>
        <h3> ${title} </h3>
        <p> ${description} </p>
    </div>
    <input type="checkbox" onclick="removeTask(event)"/>
    `;

    ul.appendChild(li);

    form.reset();
}

function removeTask(evt) {
    console.log(evt);
    //ul.removeChild(evt.srcElement.parentElement);
    //evt.srcElement.disabled = true;
    evt.srcElement.setAttribute("disabled", true);
    evt.srcElement.parentElement.classList = "task-finished"
}