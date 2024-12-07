const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  effect: "flip",
  flipEffect: {
    slideShadows: true,
    limitRotation: true,
  },
  grabCursor: true,
});

const images = Array.from(document.getElementsByClassName("image"));
let activeIndex = null;

// Loop through each image and add a click event listener
images.forEach((image, index) => {
  image.addEventListener("click", () => {
    if (activeIndex === index) {
      activeIndex = null;
      resetImageOpacity();
    } else {
      activeIndex = index;
      swiper.slideTo(index);
      updateImageOpacity(index);
    }
  });
});

// Function to update the opacity of images
function updateImageOpacity(activeIndex) {
  images.forEach((image, index) => {
    image.style.opacity = index === activeIndex ? "1" : "0.3";
  });
}

// Function to reset the opacity of all images to 0.3
function resetImageOpacity() {
  images.forEach((image) => {
    image.style.opacity = "0.3";
  });
}
