let form = document.getElementsByTagName("form")[0];
let invalidEmail = document.querySelector(".invalid-email");
let submitButton = document.querySelector("button[type=submit]");

console.log(submitButton);

invalidEmail.style.display = "none"


let user = new User();

form.oninput = function (e) {
   formData = new FormData(form);
   user.name = formData.get("name");
   user.age = formData.get("age");
   user.phone = formData.get("phone");
   user.email = formData.get("email");

   if (!user.email.includes("@")) {
      invalidEmail.style.display = "block";
      submitButton.setAttribute("disabled", true);

   } else {
      invalidEmail.style.display = "none";
   }

   user.password = formData.get("password");


   let formValid = user.nome !== "" && user.age !== "" && user.phone !== "" && user.email !== "" && user.password !== "";

   if (formValid) {
      submitButton.removeAttribute("disabled");

   } else {
      submitButton.setAttribute("disabled", true);
   }
}

form.onsubmit = (e) => {
   e.preventDefault();
   console.log(user);
}