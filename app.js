
const buttonsContainer = document.querySelector(".buttons");

document.body.classList.add("dark-background");

buttonsContainer.addEventListener("click", (event) => {
    const clickedButton = event.target;

    Array.from(buttonsContainer.children).forEach(button => {
        button.classList.remove("clicked");
    })

    document.body.classList.remove("dark-background");
    document.body.classList.remove("light-background");

    if (clickedButton.classList.contains("dark-theme")) {
        clickedButton.classList.add("clicked");
        document.body.classList.add("dark-background");

        const lightTheme = false;

        saveCurrentStateToStorage(lightTheme);

    }

    else if (clickedButton.classList.contains("light-theme")) {
        clickedButton.classList.add("clicked");
        document.body.classList.add("light-background");

        const lightTheme = true;

        saveCurrentStateToStorage(lightTheme);

    }
})


function saveCurrentStateToStorage(state) {

    let states;

    if (localStorage.getItem("states") === null) {
        states = [];
    }

    else {
        states = JSON.parse(localStorage.getItem("states"));
    }

    states.push(state);
    localStorage.setItem("states", JSON.stringify(states));

}

(function retrieveSateFromStorage(state) {

    let states;

    if (localStorage.getItem("states") === null) {
        states = [];
    }

    else {
        states = JSON.parse(localStorage.getItem("states"));
    }

    Array.from(buttonsContainer.children).forEach(button => {
        button.classList.remove("clicked");
    })

    states.forEach(function (state) {

        // document.body.classList.add("light-background");

        if (states[states.length - 1] == true) {
            document.body.classList.add("light-background");
            buttonsContainer.children[1].classList.add("clicked");
        }

        else if (states[states.length - 1] == false) {
            document.body.classList.add("dark-background");
            buttonsContainer.children[0].classList.add("clicked");
        }

    })

}());
