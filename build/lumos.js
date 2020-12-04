document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(document.getElementById("lumos-template").content);
    const lumosContainer = document.getElementById("lumos-container"), lumosImage = document.getElementById("lumos-image"), lumosCaption = document.getElementById("lumos-caption"), images = document.querySelectorAll('[data-action="lumos"]'), animationDuration = 250;
    function hide() {
        isVisible() && (lumosContainer.classList.add("hidden"), setTimeout(() => {
            lumosContainer.classList.remove("visible");
            lumosImage.src = "";
            if (lumosCaption !== null) {
                lumosCaption.textContent = "";
            }
            lumosContainer.classList.remove("hidden");
        }, animationDuration));
    }
    function isVisible() {
        return lumosContainer.classList.contains("visible");
    }
    window.addEventListener("keyup", (e) => {
        "Escape" === e.key && hide();
    });
    images.forEach((image) => {
        image.addEventListener("click", () => {
            lumosImage.src = void 0 === image.dataset.lumosSrc ? image.src : image.dataset.lumosSrc;
            if (lumosCaption !== null) {
                lumosCaption.textContent = image.dataset.lumosCaption;
            }
            isVisible() || (lumosContainer.classList.remove("hidden"), lumosContainer.classList.add("visible"));
        });
    });
    lumosContainer.addEventListener("click", hide);
});
