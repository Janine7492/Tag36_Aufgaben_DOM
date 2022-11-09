function changeStyle() {
    const homeButton = document.getElementById("navHome");

    if (homeButton.style.backgroundColor === "pink") {
        homeButton.style.backgroundColor = "#333";
        homeButton.style.color = "white";
        homeButton.innerHTML = "Home";
    } else {
        homeButton.style.backgroundColor = "pink";
        homeButton.style.color = "black";
        homeButton.innerHTML = "emoH";
    }

}

