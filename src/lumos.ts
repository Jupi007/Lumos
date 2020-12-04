document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild((document.getElementById("lumos-template") as HTMLTemplateElement).content);

    const lumosContainer = <HTMLElement> document.getElementById("lumos-container"),
          lumosImage = <HTMLImageElement> document.getElementById("lumos-image"),
          lumosCaption = <HTMLElement> document.getElementById("lumos-caption"),
          images = <NodeList> document.querySelectorAll('[data-action="lumos"]'),

          animationDuration: number = 250;

    function hide(): void {
        isVisible() && (lumosContainer.classList.add("hidden"), setTimeout(() => {
            lumosContainer.classList.remove("visible");
            lumosImage.src = "";
            if (lumosCaption !== null) {
                lumosCaption.textContent = "";
            }
            lumosContainer.classList.remove("hidden");
        }, animationDuration));
    }

    function isVisible(): boolean {
        return lumosContainer.classList.contains("visible");
    }

    window.addEventListener("keyup", (e:KeyboardEvent) => {
        "Escape" === e.key && hide();
    });

    images.forEach((image:HTMLImageElement) => {
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
