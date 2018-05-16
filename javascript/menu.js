function showMenu() {
    'use strict';
    var menu = document.getElementById("menu");
    var nav = document.getElementById("navi");
    if (menu.style.display === "none") {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        nav.classList.add("show");
    } else {
        menu.style.display = "none";
        nav.classList.remove("show");
    }
}