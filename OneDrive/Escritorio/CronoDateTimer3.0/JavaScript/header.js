

    document.addEventListener('DOMContentLoaded', () => {
        const lenguajeSpan = document.getElementById('lenguaje'); // El span que muestra el idioma actual
        const dropdownItems = document.querySelectorAll('.dropdown-item'); // Todas las opciones del menú
    
        dropdownItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    
                // Obtén el idioma seleccionado
                const selectedLanguage = item.getAttribute('data-lenguaje');
                const selectedText = item.textContent.trim();
    
                // Actualiza el span con el idioma seleccionado
                lenguajeSpan.setAttribute('data-lenguaje', selectedLanguage);
                lenguajeSpan.textContent = selectedText;
    
                // Cambia el idioma de la página (puedes personalizar esta función)
                cambiarContenidoIdioma(selectedLanguage);
            });
        })
        
        ;

    })

