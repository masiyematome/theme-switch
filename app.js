
const buttonsContainer = document.querySelector(".buttons");

buttonsContainer.addEventListener("click" , (event)=> {
    const clickedButton = event.target;

    Array.from(buttonsContainer.children).forEach(button => {
        button.classList.remove("clicked");
    })

    if(clickedButton.classList.contains("dark-theme")){
        clickedButton.classList.add("clicked");
    }

    else if(clickedButton.classList.contains("light-theme")){
        clickedButton.classList.add("clicked");
    }
})