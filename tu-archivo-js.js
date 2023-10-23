
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuToggle = document.querySelector(".menu-toggle");
    const menuItems = document.querySelectorAll(".menu-item");

    menuToggle.addEventListener("click", function () {
        if (mobileMenu.style.left === "0px" || mobileMenu.style.left === "") {
            mobileMenu.style.left = "-100%";
        } else {
            mobileMenu.style.left = "0px";
        };
    
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
  
    $(document).ready(function(){
        $('.slider').slick({
            autoplay: true,
            arrows: true,
            dots: true,
        });
    });
    
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        var mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu.style.left === '-100%') {
            mobileMenu.style.left = '0';
        } else {
            mobileMenu.style.left = '-100%';
        }
    });
});
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/ruta/a/tu-service-worker.js')
            .then(function (registration) {
                console.log('Service Worker registrado con éxito:', registration);
            })
            .catch(function (error) {
                console.log('Error al registrar el Service Worker:', error);
            });
    });
}
const carrito = [];


function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoList = document.getElementById("carrito");
    carritoList.innerHTML = "";

    let total = 0;

    for (const producto of carrito) {
        const li = document.createElement("li");
        li.textContent = producto;
        carritoList.appendChild(li);

        // Calcula el precio total simulado
        // Puedes personalizar esto con los precios reales de tus productos
        total += calcularPrecio(producto);
    }

    const totalElement = document.getElementById("total");
    totalElement.textContent = total.toFixed(2);
}

// Función para calcular el precio de un producto (simulado)
function calcularPrecio(producto) {
    // Simulación de precios para productos
    const precios = {
        platito: 10.00,
        camita: 20.00,
        collar: 5.00,
    };

    return precios[producto] || 0;
}

// Función para realizar una compra (simulada)
function realizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de realizar una compra.");
    } else {
        alert("¡Compra realizada con éxito! Gracias por elegir nuestros productos.");
        carrito.length = 0; // Vacía el carrito después de la compra
        actualizarCarrito();
    }
}
