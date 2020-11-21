document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(document.getElementById("lumos-template").content);

    const images = document.querySelectorAll('[data-action="lumos"]'),
          lumosContainer = document.getElementById("lumos-container"),
          lumosImage = document.getElementById("lumos-image"),
          lumosCaption = document.getElementById("lumos-caption"),

          animationDuration = 250;

    function hide() {
        isVisible() && (lumosContainer.classList.add("hidden"), setTimeout(() => {
            lumosContainer.classList.remove("visible");
            lumosImage.attributes.src.value = "";
            lumosCaption.innerHTML = "";
        }, animationDuration));
    }

    function isVisible() {
        return lumosContainer.classList.contains("visible");
    }

    images.forEach(image => {
        image.addEventListener("click", () => {
            lumosImage.attributes.src.value = void 0 === image.attributes["data-lumos-src"] ? image.attributes.src.value : image.attributes["data-lumos-src"].value;
            lumosImage.attributes.alt.value = image.attributes.alt.value;
            lumosCaption.innerHTML = image.attributes["data-lumos-caption"].value;
            isVisible() || (lumosContainer.classList.remove("hidden"), lumosContainer.classList.add("visible"));
        });
    });

    lumosContainer.addEventListener("click", hide);

    window.addEventListener("keyup", e => {
        "Escape" === e.key && hide();
    });
});
