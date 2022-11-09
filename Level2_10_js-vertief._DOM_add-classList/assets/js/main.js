const element = document.getElementById("element");

function small() {
    element.classList.remove("bigAndCrazy", "middle");
    element.classList.add("small");
}

function middle() {
    element.classList.remove("bigAndCrazy", "small");
    element.classList.add("middle");
}

function bigAndCrazy() {
    element.classList.remove("small", "middle");
    element.classList.add("bigAndCrazy");
}