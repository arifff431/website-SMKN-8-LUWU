// =====================================================
// ANIMASI ANIME.JS
// =====================================================

// Animasi heading section
anime({
    targets: ".section-heading",
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 1000,
    easing: "easeOutExpo"
});


// Animasi About
anime({
    targets: ".about-image-wrapper",
    opacity: [0, 1],
    translateX: [-60, 0],
    duration: 1200,
    easing: "easeOutExpo"
});

anime({
    targets: ".about-content",
    opacity: [0, 1],
    translateX: [60, 0],
    duration: 1200,
    delay: 200,
    easing: "easeOutExpo"
});


// Animasi kartu berita
anime({
    targets: ".news-card",
    opacity: [0, 1],
    translateY: [40, 0],
    delay: anime.stagger(120),
    duration: 900,
    easing: "easeOutExpo"
});


// Animasi sidebar
anime({
    targets: ".sidebar-card",
    opacity: [0, 1],
    translateX: [40, 0],
    delay: anime.stagger(150),
    duration: 900,
    easing: "easeOutExpo"
});


// Animasi galeri
anime({
    targets: ".gallery-item",
    opacity: [0, 1],
    scale: [0.9, 1],
    delay: anime.stagger(100),
    duration: 900,
    easing: "easeOutExpo"
});