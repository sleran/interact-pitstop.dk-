function showMenu() {
    'use strict';
    var menu = document.getElementById("menu");
    var nav = document.getElementById("navi");
    var logo = document.getElementById("logo");
    if (menu.style.display === "none") {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        nav.classList.add("show");
        logo.style.width = "259px"
    } else {
        menu.style.display = "none";
        nav.classList.remove("show");
        logo.style.width = "129px"
    }
}