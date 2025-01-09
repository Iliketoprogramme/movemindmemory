document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Parallax Scrolling Effect
    window.addEventListener("scroll", () => {
        const parallax = document.querySelector(".parallax");
        let scrollPosition = window.pageYOffset;
        parallax.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    });

    // Hover Animation for Feature Cards
    document.querySelectorAll(".feature-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.boxShadow = "0px 10px 15px rgba(0, 0, 0, 0.2)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        });
    });
});
