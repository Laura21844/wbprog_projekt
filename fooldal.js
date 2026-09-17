// Funkció az adott indexű kép megjelenítésére
function showSlide(index) {
  // Ha túllépünk az utolsó képen, visszaugrunk az elsőre
  if (index >= slides.length) {
    currentIndex = 0;
  } 
  // Ha az első előttre lépnénk, az utolsóra ugrunk
  else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  // Összes kép és pötty aktív állapotának törlése
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Aktuális kép és pötty aktiválása
  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

// Következő vagy előző képre léptetés (gombokhoz)
function moveSlide(step) {
  showSlide(currentIndex + step);
}

// Konkrét képre ugrás (pöttyökhöz)
function currentSlide(index) {
  showSlide(index);
}

// Automatikus léptetés 5 másodpercenként (Opcionális)
setInterval(() => {
  moveSlide(1);
}, 5000);