const scrollTopBtn = document.querySelector("#scrollTopBtn");
const tankImages = document.querySelectorAll(".tankimg, .vozdushnye-sily img");

function toggletankinfo(event) {
    let tankinfoSection = event.currentTarget.nextElementSibling;

    while (tankinfoSection && !tankinfoSection.classList.contains("tankinfo")) {
        tankinfoSection = tankinfoSection.nextElementSibling;
    }

    if (tankinfoSection) {
        tankinfoSection.hidden = !tankinfoSection.hidden;
    }
}

tankImages.forEach((tankimg) => {
    tankimg.addEventListener("click", toggletankinfo);
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
     });
}
