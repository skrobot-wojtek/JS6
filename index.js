let size = 10;
let orderElement = 1;
const init = () => {
    // kod inicjujący 
    const btn = document.createElement("button");
    btn.innerText = "Stwórz liste";
    document.body.appendChild(btn);
    btn.addEventListener("click", createLiElements)
}
const createLiElements = () => {

    for (let i = 1; i <= 10; i++) {
        const liel = document.createElement("li");
        liel.innerText = "Element nr" + orderElement;
        liel.style.fontSize = size+"px";
        liel.style.marginLeft = 50+"px";
        size++;
        orderElement++
        document.body.appendChild(liel);
    }
}
init();