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
    
    if (width > 950) {
        menuBtn.classList.remove("active-menu-btn");  // Remove new class
        menuList.classList.remove("active-menu-list");  // Remove new class
    }
});



// Slider
const slide = document.querySelector(".items");  // First slide
const sliders = document.querySelectorAll(".items");  // All slides
let count = 0;  // Count slides

const dots = document.querySelectorAll(".dots-row");  // Dots
const speedMove = 9000;  // Slider speed 


function slideMove(count) {
    /* Move slide 
    count: slide index
    */
    dots[count].classList.add("dots-active");  // Add dots-active class
    slide.style.marginLeft = `-${count}00%`;  // Move slide
    interval = setInterval(slideAutoMove, speedMove)  // Create new interval
}

function slideAutoMove() {
    /* Auto move slide */
    dots[count].classList.remove("dots-active");  // Remove dots-active class

    count += 1;  // Increment count

    if (count == sliders.length) {
        count = 0;  // Reset the coun
    }

    // slideMove(count);  // Move slide
    dots[count].classList.add("dots-active");  // Add dots-active class
    slide.style.marginLeft = `-${count}00%`;  // Move slide
}


// Auto move slide
interval = setInterval(() => {
    slideAutoMove()
}, speedMove);


// Check on click dots
dots.forEach(element => {
    element.addEventListener("click", speedMove => {
        dots.forEach(element => {
            if (element.className == "dots-row dots-active") {
                element.classList.remove("dots-active");  // Remove old active dot
            }
        });

        element.classList.add("dots-active");  // Add new active dot

        for (let i = 0; i < dots.length; i++) {
            if (dots[i].className == "dots-row dots-active") {
                count = i;  // linked the point index to the slide index
                clearInterval(interval);  // Stop interval
                slideMove(count, speedMove);  // Move slide
            }
        }
    });
});