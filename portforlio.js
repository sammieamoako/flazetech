document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");


    const initialDisplay = window.getComputedStyle(dropdownMenu).display;

    menuToggle.addEventListener("click", function() {
        const currentDisplay = window.getComputedStyle(dropdownMenu).display;
        dropdownMenu.style.display = (currentDisplay === "none") ? "block" : "none";
    });
});