let currentIndex = 0;

// Megkeressük az elemeket
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Funkció a diák megjelenítésére
function showSlide(index) {
    if (slides.length === 0) return;

    // Ha túllépünk a végén, visszaugrunk az elejére
    if (index >= slides.length) {
        currentIndex = 0;
    } 
    // Ha az eleje elé lépünk, az utolsóra ugrunk
    else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    // Minden diáról levesszük az active osztályt
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Csak az aktuális diát és pöttyöt tesszük aktívvá
    slides[currentIndex].classList.add('active');
    if (dots[currentIndex]) {
        dots[currentIndex].classList.add('active');
    }
}

// Léptetés a nyilakkal (1 = következő, -1 = előző)
function changeSlide(step) {
    showSlide(currentIndex + step);
}

// Közvetlen ugrás egy adott diára a pöttyökkel
function currentSlide(index) {
    showSlide(index);
}

// Automatikus indítás az első diával
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});