function changeMe() {
    const liElements = document.getElementsByTagName("li");
    console.log(liElements);

    if (liElements[0].style.backgroundColor === "rgb(246, 200, 159)") {
        liElements[0].style.backgroundColor = "#333";
        liElements[1].style.backgroundColor = "#333";
        liElements[2].style.backgroundColor = "#333";
        document.querySelector(".active").style.backgroundColor = "#4CAF50";
        return;
    } else {
        liElements[0].style.backgroundColor = "#f6c89f";
        liElements[1].style.backgroundColor = "#ffe7d1";
        liElements[2].style.backgroundColor = "#4b8e8d";
        liElements[3].style.backgroundColor = "#396362";
        document.querySelector(".active").style.backgroundColor = "#396362";
    }



}