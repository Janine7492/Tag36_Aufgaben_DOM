document.getElementById("button").addEventListener("click", changeColor);

const body = document.getElementById("body");

function changeColor(event) {
    event.preventDefault();

    let selected = document.getElementById("farbeAuswahlen").value;
    console.log(selected);
    let selectedColor = selected.replace(" ", "");
    body.style.backgroundColor = selectedColor;

}