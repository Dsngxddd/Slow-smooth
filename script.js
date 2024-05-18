let isScrolling = false;
let scrollAmount = 0;
const scrollStep = 10;
const scrollInterval = 10;

window.addEventListener('wheel', (event) => {
    if (isScrolling) {
        scrollAmount += event.deltaY;
    } else {
        isScrolling = true;
        scrollAmount = event.deltaY;
        smoothScroll();
    }
});

function smoothScroll() {
    if (scrollAmount !== 0) {
        let scrollBy = Math.sign(scrollAmount) * Math.min(scrollStep, Math.abs(scrollAmount));
        window.scrollBy(0, scrollBy);
        scrollAmount -= scrollBy;
        setTimeout(smoothScroll, scrollInterval);
    } else {
        isScrolling = false;
    }
}
