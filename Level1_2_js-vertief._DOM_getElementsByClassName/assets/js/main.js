function myFunction() {
    const example = document.querySelectorAll(".example");
    console.log(example);
    for (element of example) {
        element.classList.toggle("exampleChangeColor");
    }
}