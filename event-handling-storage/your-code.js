window.addEventListener("DOMContentLoaded", () => {
    const bubble = document.getElementById("bubble-trouble");

    bubble.addEventListener("click", () => {
        event.stopPropagation();
    });

    let counter = 0;
    const less = document.getElementById("decrement");
    const more = document.getElementById("increment")
    const zero = document.getElementById("zero-out")
    const counterValue = document.getElementById("counter-value")

    //updates display
    const update = () => {
        counterValue.textContent = counter;
    };
    //+1
    more.addEventListener("click", () => {
        counter++;
        update();
    });
    //-1
    less.addEventListener("click", () => {
        counter--;
        update();
    });
    //reset
    zero.addEventListener("click", () => {
        counter = 0;
        update();
    });

    const input = document.getElementById("my-name-is");

    input.addEventListener("keyup", (event) => {
        const name = input.value;
        localStorage.setItem("name", name);
    });
    const storedName = localStorage.getItem("name");
    input.value = storedName;

    const nav = document.getElementById("navigates-elsewhere")
    nav.addEventListener("click", () => {
        event.preventDefault();
    });

    const fetch = document.getElementById("go-fetch");
    
});