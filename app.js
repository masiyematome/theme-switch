
const buttonsContainer = document.querySelector(".buttons");

buttonsContainer.addEventListener("click" , (event)=> {
    const clickedButton = event.target;

    Array.from(buttonsContainer.children).forEach(button => {
        button.classList.remove("clicked");
    })

    document.body.classList.remove("dark-background");
    document.body.classList.remove("light-background");

    if(clickedButton.classList.contains("dark-theme")){
        clickedButton.classList.add("clicked");
        document.body.classList.add("dark-background");
    }

    else if(clickedButton.classList.contains("light-theme")){
        clickedButton.classList.add("clicked");
        document.body.classList.add("light-background");

    }
})



