
let currentIndex = 0;
let intervalId;

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3; // Jumlah slide, sesuaikan
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + 3) % 3; // Jumlah slide, sesuaikan
    updateSlide();
}

function updateSlide() {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function startAutoplay() {
    intervalId = setInterval(() => {
        nextSlide();
    }, 1500); // Atur interval autoplay sesuai kebutuhan (dalam milidetik)
}

function stopAutoplay() {
    clearInterval(intervalId);
}

// Mulai autoplay ketika halaman dimuat
startAutoplay();

// Berhenti autoplay ketika kursor di atas kontainer slide
const slideContainer = document.querySelector('.slide-container');
slideContainer.addEventListener('mouseenter', stopAutoplay);

// Mulai lagi autoplay ketika kursor keluar dari kontainer slide
slideContainer.addEventListener('mouseleave', startAutoplay);
