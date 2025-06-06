const carousel = document.getElementById("carousel");

function centerImage(index) {
const images = Array.from(carousel.children);
const middleIndex = Math.floor(images.length / 2);
const shiftBy = index - middleIndex;

// Rotate DOM children to bring clicked image to center
for (let i = 0; i < Math.abs(shiftBy); i++) {
    if (shiftBy > 0) {
    carousel.appendChild(carousel.firstElementChild);
    } else {
    carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
    }
}

// Recalculate and apply active class
const newImages = Array.from(carousel.children);
newImages.forEach((img, i) => {
    img.classList.toggle("active", i === middleIndex);
});

// Scroll the new center image into the center of the viewport
requestAnimationFrame(() => {
    const centerImg = carousel.children[middleIndex];
    const offset = centerImg.offsetLeft - (carousel.offsetWidth / 2 - centerImg.offsetWidth / 2);
    carousel.scrollTo({ left: offset, behavior: "smooth" });
});
}

// Initial setup: center middle image
centerImage(2);

carousel.addEventListener("click", (e) => {
if (e.target.tagName === "IMG") {
    const index = Array.from(carousel.children).indexOf(e.target);
    centerImage(index);
}
});