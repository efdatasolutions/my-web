document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in-up");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85; // Ajusta el punto de activación

        elements.forEach((el) => {
            const rect = el.getBoundingClientRect().top;

            if (rect < triggerBottom) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Para activar elementos visibles al cargar la página
});

    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
        document.querySelector('.social-icons').classList.toggle('active');
        document.querySelectorAll('.dropdown').forEach(function(dropdown) {
            dropdown.classList.remove('active');
        });
    });

    document.querySelectorAll('.dropdown .dropbtn').forEach(function(dropbtn) {
        dropbtn.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) { // Solo en móvil
                e.preventDefault();
                const dropdown = this.parentElement;
                dropdown.classList.toggle('active');
            }
        });
    });


    function toggleInfo(id) {
        var element = document.getElementById(id);
        var button = document.querySelector(`[onclick="toggleInfo('${id}')"]`); // Encuentra el botón correspondiente
    
        if (element.style.display === "none" || element.style.display === "") {
            element.style.display = "block";
            button.textContent = "Ver menos";
        } else {
            element.style.display = "none";
            button.textContent = "Ver más";
        }
    }
    
    







