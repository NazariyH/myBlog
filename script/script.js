// Hamburger menu
let menuBtn = document.querySelector(".hamburger-btn");  // Get hamburger menu button
let menuList = document.querySelector(".hamburger-menu-list");  // Get hamburger menu list

menuBtn.addEventListener("click", function() {
    menuBtn.classList.toggle("active-menu-btn");  // Add new class
    menuList.classList.toggle("active-menu-list");  // Add new class
});



let width = 0;  // Get screen width

window.addEventListener("resize", function() {
    let width = screen.width;  // Get screen width
    
    if (width > 900) {
        menuBtn.classList.remove("active-menu-btn");  // Remove new class
        menuList.classList.remove("active-menu-list");  // Remove new class
    }
});