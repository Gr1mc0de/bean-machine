function clickBurger() {
    var bar = document.getElementsByClassName("bar");
    for (var i = 0; i < bar.length; i++) {
        bar[i].classList.toggle("bar-white");
    }
    var burger = document.querySelector(".burger-links");
    burger.classList.toggle("burger-display");
}