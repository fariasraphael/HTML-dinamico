let btn = document.getElementsByTagName('button');
        console.log(btn);
        console.log(Array.from(btn));

        Array.from(btn).forEach((button) => {
            button.addEventListener("click", handleClick)
        });
        function handleClick(e) {
            if (e instanceof PointerEvent) {

                if (e.target.classList.contains('selected')) {
                    e.target.classList.remove('selected')
                } else {
                    e.target.classList = "selected";
                }
            }
        };