const gallery = document.getElementById("gallery");
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");

gallery.addEventListener("scroll", () => {
  if (gallery.scrollLeft > 0) {
    leftArrow.removeAttribute("hidden")
  } else {
    leftArrow.setAttribute("hidden", "")
  }
  
  if (gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth) {
    rightArrow.removeAttribute("hidden")
  } else {
    rightArrow.setAttribute("hidden", "")
  }
});

leftArrow.addEventListener("click", () => {
  gallery.scrollBy({
    left: -gallery.clientWidth,
    behavior: "smooth",
  });
});

rightArrow.addEventListener("click", () => {
  gallery.scrollBy({
    left: gallery.clientWidth,
    behavior: "smooth",
  });
});