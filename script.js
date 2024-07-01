document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1000,
    });
})

document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded")
});

function openNav() {
    const navHeader = document.querySelector(".box-nav");
    navHeader.classList.toggle("showNav");
}

function openInstagram() {
    const showInstagram = document.querySelector(".home-instagram");
    const waveUp = document.querySelector(".wave-up-instagram");
    const waveDown = document.querySelector(".wave-down-instagram");
    const contentInstagram = document.querySelector(".content-instagram");

    showInstagram.classList.add("showInstagram");
    waveUp.classList.add("animation-down");
    waveDown.classList.add("animation-up");
    contentInstagram.classList.add("animation-right");
}

function closeInstagram() {
    const closedInstagram = document.querySelector(".home-instagram");
    closedInstagram.classList.remove("showInstagram");
}

function openMaps() {
    const showMaps = document.querySelector(".home-maps");
    const waveUpMaps = document.querySelector(".wave-up-maps");
    const waveDownMaps = document.querySelector(".wave-down-maps");
    const contentMaps = document.querySelector(".content-maps");

    showMaps.classList.add("showMaps");
    waveUpMaps.classList.add("animation-down");
    waveDownMaps.classList.add("animation-up");
    contentMaps.classList.add("animation-right");
}

function closeMaps() {
    const showMaps = document.querySelector(".home-maps");
    const waveUpMaps = document.querySelector(".wave-up-maps");
    const waveDownMaps = document.querySelector(".wave-down-maps");

    showMaps.classList.remove("showMaps");
    waveUpMaps.classList.remove("animation-down");
    waveDownMaps.classList.remove("animation-up");
}

function showMapel() {
    const openMapel = document.querySelector(".mapel");
    openMapel.classList.add("openMapel");

    const hariMapel = document.querySelectorAll(".hari");
    hariMapel.forEach(hari => {
        hari.classList.add("mapel-up");
    });

    const jamMapel = document.querySelectorAll(".jam");
    jamMapel.forEach(jam => {
        jam.classList.add("mapel-right");
    });
}

function closeMapel() {
    const mapelClose = document.querySelector(".mapel");
    mapelClose.classList.remove("openMapel");
}

function showPiket() {
    const openPiket = document.querySelector(".piket");
    openPiket.classList.add("openPiket");

    const hariPiket = document.querySelectorAll(".hari");
    hariPiket.forEach(hari => {
        hari.classList.add("piket-up");
    });

    const namaPiket = document.querySelectorAll(".nama");
    namaPiket.forEach(nama => {
        nama.classList.add("piket-right");
    });
}

function closePiket() {
    const piketClose = document.querySelector(".piket");
    piketClose.classList.remove("openPiket");
}

document.addEventListener("DOMContentLoaded", function () {
    const firstHeader = document.querySelector(".first-header");
    const slideImage = document.querySelector(".slide-image");
    const homeMedia = document.querySelector(".home-media");
    const homeJadwal = document.querySelector(".home-jadwal");
    const footerDev = document.querySelector(".footer-dev");
    const pembukaanPage = document.querySelector(".pembukaan-page");
    const jedaWaktu = 3000;

    pembukaanPage.classList.remove("hidden")
    firstHeader.classList.add("hidden")
    slideImage.classList.add("hidden")
    homeMedia.classList.add("hidden")
    homeJadwal.classList.add("hidden")
    footerDev.classList.add("hidden")

    setTimeout(() => {
        pembukaanPage.classList.add("hidden")
        firstHeader.classList.remove("hidden")
        slideImage.classList.remove("hidden")
        homeMedia.classList.remove("hidden")
        homeJadwal.classList.remove("hidden")
        footerDev.classList.remove("hidden")
    }, jedaWaktu);
});

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlide = slides.length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlide;
    updateSlides();
}

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove("active", "next", "next-to-next", "prev", "prev-to-prev");

        if (index === currentIndex) {
            slide.classList.add('active');
        } else if (index === (currentIndex + 1) % totalSlide) {
            slide.classList.add('next');
        } else if (index === (currentIndex + 2) % totalSlide) {
            slide.classList.add('next-to-next');
        } else if (index === (currentIndex - 1 + totalSlide) % totalSlide) {
            slide.classList.add('prev');
        } else if (index === (currentIndex - 2 + totalSlide) % totalSlide) {
            slide.classList.add('prev-to-prev');
        }
    });
}

setInterval(nextSlide, 2000);