const mainNav = document.getElementById("main__nav")
const hambuger = document.getElementsByClassName("hambuger")

hambuger[0].addEventListener("click", ()=>{
    mainNav.classList.toggle("active")
    hambuger.classList.toggle("active")
} )