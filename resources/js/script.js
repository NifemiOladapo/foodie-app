const navOpener = document.getElementById("nav__opener");
const main__nav = document.getElementById("main__nav");

let smallPhoneNavIsOpen = false;

window.addEventListener("resize", () => {
  if (window.innerWidth > 810) {
    main__nav.style.display = "flex";
    smallPhoneNavIsOpen = false;
  }
  if (window.innerWidth <= 810) {
    if(!smallPhoneNavIsOpen){
      main__nav.style.display = "none";

    }
  }
});

navOpener.addEventListener("click", function () {
  if (smallPhoneNavIsOpen) {
    main__nav.style.display = "none";

    smallPhoneNavIsOpen = false;
  } else {
    main__nav.style.display = "flex";
    smallPhoneNavIsOpen = true;
  }
});
