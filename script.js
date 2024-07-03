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
    const homeInstagram = document.querySelector(".home-instagram");
    homeInstagram.style.display = "grid";
    homeInstagram.classList.add("showInstagram");
    homeInstagram.classList.remove("closeInstagram");
    
    
    const waveUp = document.querySelector(".wave-up-instagram");
    waveUp.classList.add("animation-down");
    
    const waveDown = document.querySelector(".wave-down-instagram");
    waveDown.classList.add("animation-up");
    
    const contentInstagram = document.querySelector(".content-instagram");
    contentInstagram.classList.add("animation-right");
}

function closeInstagram() {
    const homeInstagram = document.querySelector(".home-instagram");
    homeInstagram.classList.add("closeInstagram");
    homeInstagram.classList.remove("showInstagram");

    homeInstagram.addEventListener("animationend", () => {
        if (!homeInstagram.classList.contains("showInstagtam")) {
            homeInstagram.style.display = "none";
        }
    }, { once: true })
}

function openMaps() {
    const showMaps = document.querySelector(".home-maps");
    showMaps.style.display = "grid";
    showMaps.classList.add("showMaps");
    showMaps.classList.remove("closeMaps");

    const waveUpMaps = document.querySelector(".wave-up-maps");
    waveUpMaps.classList.add("animation-down");

    const waveDownMaps = document.querySelector(".wave-down-maps");
    waveDownMaps.classList.add("animation-up");

    const contentMaps = document.querySelector(".content-maps");
    contentMaps.classList.add("animation-right");
}

function closeMaps() {
    const showMaps = document.querySelector(".home-maps");
    showMaps.classList.add("closeMaps");
    showMaps.classList.remove("showMaps");

    showMaps.addEventListener("animationend", () => {
        if(!showMaps.classList.contains("showMaps")) {
            showMaps.style.display =  "none";
        }
    }, {once: true})

    const waveUpMaps = document.querySelector(".wave-up-maps");
    waveUpMaps.classList.remove("animation-down");

    const waveDownMaps = document.querySelector(".wave-down-maps");
    waveDownMaps.classList.remove("animation-up");

}

function showMapel() {
    const homeMapel = document.querySelector(".mapel");
    homeMapel.style.display = "grid";
    homeMapel.classList.add("openMapel");
    homeMapel.classList.remove("closeMapel");

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
    const homeMapel = document.querySelector(".mapel");
    homeMapel.classList.add("closeMapel")
    homeMapel.classList.remove("openMapel");

    homeMapel.addEventListener("animationend", () => {
        if(!homeMapel.classList.contains("openMapel")) {
            homeMapel.style.display = "none";
        }
    }, {once: true})
}

function showPiket() {
    const homePiket = document.querySelector(".piket");
    homePiket.style.display = "grid";
    homePiket.classList.add("openPiket");
    homePiket.classList.remove("closePiket");

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
    const homePiket = document.querySelector(".piket");
    homePiket.classList.add("closePiket")
    homePiket.classList.remove("openPiket");

    homePiket.addEventListener("animationend", () => {
        if(!homePiket.classList.contains("openPiket")) {
            homePiket.style.display = "none";
        }
    }, {once: true})
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