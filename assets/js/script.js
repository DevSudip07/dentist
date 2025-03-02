document.addEventListener("DOMContentLoaded", () => {
    const menuBar = document.querySelector(".menu-bar");
    const menuIcon = document.querySelector(".menu-bar i");
    const navMenu = document.querySelector(".nav-menu");
    const formMenu = document.querySelector(".appointment-menu");
    const form = document.querySelector(".appointment-form");
    const formIcon = document.querySelector(".close");

    // Navigation Menu Toggle
    menuBar.addEventListener("click", () => {
        navMenu.classList.toggle("menu");
        menuIcon.classList.toggle("fa-x");
        menuIcon.classList.toggle("white");
    });

    // Show Appointment Form
    formMenu.addEventListener("click", () => {
        form.classList.add("show-form");
        navMenu.classList.remove("menu"); // Close menu when form opens
        menuIcon.classList.add("hidden");
    });

    // Close Appointment Form
    formIcon.addEventListener("click", () => {
        form.classList.remove("show-form");
        menuIcon.classList.remove("hidden");
        menuIcon.classList.remove("fa-x");
        menuIcon.classList.remove("white");
    });
});
