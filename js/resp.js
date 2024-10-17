let burger = document.querySelector(".burger")
let navbar = document.querySelector(".navbar")
let rightNav = document.querySelector(".right-nav")
let leftNav = document.querySelector(".navbar-list")
burger.addEventListener("click",()=>{
    navbar.classList.toggle("nav-h-resp")
    rightNav.classList.toggle("visiblity-resp")
    leftNav.classList.toggle("visiblity-resp")

})