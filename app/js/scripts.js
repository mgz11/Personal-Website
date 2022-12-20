// Hamburger menu 
const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
const mobile_nav_links = document.getElementsByClassName("nav-link");

// Change background of home section when menu is open
const home_bg = document.getElementById("home");

menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
    home_bg.classList.toggle("menu_open");
    document.body.classList.toggle("scroll-lock");
});

for (const element of mobile_nav_links) {
    let nav_links = element;
    nav_links.addEventListener("click", () => {
        menu_btn.classList.toggle("is-active");
        mobile_menu.classList.toggle("is-active");
        home_bg.classList.toggle("menu_open");
        document.body.classList.toggle("scroll-lock");
    });
}

