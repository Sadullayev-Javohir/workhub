const carousel = new bootstrap.Carousel("#carouselExampleDark", {
    interval: 2000,
    ride: "carousel",
});

const carousel2 = new bootstrap.Carousel("#carouselExampleSlidesOnly", {
    interval: 2000,
    ride: "carousel",
});

var load = document.getElementById("load");
            window.addEventListener('load', function() {
                setTimeout(() => {
                    load.style.display = "none";
                }, 3000);
            });