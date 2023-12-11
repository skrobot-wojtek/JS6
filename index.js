let size = 15;
let orderElement = 1;
const init = () => {
    // kod inicjujący 
    const btn = document.createElement("button");
    const reset = document.createElement("button");
    btn.innerText = "Stwórz liste";
    reset.innerText = "Reste";
    document.body.appendChild(btn);
    document.body.appendChild(reset);
    btn.addEventListener("click", createLiElements);
    reset.addEventListener("click", resetuje);
}
const resetuje = () => {
    const doUkrycia = document.querySelectorAll("li");
    doUkrycia.forEach(item => {
        item.textContent = "";
    });
}
const createLiElements = () => {

    for (let i = 1; i <= 10; i++) {
        const liel = document.createElement("li");
        liel.innerText = "Element nr" + orderElement;
        liel.style.fontSize = size + "px";
        liel.style.marginLeft = 50 + "px";
        size++;
        orderElement++
        document.body.appendChild(liel);
    }
}
init();
