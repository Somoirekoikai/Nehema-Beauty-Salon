document.addEventListener("DOMContentLoaded", async () => {

    const header = document.getElementById("header");
    const footer = document.getElementById("footer");

    async function loadComponent(element, file) {
        if (!element) {
            console.error(`Missing HTML element: ${file}`);
            return;
        }

        try {
            const response = await fetch(file);

            if (!response.ok) {
                throw new Error(`Failed to load ${file}: ${response.status}`);
            }

            element.innerHTML = await response.text();

        } catch (error) {
            console.error(error);
        }
    }

    await loadComponent(header, "./includes/header.html");
    await loadComponent(footer, "./includes/footer.html");

    // Mobile menu
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");

            const isExpanded = !mobileMenu.classList.contains("hidden");
            menuButton.setAttribute("aria-expanded", isExpanded);
        });
    }

});