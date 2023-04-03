let inputs = document.getElementsByTagName("input");

Array.from(inputs).forEach((input) => {
    input.onfocus = (e) => {
        
        e.target.parentElement.classList.add("focused");
    };

    input.onblur = (e) => {
        let value = input.value;

        if (value === "") {
            input.classList.remove("filled");
            input.parentElement.classList.remove("focused");
        }
    };
});