document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuToggle = document.querySelector(".menu-toggle");
    const menuItems = document.querySelectorAll(".menu-item");

    menuToggle.addEventListener("click", function () {
        if (mobileMenu.style.left === "0px" || mobileMenu.style.left === "") {
            mobileMenu.style.left = "-100%";
        } else {
            mobileMenu.style.left = "0px";
        }
    });

    menuItems.forEach(function (menuItem) {
        const submenu = menuItem.querySelector(".submenu");

        menuItem.addEventListener("click", function (event) {
            event.stopPropagation();

            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "block";
            }
        });

        submenu.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });

    document.addEventListener("click", function () {
        menuItems.forEach(function (menuItem) {
            const submenu = menuItem.querySelector(".submenu");
            submenu.style.display = "none";
        });
    });
});
