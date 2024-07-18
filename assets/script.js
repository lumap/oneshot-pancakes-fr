// ---- Gallery ----
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

// ---- Install method choice ----
const installAutoSelect = document.getElementById("install-auto-select");
const installManualSelect = document.getElementById("install-manual-select");

const installAutoContent = document.getElementById("install-auto-content");
const installManualContent = document.getElementById("install-manual-content");

installAutoSelect.addEventListener("click", () => {
  if (!installAutoContent.hasAttribute("hidden")) return;
  installAutoContent.removeAttribute("hidden");
  
  installManualContent.setAttribute("hidden", "");
  
  installAutoSelect.classList.remove("border-opacity-0");
  installAutoSelect.classList.add("border-opacity-100");
  
  installManualSelect.classList.remove("border-opacity-100");
  installManualSelect.classList.add("border-opacity-0");
});

installManualSelect.addEventListener("click", () => {
  if (!installManualContent.hasAttribute("hidden")) return;
  installManualContent.removeAttribute("hidden");
  
  installAutoContent.setAttribute("hidden", "");
  
  installManualSelect.classList.remove("border-opacity-0");
  installManualSelect.classList.add("border-opacity-100");
  
  installAutoSelect.classList.remove("border-opacity-100");
  installAutoSelect.classList.add("border-opacity-0");
});
